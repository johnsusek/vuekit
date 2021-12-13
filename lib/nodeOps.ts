import { setNodeValue } from './setValue';
import { addNodeToParentView, addNodeToParentNode } from './addToParent';
import { createNode, removeNode } from './createNode';

let windows = new Set();

export const nodeOps = {
  createElement(tag: string, _?: boolean, __?: string, props?: VueKitNodeProps) {
    return createNode(tag, props);
  },

  insert(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode | null) {
    if (node.instance instanceof NSWindow) {
      windows.add(node);
    }
    else {
      addNodeToParentNode(node, parent, anchor);
      addNodeToParentView(node, parent, anchor);
    }
  },

  remove(node: VueKitNode) {
    if (node.instance instanceof NSWindow) {
      windows.delete(node);
    }

    return removeNode(node);
  },

  patchProp(node: VueKitNode, key: string, _: any, nextValue: any) {
    setNodeValue(node, key, nextValue, true);
  },

  nextSibling(node: VueKitNode) {
    let children = node.parent?.children;

    if (!children) {
      return null;
    }

    let nextIndex = children.indexOf(node) + 1;

    if (nextIndex <= children.length - 1) {
      return children[nextIndex];
    }

    return null;
  },

  parentNode(node: VueKitNode) {
    return node?.parent;
  },

  // We create an empty node for text/comments, even though we don't create
  // NSViews from them, because vue uses them for anchors when inserting nodes
  createText() {
    return VueKitNode.create(null, null, null, null);
  },

  createComment() {
    return VueKitNode.create(null, null, null, null);
  },

  setElementText() {
    throw new Error('setElementText not supported');
  },

  querySelector() {
    throw new Error('querySelector not supported');
  },

  setText() {
    throw new Error('setText not supported');
  },

  setScopeId() {
    throw new Error('setScopeId not supported');
  },

  cloneNode() {
    throw new Error('cloneNode not supported');
  },

  insertStaticContent() {
    throw new Error('insertStaticContent not supported');
  }
};
