import { emitAction, emitEvent } from './events';
import { getPropValues } from './node';
import { valueTypeForJSType } from './type';
import { classNameFromTag } from './classNameFromTag';

let nodes = new Set();
globalThis.nodes = nodes;

export function createNode(tag: string, props: VueKitNodeProps = {}): VueKitNode {
  let className = classNameFromTag(tag);
  let builtProps: VueKitNodeProps = buildPropDefaults(tag, props);

  // Each VueKitNode has one instance of an NSObject, this is
  // often an NSView subclass, but not always (e.g. TableColumn)
  let instance: NSObject;

  // Post-create actions
  let controller: NSViewController;

  if (tag === 'NSSplitView') {
    // @ts-ignore
    controller = NSSplitViewController();
    // @ts-ignore
    instance = controller.splitView; // instance for props to get applied
  }
  else if (tag === 'SplitViewItem') {
    let viewController = NSViewController();

    // @ts-ignore
    instance = NSSplitViewItem({ viewController, ...builtProps });
  }
  else {
    instance = globalThis[className](builtProps);
  }

  // This is a bridged call that creates the node on the Swift side
  let node: VueKitNode = VueKitNode.create(instance, builtProps, emitEvent, emitAction);

  if (controller) {
    // @ts-ignore
    if (controller.view) {
      // @ts-ignore
      controller.view.translatesAutoresizingMaskIntoConstraints = false;
    }
    node.controller = controller;
  }

  if (instance instanceof NSWindow) {
    instance.makeKeyAndOrderFront(null);
    instance.center();
  }

  let instanceView: NSView;

  if (instance instanceof NSView) {
    instanceView = instance;
  }
  else if (instance instanceof NSWindow) {
    instanceView = instance.contentView;
  }
  else {
    // console.log(`Could not find view for ${instance}, skipping settings translatesAutoresizingMaskIntoConstraints set to false`);
  }

  if (instanceView) {
    // https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG
    //
    // Autoresizing masks are kind of a hack on top of OG coordinate/frame-based layouts,
    // to make them more responsive to external changes in size.
    //
    // Auto Layout (constraints) replaces autoresizing masks.
    //
    // Since VueKit uses Auto Layout via the constraint plugin and views like
    // NSStackView (which uses Auto Layout internally), we never want autoresizing masks.
    //
    if (instance instanceof NSWindow) {
      // instanceView = instance.contentView;
    }
    else {
      instanceView.translatesAutoresizingMaskIntoConstraints = false;
    }
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
    let defaultStyleMask = NSWindow.StyleMask.Resizable | NSWindow.StyleMask.Titled | NSWindow.StyleMask.Closable | NSWindow.StyleMask.Miniaturizable;
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
      // console.log(`Updating v-model nscontrol change (calling node.props['onUpdate:modelValue']) with value of el["${valueTypeKey}"] :`, el[valueTypeKey]);
      vModelUpdateFn(node.instance[valueTypeKey]);
    };
  }

  return nodeProps;
}
