/**
 *
 *
 * @param {NSTableColumn} instance
 * @param {NSTableView} parentInstance
 */
function addToTable(instance: NSTableColumn, parentInstance: NSTableView) {
  parentInstance.addTableColumn(instance);
}

/**
 *
 *
 * @param {NSView} instance
 * @param {NSView} parentInstance
 */
function add(instance: NSView, parentInstance: NSView) {
  parentInstance.addSubview(instance);
}

/**
 *
 *
 * @param {NSView} instance
 * @param {NSView} parentInstance
 * @param {VueKitNode} anchor
 */
function addWithAnchor(instance: NSView, parentInstance: NSView, anchor: VueKitNode) {
  if (anchor.instance) {
    console.log('insert after this view: ', anchor.instance);
    parentInstance.addSubviewPositionedWithRelativeTo(instance, NSWindow.OrderingMode.Below, anchor.instance as NSView);
  }
  else {
    console.error('Could not insert view because anchor has no view: ', instance, anchor);
    // TODO: loop index backwards from anchor until we find a el with a view
  }
}

/**
 *
 *
 * @param {NSView} documentView
 * @param {NSScrollView} scrollView
 */
function addToScroll(documentView: NSView, scrollView: NSScrollView) {
  // @ts-ignore
  let clipView = NSClipView();
  // @ts-ignore
  clipView.translatesAutoresizingMaskIntoConstraints = false;
  scrollView.contentView = clipView;
  scrollView.documentView = documentView;
}

/**
 *
 *
 * @param {NSView} view
 * @param {VueKitNode} parent
 * @param {VueKitNode} anchor
 * @returns
 */
function addToSplit(splitViewItem: NSSplitViewItem, parent: VueKitNode, anchor: VueKitNode) {
  let splitViewController = parent.controller as NSSplitViewController;

  if (!(splitViewItem instanceof NSSplitViewItem)) {
    debugger;
  }

  if (anchor) {
    let anchorViewPosition = getAnchorViewIndex(parent, anchor);
    // @ts-ignore
    splitViewController.insertSplitViewItemAtIndex(splitViewItem, anchorViewPosition);
  }
  else {
    // @ts-ignore
    splitViewController.addSplitViewItem(splitViewItem);
  }
}

/**
 *
 *
 * @param {NSView} view
 * @param {VueKitNode} parent
 * @param {VueKitNode} anchor
 * @returns
 */
function addToStack(view: NSView, parent: VueKitNode, anchor: VueKitNode) {
  let parentInstance = parent.instance as NSStackView;

  if (!anchor) {
    // console.log('Adding arranged subview', instance, parentInstance);
    parentInstance.addArrangedSubview(view);
    return;
  }

  let anchorViewPosition = getAnchorViewIndex(parent, anchor);

  parentInstance.insertArrangedSubview(view, anchorViewPosition);
}

/**
 *
 *
 * @param {VueKitNode} parent
 * @param {VueKitNode} anchor
 * @returns
 */
function getAnchorViewIndex(parent: VueKitNode, anchor: VueKitNode) {
  if (!anchor) return -1;

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

  console.info('anchor is at children position: ', anchorPosInParentNode, 'of', parent.children, 'view position: ', anchorViewPosition, 'of', childrenWithViews);

  return anchorViewPosition;
}

/**
 *
 *
 * @param {*} instance
 * @param {*} parentInstance
 * @param {*} gravityArea
 */
function addToStackGravityArea(instance, parentInstance, gravityArea) {
  // TODO: check anchor?
  let area = gravityArea === undefined ? NSStackView.Gravity.Center : gravityArea;

  parentInstance.addViewInGravity(instance, area);
  // console.log('added ', el, 'to gravity area', NSStackView.Gravity[area]);
}

/**
 *
 *
 * @export
 * @param {VueKitNode} node
 * @param {VueKitNode} parent
 * @param {VueKitNode} [anchor]
 * @param {NSStackView.Gravity} [gravityArea]
 * @returns
 */
export function addNodeToParentView(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode, gravityArea?: NSStackView.Gravity) {
  if (!parent.instance || !node.instance) return;

  let parentInstance = parent.instance;

  // For adding nodes to parent views, we want to use the controller view if
  // available, which for e.g. NSSplitViewController is an NSView
  // (splitViewController.view) that contains an NSSplitView
  // (splitViewController.splitView)
  //
  // If we didn't do this, node.instance would be the inner splitView, which is
  // not the one we want to insert into the parent
  //
  let viewToAdd = node.controller?.view || node.instance;

  if (viewToAdd instanceof NSTableColumn && parentInstance instanceof NSTableView) {
    addToTable(viewToAdd, parentInstance);
  }
  else if (viewToAdd instanceof NSSplitViewItem && parentInstance instanceof NSSplitView) {
    addToSplit(viewToAdd, parent, anchor);
  }
  else if (viewToAdd instanceof NSView) {
    if (parentInstance instanceof NSStackView
      && parentInstance.distribution === NSStackView.Distribution.GravityAreas) {
      addToStackGravityArea(viewToAdd, parentInstance, gravityArea);
    }
    else if (parentInstance instanceof NSStackView) {
      addToStack(viewToAdd, parent, anchor);
    }
    else if (parentInstance instanceof NSScrollView) {
      addToScroll(viewToAdd, parentInstance);
    }
    else if (parentInstance instanceof NSView) {
      if (anchor) {
        addWithAnchor(viewToAdd, parentInstance, anchor);
      }
      else {
        add(viewToAdd, parentInstance);
      }
    }
    else if (parentInstance instanceof NSWindow) {
      add(viewToAdd, parentInstance.contentView);
    }
    else if (parentInstance instanceof NSSplitViewItem) {
      // @ts-ignore
      parentInstance.viewController.view = viewToAdd;
    }
    else if (!(parentInstance instanceof NSTableColumn)) {
      console.log('Unsure where to insert, this is a view but parent is not: ', viewToAdd);
    }
  }
  else {
    console.log('Unsure where to insert, this is not a view: ', viewToAdd);
  }

  // Inserting a view into an NSWindow's root contentView
  // is a special case where we always want to fill the
  // entire view
  // If we didn't do this, users would have to add the
  // same 4 constraints to every child of a <Window>
  // Think about moving this to the Window .vue component, as that's
  // a better abstraction point than here, which is fairly low-level
  if (parentInstance instanceof NSWindow && viewToAdd instanceof NSView) {
    console.log('Setting constraints to window.contentView', viewToAdd);
    // @ts-ignore
    viewToAdd.topAnchor.constraintWithEqualTo(parentInstance.contentView.topAnchor).setActive(true);
    // @ts-ignore
    viewToAdd.bottomAnchor.constraintWithEqualTo(parentInstance.contentView.bottomAnchor).setActive(true);
    // @ts-ignore
    viewToAdd.leadingAnchor.constraintWithEqualTo(parentInstance.contentView.leadingAnchor).setActive(true);
    // @ts-ignore
    viewToAdd.trailingAnchor.constraintWithEqualTo(parentInstance.contentView.trailingAnchor).setActive(true);
  }
}

/**
 *
 *
 * @export
 * @param {VueKitNode} node
 * @param {VueKitNode} parent
 * @param {VueKitNode} [anchor]
 * @returns
 */
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
