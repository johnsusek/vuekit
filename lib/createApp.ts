import { createRenderer } from '@vue/runtime-core';
import { setInstanceValue } from './setInstanceValue';
import { addNodeToParentView, addNodeToParentNode } from './addNodeToParent';
import constraints from './plugins/constraints';
import { createNode } from './createNode';

let windows = new Set();

const nodeOps = {
  createElement(tag: string, _?: boolean, __?: string, props?: VueKitNodeProps) {
    return createNode(tag, props);
  },

  insert(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode | null) {
    if (node.instance instanceof NSWindow) {
      windows.add(node);
    }
    else {
      addNodeToParentView(node, parent, anchor);
      addNodeToParentNode(node, parent, anchor);
    }
  },

  remove(node: VueKitNode) {
    if (node.instance instanceof NSWindow) {
      windows.delete(node);
    }

    if (node.instance instanceof NSView) {
      node.instance.removeFromSuperview();
    }

    if (node.parent?.children?.length > 0) {
      let { children } = node.parent;
      let idx = node.parent.children.indexOf(node);
      // console.log('Before remove... el.parent.children is', el.parent.children);
      node.parent.children = [...children.slice(0, idx), ...children.slice(idx + 1)];
      // console.log('After remove... el.parent.children is now', el.parent.children);
    }

    node.destroy();
  },

  patchProp(node: VueKitNode, key: string, _: any, nextValue: any) {
    // if (nextValue !== undefined) {
    //   console.log('patch prop', key);
    // }
    setInstanceValue(node, key, nextValue, true);
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

const { createApp, render } = createRenderer<VueKitNode, VueKitNode>(nodeOps);

function create(App: any) {
  let app = createApp(App);

  app.use(constraints);

  return app;
}

export { create as createApp, render };
