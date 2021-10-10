function fillWindowContentView(view: NSView, parent: NSView) {
  view.translatesAutoresizingMaskIntoConstraints = false;
  view.topAnchor.constraintWithEqualTo(parent.topAnchor).setActive(true);
  view.bottomAnchor.constraintWithEqualTo(parent.bottomAnchor).setActive(true);
  view.leadingAnchor.constraintWithEqualTo(parent.leadingAnchor).setActive(true);
  view.trailingAnchor.constraintWithEqualTo(parent.trailingAnchor).setActive(true);
}

export function addToParentView(node: VueKitNode, parent: VueKitNode, anchor?: VueKitNode, gravityArea?: NSStackView.Gravity) {
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
      parentView.addSubviewPositionedRelativeTo(view, NSWindow.OrderingMode.Below, anchor.view);
    }
    else {
      console.log('Could not insert view because anchor has no view: ', view, anchor);
      // TODO: loop index backwards from anchor until we find a el with a view
    }
  }
  else {
    parentView.addSubview(view);

    // Inserting a view into an NSWindow's root contentView
    // is a special case where we always want to fill the
    // entire view
    // If we didn't do this, users would have to add the
    // same 4 constraints to every child of a <Window>
    if (parentView === parentView.window.contentView) {
      fillWindowContentView(view, parentView);
    }
  }
}
