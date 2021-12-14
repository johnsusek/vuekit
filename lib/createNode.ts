import { emitAction, emitEvent } from './events';
import { getPropValues } from './props';
import { valueTypeForJSType } from './type';
import { classNameFromTag } from './classNameFromTag';
import { setInstanceValue } from './setValue';

let nodes = new Set();
globalThis.nodes = nodes;

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

export function createInstance(tag: string, props: VueKitNodeProps = {}, applyProps = false): [NSObject, Record<string, any>] {
  let instance: NSObject;
  let className = classNameFromTag(tag);
  let builtProps = buildPropDefaults(tag, props);
  let constructorParams = propsToConstructorParams(builtProps);

  instance = globalThis[className](constructorParams);

  if (applyProps) {
    for (let [key, value] of Object.entries(builtProps)) {
      setInstanceValue(instance, key, value, true);
    }
  }

  return [instance, builtProps];
}

// A VueKitNode is roughly analagous to a Vue VNode or a DOM Node.
// Like any tree node, its main focus is around hierarchy and adding/removing
// from the tree. It should not care too much what its view instance is, unless
// it affects the hierarchy for some reason.
export function createNode(tag: string, props: VueKitNodeProps = {}): VueKitNode {
  if (['CollectionViewItem', 'Row'].includes(tag)) {
    return VueKitNode.create(null, props, null, null);
  }

  let instance: NSObject;
  let builtProps: VueKitNodeProps;
  let controller: NSViewController;

  if (tag === 'NSSplitView') {
    // @ts-ignore
    controller = NSSplitViewController();
    // @ts-ignore
    instance = controller.splitView;

    builtProps = buildPropDefaults(tag, props);
  }
  else {
    [instance, builtProps] = createInstance(tag, props);
  }

  // This is a bridged call that creates the node on the Swift side
  // It will call emitEvent/emitAction as the user interacts with the UI
  let node = VueKitNode.create(instance, builtProps, emitEvent, emitAction);

  if (controller) {
    node.controller = controller;
    // @ts-ignore
    node.view = controller.view;
  }
  else {
    node.view = instance as NSView;
  }

  node.view.translatesAutoresizingMaskIntoConstraints = false;
  node.view.wantsLayer = true;

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
