import { createInstance } from '.';

function addToTable(instance: NSTableColumn, parentInstance: NSTableView) {
  parentInstance.addTableColumn(instance);
}

function add(instance: NSView, parentInstance: NSView) {
  parentInstance.addSubview(instance);
}

function addWithAnchor(instance: NSView, parentInstance: NSView, anchor: VueKitNode) {
  if (anchor.instance) {
    // console.log('insert after this view: ', anchor.instance);
    parentInstance.addSubviewPositionedRelativeTo(instance, NSWindow.OrderingMode.Below, anchor.instance as NSView);
  }
  else {
    console.error('Could not insert view because anchor has no view: ', instance, anchor);
    // TODO: loop index backwards from anchor until we find a el with a view
  }
}

function addToScroll(instance: NSView, parentInstance: NSScrollView) {
  // TODO: NSScrollView can only have one child, need to enforce this in template
  // or otherwise abstract scrollviews
  // let clipView = createInstance('ClipView') as NSClipView;
  console.info('adding subview and setting documentView of NSScrollView to:', instance);
  // clipView.addSubview(instance);
  parentInstance.addSubview(instance);
  // parentInstance.documentView = instance;
}

type ArrangedView = NSStackView | NSSplitView

function addToArranged(instance: NSView, parent: VueKitNode, anchor: VueKitNode) {
  let parentInstance = parent.instance as ArrangedView;

  if (!anchor) {
    parentInstance.addArrangedSubview(instance);
    return;
  }

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
    if (parent.children[idx].instance) {
      nearestPosInParentNodeWithView = idx;
      break;
    }
  }

  let nearestViewInParentNode = parent.children[nearestPosInParentNodeWithView];

  // The position in the parent NSView hierarchy (does not include text/comment nodes)
  let childrenWithViews = parent.children.filter(c => c.instance);
  let anchorViewPosition = childrenWithViews.indexOf(nearestViewInParentNode);

  anchorViewPosition = anchorViewPosition < 0 ? 0 : anchorViewPosition;

  // console.info('anchor is at children position: ', anchorPosInParentNode, 'of', parent.children, 'view position: ', anchorViewPosition, 'of', childrenWithViews);
  parentInstance.insertArrangedSubviewAtIndex(instance, anchorViewPosition);
}

function addToStackGravityArea(instance, parentInstance, gravityArea) {
  // TODO: check anchor?
  let area = gravityArea === undefined ? NSStackView.Gravity.Center : gravityArea;

  parentInstance.addViewInGravity(instance, area);
  // console.log('added ', el, 'to gravity area', NSStackView.Gravity[area]);
}

export function addNodeToParentView(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode, gravityArea?: NSStackView.Gravity) {
  if (!parent.instance || !node.instance) return;

  let parentInstance = parent.instance;
  let { instance } = node;

  if (instance instanceof NSTableColumn && parentInstance instanceof NSTableView) {
    addToTable(instance, parentInstance);
  }
  else if (instance instanceof NSView) {
    if (parentInstance instanceof NSStackView && parentInstance.distribution === NSStackView.Distribution.GravityAreas) {
      addToStackGravityArea(instance, parentInstance, gravityArea);
    }
    else if (parentInstance instanceof NSStackView || parentInstance instanceof NSSplitView) {
      addToArranged(instance, parent, anchor);
    }
    else if (parentInstance instanceof NSScrollView) {
      addToScroll(instance, parentInstance);
    }
    else if (parentInstance instanceof NSView) {
      if (anchor) {
        addWithAnchor(instance, parentInstance, anchor);
      }
      else {
        add(instance, parentInstance);
      }
    }
    else if (parentInstance instanceof NSWindow) {
      add(instance, parentInstance.contentView);
    }
  }

  // Inserting a view into an NSWindow's root contentView
  // is a special case where we always want to fill the
  // entire view
  // If we didn't do this, users would have to add the
  // same 4 constraints to every child of a <Window>
  if (parentInstance instanceof NSWindow && instance instanceof NSView) {
    instance.topAnchor.constraintWithEqualTo(parentInstance.contentView.topAnchor).setActive(true);
    instance.bottomAnchor.constraintWithEqualTo(parentInstance.contentView.bottomAnchor).setActive(true);
    instance.leadingAnchor.constraintWithEqualTo(parentInstance.contentView.leadingAnchor).setActive(true);
    instance.trailingAnchor.constraintWithEqualTo(parentInstance.contentView.trailingAnchor).setActive(true);
  }
}

export function addNodeToParentNode(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode) {
  if (!parent) return;
  if (!parent.children) return;

  node.parent = parent;

  let { children } = parent;
  let anchorIdx = children.indexOf(anchor);

  if (anchorIdx > -1) {
    parent.children = [...children.slice(0, anchorIdx), node, ...children.slice(anchorIdx)];
  }
  else {
    parent.children = parent.children.concat([node]);
  }
}
