export function addToParentNode(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode) {
  if (!parent) {
    console.warn('Undefined parent (top level component) - skipping', node);
    return;
  }

  node.parent = parent;

  // Root node
  if (!parent.children) { return; }

  let { children } = parent;
  let anchorIdx = children.indexOf(anchor);

  if (anchorIdx > -1) {
    parent.children = [...children.slice(0, anchorIdx), node, ...children.slice(anchorIdx)];
  } else {
    parent.children = parent.children.concat([node]);
  }

  // console.info('parent.children is now', parent.children);
}
