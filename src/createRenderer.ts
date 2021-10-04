import { createRenderer } from '@vue/runtime-core';
import { VueKitNode, VueKitNodeProps } from './types/VueKit';
import {
  createView, getPropValues, setNodeValue
} from './lib/node';
import { emitAction, emitEvent } from './lib/bridge';
import { capitalize, snakeToCamel } from './lib/string';

let windows = new Set();
let global = globalThis as any;

function fillParentView(view: NSView, parent: NSView) {
  view.translatesAutoresizingMaskIntoConstraints = false;
  view.topAnchor.constraintWithEqualTo(parent.topAnchor).setActive(true);
  view.bottomAnchor.constraintWithEqualTo(parent.bottomAnchor).setActive(true);
  view.leadingAnchor.constraintWithEqualTo(parent.leadingAnchor).setActive(true);
  view.trailingAnchor.constraintWithEqualTo(parent.trailingAnchor).setActive(true);
}

function createWindow(vnodeProps: VueKitNodeProps = {}) {
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

function addToParentNode(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode) {
  if (!parent) {
    console.warn('Undefined parent (top level component) - skipping', node);
    return;
  }

  node.parent = parent;

  // Root node
  if (!parent.children) return;

  let { children } = parent;
  let anchorIdx = children.indexOf(anchor);

  if (anchorIdx > -1) {
    parent.children = [...children.slice(0, anchorIdx), node, ...children.slice(anchorIdx)];
  } else {
    parent.children = parent.children.concat([node]);
  }

  // console.info('parent.children is now', parent.children);
}

function addToParentView(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode, gravityArea?: NSStackView.Gravity) {
  let parentView = parent.view;
  let { view } = node;

  if (!parentView) {
    // console.warn('Parent does not have an NSView, skipping insertion of this NSView', el);
    return;
  }

  if (!view) {
    // console.warn('Node does not have an NSView, skipping insertion into parent NSView', el);
    return;
  }

  if (parentView instanceof NSStackView && parentView.distribution === NSStackView.Distribution.GravityAreas) {
    // TODO: check anchor?
    let area = gravityArea === undefined ? NSStackView.Gravity.Center : gravityArea;

    parentView.addViewInGravity(node.view, area);
    // console.log('added ', el, 'to gravity area', NSStackView.Gravity[area]);
  } else if (parentView instanceof NSStackView || parentView instanceof NSSplitView) {
    if (!anchor) {
      parentView.addArrangedSubview(view);
    } else {
      // console.info('Inserting ', el, 'into', parent);

      // The position in the parent's list of child VueKitNodes (includes text/comment nodes)
      let anchorPosInParentNode = parent.children.indexOf(anchor);

      if (anchorPosInParentNode === -1) {
        throw new Error('Could not find anchor position in parent');
      }

      let nearestPosInParentNodeWithView;

      // If the anchor is a text/comment node, find the position of
      // the nearest next sibling that has a view, so that we
      // can use that to determine where to insert the NSView
      for (let idx = anchorPosInParentNode; idx < parent.children.length; idx++) {
        if (parent.children[idx].view) {
          nearestPosInParentNodeWithView = idx;
          break;
        }
      }

      let nearestViewInParentNode = parent.children[nearestPosInParentNodeWithView];

      // The position in the parent NSView hierarchy (does not include text/comment nodes)
      let childrenWithViews = parent.children.filter((c) => c.view);
      let anchorViewPosition = childrenWithViews.indexOf(nearestViewInParentNode);

      anchorViewPosition = anchorViewPosition < 0 ? 0 : anchorViewPosition;

      // console.info('anchor is at children position: ', anchorPosInParentNode, 'of', parent.children, 'view position: ', anchorViewPosition, 'of', childrenWithViews);

      parentView.insertArrangedSubviewAtIndex(view, anchorViewPosition);
    }
  } else if (parentView instanceof NSScrollView) {
    // TODO: NSScrollView can only have one child, need to enforce this in template
    // or otherwise abstract scrollviews
    console.log('setting documentView of NSScrollView to view');
    parentView.documentView = view;
  } else if (anchor) {
    if (anchor.view) {
      console.log('insert after this view: ', anchor.view);
      parentView.addSubviewPositionedRelativeTo(view, NSWindow.OrderingMode.Below, anchor.view);
    } else {
      console.log('Could not insert view because anchor has no view: ', view, anchor);
      // TODO: loop index backwards from anchor until we find a el with a view
    }
  } else {
    parentView.addSubview(view);

    if (parentView === parentView.window.contentView) {
      fillParentView(view, parentView);
    }
  }
}

function findClass(type: string) {
  let formattedType = capitalize(snakeToCamel(type));

  // This will try the prefixed version first
  // av-capture -> AvCapture

  // Strip framework prefixes and try again
  // av-capture -> Capture
  let unprefixedType = type.replace(/[(av|ns|ik)]-/, '');
  let unprefixedFormattedType = capitalize(snakeToCamel(unprefixedType));

  let namesToTry = [
    formattedType,
    unprefixedFormattedType,
    `${formattedType}View`,
    `${unprefixedFormattedType}View`,
    `NS${unprefixedFormattedType}` // for non-view components like Window
  ];

  // Try adding `View` suffix and try again
  // av-capture -> AvCaptureView

  // Strip prefix and add `View` suffix
  // av-capture -> CaptureView

  for (const nameToTry of namesToTry) {
    if (globalThis[nameToTry]) {
      // console.log(`Found globalThis.${nameToTry} for type ${type}`);
      return nameToTry;
    }
  }

  throw new Error(`Bridged Class ${type} not found.`);
}

function createNode(className: string, vnodeProps: VueKitNodeProps = {}) {
  let node: VueKitNode;

  if (className === 'NSWindow') {
    node = createWindow(vnodeProps);
  } else {
    let view = createView(className, vnodeProps);
    let viewId = `${className}-${Math.random().toString()}`;
    node = global.VueKitNode.create(view, viewId, vnodeProps, emitEvent, emitAction);
  }

  return node;
}

function createElement(type: string, _?: boolean, __?: string, vnodeProps?: VueKitNodeProps) {
  let node: VueKitNode;

  // button -> Button
  // text -> Text
  // stack -> StackView
  // text-field -> TextField
  // window -> NSWindow
  // av-player -> PlayerView
  // av-capture -> CaptureView
  // ik-camera-device -> CameraDeviceView
  let className = findClass(type);

  // console.log(`Creating ${viewClass}`, vnodeProps);

  node = createNode(className, vnodeProps);

  if (!node.props) {
    console.log('Could not find node.props to set');
    return node;
  }

  if (!node.view) {
    console.log('Could not find node.view');
    return node;
  }

  return node;
}

//
// A VueKitNode is an element like a <button> or a <window>
//
// Nodes conceptually correspond to a single bridged instance
// of a native class.
//

const { createApp } = createRenderer<VueKitNode, VueKitNode>({
  createElement,

  insert(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode | null) {
    // console.log(`Inserting ${el.key}`, el);

    let gravity;

    if (node.props?.isBottomSlotChildP) {
      gravity = NSStackView.Gravity.Bottom;
    }

    if (node.props?.isBottomSlotP) {
      gravity = NSStackView.Gravity.Bottom;
    }

    addToParentView(node, parent, anchor, gravity);

    if (node.type === 'NSWindow') {
      windows.add(node);
    } else {
      addToParentNode(node, parent, anchor);
    }
  },

  remove(node: VueKitNode) {
    if (node.type === 'NSWindow') {
      windows.delete(node);
      // TODO: additional window cleanup
    }

    if (node.view) node.view.removeFromSuperview();

    if (node.parent && node.parent?.children.length > 0) {
      let { children } = node.parent;
      let idx = node.parent.children.indexOf(node);
      // console.log('Before remove... el.parent.children is', el.parent.children);
      node.parent.children = [...children.slice(0, idx), ...children.slice(idx + 1)];
      // console.log('After remove... el.parent.children is now', el.parent.children);
    }

    node.destroy();
  },

  patchProp(node: VueKitNode, key: string, _: any, nextValue: any) {
    setNodeValue(node, key, nextValue, true);
  },

  nextSibling(node: VueKitNode) {
    let children = node.parent?.children;

    if (!children) return null;

    let nextIndex = children.indexOf(node) + 1;

    if (nextIndex <= children.length - 1) return children[nextIndex];

    return null;
  },

  parentNode(node: VueKitNode) {
    return node?.parent;
  },

  // We create an empty node for text/comments, even though we don't create
  // NSViews from them, because vue uses them for anchors when inserting nodes
  createText() {
    return global.VueKitNode.create(null, `text-${Math.random().toString()}`, {}, null, null);
  },

  createComment() {
    return global.VueKitNode.create(null, `comment-${Math.random().toString()}`, {}, null, null);
  },

  setElementText() {
    throw new Error('setElementText not supported');
  },

  querySelector() {
    // IDEA: Use NSView tags for this type of functionality?
    throw new Error('querySelector not supported');
  },

  setText() {
    throw new Error('setText not supported');
  },

  setScopeId(node: VueKitNode, id: string) {
    console.log('setScopeId', node, id);
    throw new Error('setScopeId not supported');
  },

  cloneNode() {
    throw new Error('cloneNode not supported');
  },

  insertStaticContent() {
    throw new Error('insertStaticContent not supported');
  }
});

export { createApp };
