import { emitAction, emitEvent } from './events';
import { getPropValues } from './props';
import { valueTypeForJSType } from './type';
import { classNameFromTag } from './classNameFromTag';
import { setInstanceValue, setNodeValue } from './setValue';

let nodes = new Set();
globalThis.nodes = nodes;

function applyInstanceDefaults(instance: NSObject) {
  if (instance instanceof NSCollectionView) {
    let layout = NSCollectionViewFlowLayout();

    // @ts-ignore
    instance.collectionViewLayout = layout;
    // instance.allowsMultipleSelection = false;
    // @ts-ignore
    // instance.backgroundColors = [NSColor.clearColor()];
    instance.isSelectable = true;

    // @ts-ignore
    instance.registerClassStringForItemWithIdentifier('CollectionViewItem', 'CollectionViewItem');
  }

  if (instance instanceof NSWindow) {
    instance.contentView.wantsLayer = true;

    // TODO: these should be props on the <Window> component that default to true
    // this is too opinionated to be at this depth
    instance.makeKeyAndOrderFront(null);
  }

  if (instance instanceof NSView) {
    // Opinionated Default:
    // These days, layer-backed views are the norm, and
    // in macOS 11+ all windows use CA layers
    instance.wantsLayer = true;

    // Opinionated Default:
    //
    // Autoresizing masks are a hack on top of OG coordinate/frame-based layouts,
    // to make them more responsive to external changes in size.
    //
    // AutoLayout replaces autoresizing masks.
    //
    // Since VueKit uses AutoLayout via the constraint plugin and views like
    // NSStackView (which uses AutoLayout internally), we never want autoresizing masks.
    //
    // This completely abstracts away the legacy layout systems
    // that often confuse new app developers.

    instance.translatesAutoresizingMaskIntoConstraints = false;
  }
}

// Each VueKitNode holds one instance of an NSObject, this is
// usually an NSView subclass, but not always (e.g. Window, TableColumn)
//
// Some more complex classes use controllers to instantiate views
// with pre-defined behaviors/defaults (e.g. NSSplitViewController/Item),
// so we use those to get their opinionated defaults.
//
// Importantly, this could all be done without using controllers, and instead
// setting all the defaults those controllers do on the NSViews ourselves.
// In other words, view controllers are something users of VueKit never need to know
// or think about.

function propsToConstructorParams(props: VueKitNodeProps) {
  let params = { ...props };
  // Here is a place where a node prop and an instance property are not a 1:1 mapping:
  //
  // On a node, we have an abstracted `layer` prop:
  // <Stack :layer="{ backgroundColor, position }" />
  //
  // But on an instance we don't want to just set instance.layer = props.layer,
  // since props.layer is not a CALayer. Instead for this special case we just
  // want to apply the properties of props.layer onto instance.layer in
  // setInstanceValue, not as part of the constructor.
  //
  // In other words this is a general "merge this object instead of setting it"
  delete params.layer;

  return params;
}

let propertyForView = {
  'NSSplitView': 'splitView'
};

let controllerForView = {
  'NSSplitView': NSSplitViewController
};

export function createInstance(tag: string, props: VueKitNodeProps = {}, applyProps = false): [NSObject, Record<string, any>, NSObject?] {
  let instance: NSObject;
  let controller: NSViewController;
  let viewProperty = propertyForView[tag];
  let controllerClass = controllerForView[tag];
  let className = classNameFromTag(tag);
  let builtProps = buildPropDefaults(tag, props);
  let constructorParams = propsToConstructorParams(builtProps);

  if (controllerClass) {
    controller = controllerClass();
    // @ts-ignore
    if (controller.view) {
      // @ts-ignore
      controller.view.translatesAutoresizingMaskIntoConstraints = false;
      // @ts-ignore
      controller.view.wantsLayer = true;
    }
  }

  if (viewProperty) {
    instance = controller[viewProperty];
  }
  else {
    instance = globalThis[className](constructorParams);
  }

  applyInstanceDefaults(instance);

  if (applyProps) {
    for (let [key, value] of Object.entries(builtProps)) {
      setInstanceValue(instance, key, value, true);
    }
  }

  return [instance, builtProps, controller];
}

// A VueKitNode is roughly analagous to a Vue VNode or a DOM Node.
// Like any tree node, its main focus is around hierarchy and adding/removing
// from the tree. It should not care too much what its view instance is, unless
// it affects the hierarchy for some reason.
export function createNode(tag: string, props: VueKitNodeProps = {}): VueKitNode {
  if (['CollectionViewItem', 'Row'].includes(tag)) {
    return VueKitNode.create(null, props, null, null);
  }

  let [instance, builtProps, controller] = createInstance(tag, props);

  // This is a bridged call that creates the node on the Swift side
  // It will call emitEvent/emitAction as the user interacts with the UI
  let node = VueKitNode.create(instance, builtProps, emitEvent, emitAction);

  if (propertyForView[tag]) {
    // @ts-ignore
    node.view = controller.view;
  }
  else {
    node.view = instance as NSView;
  }

  // @ts-ignore
  node.view.translatesAutoresizingMaskIntoConstraints = false;
  // @ts-ignore
  node.view.wantsLayer = true;

  node.controller = controller;

  // Post-create instance/view defaults

  if (instance instanceof NSView && builtProps.layer) {
    log.trace('builtProps.layer', builtProps.layer);
    setNodeValue(node, 'layer', builtProps.layer);
  }

  nodes.add(node);

  return node;
}

export function removeNode(node: VueKitNode) {
  if (node.instance instanceof NSView) {
    node.instance.removeFromSuperview();
  }

  if (node.parent?.children?.length > 0) {
    let { children } = node.parent;
    let idx = node.parent.children.indexOf(node);
    node.parent.children = [...children.slice(0, idx), ...children.slice(idx + 1)];
  }

  node.destroy();
  nodes.delete(node);
}

function buildPropDefaults(tag: string, props: VueKitNodeProps) {
  let className = classNameFromTag(tag);
  let nodeProps = props;

  if (className === 'NSWindow') {
    let defaultContentRect = {
      x: 0,
      y: 0,
      width: 320,
      height: 240
    };
    let defaultStyleMask = NSWindow.StyleMask.Resizable
      | NSWindow.StyleMask.Titled
      | NSWindow.StyleMask.Closable
      | NSWindow.StyleMask.Miniaturizable;
    let defaultBacking = NSWindow.BackingStoreType.Retained;

    nodeProps = getPropValues({
      contentRect: defaultContentRect,
      styleMask: defaultStyleMask,
      backing: defaultBacking,
      defer: true
    }, props);
  }
  else if (className === 'NSControl') {
    // TODO: map to @change
    props.onControlTextDidChange = (node: VueKitNode) => {
      // Control text has changed and the component has a v-model, so update it
      let vModelUpdateFn = node.props['onUpdate:modelValue'];
      if (!vModelUpdateFn) return;
      let valueTypeKey = valueTypeForJSType(typeof node.props.modelValue);
      // log.debug(`Updating v-model nscontrol change (calling node.props['onUpdate:modelValue']) with value of el["${valueTypeKey}"] :`, el[valueTypeKey]);
      vModelUpdateFn(node.instance[valueTypeKey]);
    };
  }

  return nodeProps;
}
