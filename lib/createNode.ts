import { getPropValues, getConstructor } from './node';
import { setNodeValue } from './setNodeValue';
import { emitAction, emitEvent } from './bridge';
import { valueTypeForJSType } from './type';

const global = globalThis as any;

function createView(type: string, vnodeProps?: VueKitNodeProps): NSView {
  let view;
  let viewClass = globalThis[type];

  if (!viewClass) {
    // throw new Error(`Class ${type} not found.`);
    console.log(`Bridged viewClass ${type} not found.`);
    return null;
  }

  let { args, name } = getConstructor(type, vnodeProps);

  let fn = viewClass[name];

  if (typeof fn !== 'function') {
    let definedProps = Object.keys(vnodeProps).filter(key => vnodeProps[key] !== undefined && typeof vnodeProps[key] !== 'function');
    throw new Error(`Could not find a valid constructor for type ${type} using defined component props ${definedProps}`);
  }

  if (args.length === 0) {
    // console.log('Using constructor ', name, '(no params)');
    view = fn();
  }

  let argValues = args.map(arg => vnodeProps[arg]);

  // console.log('Using constructor ', name, 'with params', argValues);

  view = fn(...argValues);

  if (!view) {
    throw new Error(`Could not create view for element type ${type}.`);
  }

  if (view instanceof NSControl) {
    // TODO: map to @change
    vnodeProps.onControlTextDidChange = (node: VueKitNode) => {
      // Control text has changed and the component has a v-model, so update it
      let vModelUpdateFn = node.props['onUpdate:modelValue'];

      if (vModelUpdateFn) {
        let valueTypeKey = valueTypeForJSType(typeof node.props.modelValue);
        // console.log(`Updating v-model nscontrol change (calling node.props['onUpdate:modelValue']) with value of el["${valueTypeKey}"] :`, el[valueTypeKey]);
        vModelUpdateFn(view[valueTypeKey]);
      }
    };
  }

  return view;
}

export function createWindow(vnodeProps: VueKitNodeProps = {}) {
  let defaultContentRect = {
    x: 0,
    y: 0,
    width: 320,
    height: 240
  };
  let defaultStyleMask = NSWindow.StyleMask.Resizable | NSWindow.StyleMask.Titled | NSWindow.StyleMask.Closable | NSWindow.StyleMask.Miniaturizable;
  let defaultBacking = NSWindow.BackingStoreType.Retained;

  let nodeProps = getPropValues({
    contentRect: defaultContentRect,
    styleMask: defaultStyleMask,
    backing: defaultBacking,
    defer: true
  }, vnodeProps);

  let win = NSWindow.createWithContentRectStyleMaskBackingDefer(nodeProps.contentRect, nodeProps.styleMask, nodeProps.backing, nodeProps.defer);

  // The one place where we want this - this is the default, but setting here to
  // make it explicit
  win.contentView.translatesAutoresizingMaskIntoConstraints = true;

  let node = global.VueKitNode.create(win.contentView, `window-${Math.random().toString()}`, {}, emitEvent, emitAction);

  for (let [key, value] of Object.entries(nodeProps)) {
    // Don't set values that were used in constructor
    if (nodeProps[key] !== undefined) continue;
    setNodeValue(node, key, value);
  }

  win.makeKeyAndOrderFront(null);
  win.center();

  return node;
}

export function createNode(className: string, vnodeProps: VueKitNodeProps = {}) {
  let node: VueKitNode;

  if (className === 'NSWindow') {
    node = createWindow(vnodeProps);
  }
  else {
    let view = createView(className, vnodeProps);
    let viewId = `${className}-${Math.random().toString().substring(2)}`;

    // https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG
    //
    // Autoresizing masks are kind of a hack on top of OG coordinate/frame-based layouts,
    // to make them more responsive to external changes in size.
    //
    // Auto Layout (constraints) replaces autoresizing masks.
    //
    // Since VueKit uses Auto Layout via the `c` directive and views like
    // NSStackView (which uses Auto Layout internally), we never want autoresizing masks.
    //
    view.translatesAutoresizingMaskIntoConstraints = false;

    node = global.VueKitNode.create(view, viewId, vnodeProps, emitEvent, emitAction);
  }

  return node;
}
