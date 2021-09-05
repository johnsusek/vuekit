import { createRenderer, defineComponent } from '@vue/runtime-core';
import { VueKitNodeProps } from './types/VueKit';
import './types/macos/AppKit.d.ts';

import {
  createView, getConstructor, getPropValues, setNodeValue
} from './lib/node';
import { emitAction, emitEvent } from './lib/bridge';
import { snakeToCamel } from './lib/string';

let windows = new Set();

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
  let defaultStyleMask = NSWindowStyleMask.Resizable | NSWindowStyleMask.Titled | NSWindowStyleMask.Closable | NSWindowStyleMask.Miniaturizable;
  let defaultBacking = NSBackingStoreType.Retained;

  let nodeProps = getPropValues({
    contentRect: defaultContentRect,
    styleMask: defaultStyleMask,
    backing: defaultBacking,
    defer: true
  }, vnodeProps);

  let win = (globalThis as any).NSWindow.createWithContentRectStyleMaskBackingDefer(nodeProps.contentRect, nodeProps.styleMask, nodeProps.backing, nodeProps.defer);
  let node = VueKitNode.create(win.contentView, `window-${Math.random().toString()}`, {}, emitEvent, emitAction);

  for (let [key, value] of Object.entries(nodeProps)) {
    // Don't set values that were used in constructor
    if (nodeProps[key] !== undefined) continue;
    setNodeValue(node, key, value);
  }

  // TODO put into Window component
  win.makeKeyAndOrderFront(null);
  win.center();

  return node;
}

// Adds a VueKitNode to parent.children
function addToParentNode(el: VueKitNode, parent: VueKitNode, anchor?: VueKitNode) {
  if (!parent) {
    console.warn('Undefined parent (top level component) - skipping', el);
    return;
  }

  el.parent = parent;

  // Root node
  if (!parent.children) return;

  let children = parent.children;
  let anchorIdx = children.indexOf(anchor);

  if (anchorIdx > -1) {
    parent.children = [...children.slice(0, anchorIdx), el, ...children.slice(anchorIdx)];
  }
  else {
    parent.children = parent.children.concat([el]);
  }

  // console.info('parent.children is now', parent.children);
}

// Adds an NSView to parent NSView
function addToParentView(el: VueKitNode, parent: VueKitNode, anchor?: VueKitNode, gravityArea?: NSStackViewGravity) {
  let parentView = parent.view;
  let view = el.view;

  if (!parentView) {
    // console.warn('Parent does not have an NSView, skipping insertion of this NSView', el);
    return;
  }

  if (!view) {
    // console.warn('Node does not have an NSView, skipping insertion into parent NSView', el);
    return;
  }

  if (parentView instanceof NSStackView && parentView.distribution === NSStackViewDistribution.GravityAreas) {
    // TODO: check anchor?
    let area = gravityArea === undefined ? NSStackViewGravity.Center : gravityArea;

    parentView.addViewInGravity(el.view, area);
    // console.log('added ', el, 'to gravity area', NSStackViewGravity[area]);
  }
  else if (parentView instanceof NSStackView || parentView instanceof NSSplitView) {
    if (!anchor) {
      parentView.addArrangedSubview(view);
    }
    else {
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
      let childrenWithViews = parent.children.filter(c => c.view);
      let anchorViewPosition = childrenWithViews.indexOf(nearestViewInParentNode);

      anchorViewPosition = anchorViewPosition < 0 ? 0 : anchorViewPosition;

      // console.info('anchor is at children position: ', anchorPosInParentNode, 'of', parent.children, 'view position: ', anchorViewPosition, 'of', childrenWithViews);

      parentView.insertArrangedSubviewAtIndex(view, anchorViewPosition);
    }
  }
  else if (parentView instanceof NSScrollView) {
    // TODO: NSScrollView can only have one child, need to enforce this in template
    // or otherwise abstract scrollviews
    console.log('setting documentView of NSScrollView to view');
    parentView.documentView = view;
  }
  else if (anchor) {
    if (anchor.view) {
      console.log('insert after this view: ', anchor.view);
      parentView.addSubviewPositionedRelativeTo(view, NSWindowOrderingMode.Below, anchor.view);
    }
    else {
      console.log('Could not insert view because anchor has no view: ', view, anchor);
      // TODO: loop index backwards from anchor until we find a el with a view
    }
  }
  else {
    parentView.addSubview(view);

    if (parentView === parentView.window.contentView) {
      fillParentView(view, parentView);
    }
  }
}

function createElement(type: string, _?: boolean, __?: string, vnodeProps?: VueKitNodeProps) {
  let node: VueKitNode;

  // console.log(`Creating ${type}`, vnodeProps);

  let isWindow = snakeToCamel(type).toLowerCase() === 'nswindow';

  if (isWindow) {
    node = createWindow(vnodeProps);
  }
  else {
    let view = createView(type, vnodeProps);
    node = VueKitNode.create(view, `${type}-${Math.random().toString()}`, vnodeProps || {}, emitEvent, emitAction);
  }

  if (!node.props) {
    console.log('Could not find node.props to set');
    return node;
  }

  if (!node.view) {
    console.log('Could not find node.view');
    return node;
  }

  let { args } = getConstructor(type, vnodeProps);

  for (let [key, value] of Object.entries(node.props)) {
    if (args.includes(key)) continue;
    setNodeValue(node, key, value);
  }

  return node;
}

//
// A VueKitNode is any NSView
//
// Anything subclass specific is a Component
// All NSView subclasses get a vue component generated
//

const { createApp, render } = createRenderer<VueKitNode, VueKitNode>({
  createElement,

  insert(el: VueKitNode, parent: VueKitNode, anchor?: VueKitNode | null) {
    if (!el) {
      console.log('No el!', el, parent, anchor);
      return;
    }

    // console.log(`Inserting ${el.key}`, el);

    let gravity;

    if (el.props?.isBottomSlotChildP) {
      gravity = NSStackViewGravity.Bottom;
    }

    if (el.props?.isBottomSlotP) {
      gravity = NSStackViewGravity.Bottom;
    }

    addToParentView(el, parent, anchor, gravity);

    if (el.type === 'NSWindow') {
      windows.add(el);
    }
    else {
      addToParentNode(el, parent, anchor);
    }
  },

  remove(el: VueKitNode) {
    if (el.type === 'NSWindow') {
      windows.delete(el);
      // TODO: additional window cleanup
    }

    if (el.view) el.view.removeFromSuperview();

    if (el.parent && el.parent?.children.length > 0) {
      let children = el.parent.children;
      let idx = el.parent.children.indexOf(el);
      // console.log('Before remove... el.parent.children is', el.parent.children);
      el.parent.children = [...children.slice(0, idx), ...children.slice(idx + 1)];
      // console.log('After remove... el.parent.children is now', el.parent.children);
    }

    el.destroy();
  },

  patchProp(el: VueKitNode, key: string, _: any, nextValue: any) {
    setNodeValue(el, key, nextValue, true);
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
    return VueKitNode.create(null, `text-${Math.random().toString()}`, {}, null, null);
  },

  createComment() {
    return VueKitNode.create(null, `comment-${Math.random().toString()}`, {}, null, null);
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

  setScopeId(el: VueKitNode, id: string) {
    console.log('setScopeId', el, id);
    throw new Error('setScopeId not supported');
  },

  cloneNode() {
    throw new Error('cloneNode not supported');
  },

  insertStaticContent() {
    throw new Error('insertStaticContent not supported');
  }
});

export {
  createApp, render, createElement, defineComponent
};
