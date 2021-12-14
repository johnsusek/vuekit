export function getAnchorViewIndex(parent: VueKitNode, anchor: VueKitNode) {
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
  let anchorViewPosition = childrenWithViews.indexOf(nearestViewInParentNode) - 1;

  anchorViewPosition = anchorViewPosition < 0 ? 0 : anchorViewPosition;

  // console.info('anchor is at children position: ', anchorPosInParentNode, 'of', parent.children, 'view position: ', anchorViewPosition, 'of', childrenWithViews);

  return anchorViewPosition;
}

function add(instance: NSView, parentInstance: NSView) {
  parentInstance.addSubview(instance);
}

function addToTable(instance: NSTableColumn, parentInstance: NSTableView) {
  parentInstance.addTableColumn(instance);
}

function addWithAnchor(instance: NSView, parentInstance: NSView, anchor: VueKitNode) {
  if (anchor.instance) {
    log.debug('insert after this view: ', anchor.instance);
    parentInstance.addSubviewPositionedWithRelativeTo(instance, NSWindow.OrderingMode.Below, anchor.instance as NSView);
  }
  else {
    console.error('Could not insert view because anchor has no view: ', instance, anchor);
    // TODO: loop index backwards from anchor until we find a el with a view
  }
}

function addToScroll(documentView: NSView, scrollView: NSScrollView) {
  // @ts-ignore
  let clipView = NSClipView();
  clipView.drawsBackground = false;
  // @ts-ignore
  clipView.translatesAutoresizingMaskIntoConstraints = false;
  scrollView.contentView = clipView;
  scrollView.documentView = documentView;
}

function addToGrid(rowNode: VueKitNode, parent: VueKitNode, anchor: VueKitNode) {
  let gridView = parent.instance as NSGridView;
  let rows = rowNode.children.map(c => c.instance);

  if (anchor) {
    let anchorViewPosition = getAnchorViewIndex(parent, anchor);
    // @ts-ignore
    gridView.insertRowAtIndexWithViews(anchorViewPosition, rows);
  }
  else {
    // @ts-ignore
    gridView.addRowWithViews(rows);
  }
}

function addToSplit(splitViewItem: NSSplitViewItem, parent: VueKitNode, anchor: VueKitNode) {
  let splitViewController = parent.controller as NSSplitViewController;

  if (!(splitViewItem instanceof NSSplitViewItem)) {
    console.warn('Child of Split must be a SplitViewItem', splitViewItem, parent);
    return;
  }

  if (!splitViewItem.viewController) {
    console.warn('SplitViewItem does not have controller', splitViewItem, parent);
    return;
  }

  if (anchor) {
    let anchorViewPosition = getAnchorViewIndex(parent, anchor);
    // @ts-ignore
    splitViewController.insertSplitViewItemAtIndex(splitViewItem, anchorViewPosition);
  }
  else {
    splitViewController.addSplitViewItem(splitViewItem);
  }
}

function addToStack(view: NSView, parent: VueKitNode, anchor: VueKitNode) {
  let parentInstance = parent.instance as NSStackView;

  if (!anchor) {
    // log.debug('Adding arranged subview', instance, parentInstance);
    parentInstance.addArrangedSubview(view);
    return;
  }

  let anchorViewPosition = getAnchorViewIndex(parent, anchor);

  // @ts-ignore
  parentInstance.insertArrangedSubviewAtIndex(view, anchorViewPosition);
}

function addToStackGravityArea(instance, parentInstance, gravityArea) {
  // TODO: check anchor?
  let area = gravityArea === undefined ? NSStackView.Gravity.Center : gravityArea;

  parentInstance.addViewInGravity(instance, area);
  // log.debug('added ', el, 'to gravity area', NSStackView.Gravity[area]);
}

export function addNodeToParentView(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode, gravityArea?: NSStackView.Gravity) {
  if (!parent.view) {
    if (parent.parent?.view instanceof NSGridView) {
      log.trace('Skipping adding to NSGridView child - grandchild will get added');
    }
    else if (parent.parent?.view instanceof NSCollectionView) {
      log.trace('Skipping adding to NSCollectionView child - grandchild will get added');
    }
    else {
      log.trace('No parent instance trying to add ', node, 'to', parent);
    }
    return;
  }

  if (!node.view) {
    log.trace('No node.view trying to add ', node, 'to', parent);
  }

  if (node.view instanceof NSSplitViewItem) {
    if (!node.children.length) {
      log.warn('Skipping adding empty SplitViewItem');
      return;
    }
  }

  if (parent.instance instanceof NSGridView) {
    addToGrid(node, parent, anchor);
  }
  else if (node.view instanceof NSTableColumn && parent.instance instanceof NSTableView) {
    addToTable(node.view, parent.instance);
  }
  else if (node.view instanceof NSSplitViewItem && parent.instance instanceof NSSplitView) {
    addToSplit(node.view, parent, anchor);
  }
  else if (node.view instanceof NSView) {
    if (parent.instance instanceof NSStackView
      && parent.instance.distribution === NSStackView.Distribution.GravityAreas) {
      addToStackGravityArea(node.view, parent.instance, gravityArea);
    }
    else if (parent.instance instanceof NSStackView) {
      addToStack(node.view, parent, anchor);
    }
    else if (parent.instance instanceof NSScrollView) {
      addToScroll(node.view, parent.instance);
    }
    else if (parent.instance instanceof NSView) {
      if (anchor) {
        addWithAnchor(node.view, parent.instance, anchor);
      }
      else {
        add(node.view, parent.instance);
      }
    }
    else if (parent.instance instanceof NSWindow) {
      add(node.view, parent.instance.contentView);
    }
    else if (parent.instance instanceof NSSplitViewItem) {
      // @ts-ignore
      parent.instance.viewController.view = node.view;
    }
    else if (!(parent.instance instanceof NSTableColumn)) {
      log.trace('Unsure where to insert, this is a view but parent is not: ', node.view);
    }
  }
  else {
    log.trace('Unsure where to insert, viewToAdd is not a view: ', node);
  }
}

export function addNodeToParentNode(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode) {
  if (!parent) {
    log.warn('Tried to add node without a parent, skipping.', node);
    return;
  }

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
