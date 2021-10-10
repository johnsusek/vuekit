import { createRenderer } from '@vue/runtime-core';
import { setNodeValue } from './setNodeValue';
import { createElement } from './createElement';
import { addToParentView } from './addToParentView';
import { addToParentNode } from './addToParentNode';

let windows = new Set();

const nodeOps = {
  createRoot() {
    return {};
  },

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
    }
    else {
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
};

const { createApp, render } = createRenderer<VueKitNode, VueKitNode>(nodeOps);

function create(App: any) {
  let app = createApp(App);
  return app;
}

export { create as createApp, render };
