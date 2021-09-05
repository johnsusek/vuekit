import AppKit
import JavaScriptCore

@objc protocol NSOutlineViewExports: JSExport {
	@objc var autoresizesOutlineColumn: Bool { @objc get @objc (setAutoresizesOutlineColumn:) set }
	@objc var autosaveExpandedItems: Bool { @objc get @objc (setAutosaveExpandedItems:) set }
	@objc var dataSource: NSOutlineViewDataSource? { @objc get @objc (setDataSource:) set }
	@objc var delegate: NSOutlineViewDelegate? { @objc get @objc (setDelegate:) set }
	@objc var indentationMarkerFollowsCell: Bool { @objc get @objc (setIndentationMarkerFollowsCell:) set }
	@objc var indentationPerLevel: CGFloat { @objc get @objc (setIndentationPerLevel:) set }
	@objc var outlineTableColumn: NSTableColumn? { @objc get @objc (setOutlineTableColumn:) set }
	@objc @available(OSX 10.12, *) var stronglyReferencesItems: Bool { @objc get @objc (setStronglyReferencesItems:) set }
	@objc @available(OSX 10.10, *) func child(_: Int, ofItem: Any?) -> Any?
	@objc (childIndexForItem:) @available(OSX 10.11, *) func childIndex(forItem: Any) -> Int
	@objc func collapseItem(_: Any?)
	@objc func collapseItem(_: Any?, collapseChildren: Bool)
	@objc func expandItem(_: Any?)
	@objc func expandItem(_: Any?, expandChildren: Bool)
	@objc (frameOfOutlineCellAtRow:) @available(OSX 10.5, *) func frameOfOutlineCell(atRow: Int) -> NSRect
	@objc (insertItemsAtIndexes:inParent:withAnimation:) @available(OSX 10.7, *) func insertItems(at: IndexSet, inParent: Any?, withAnimation: NSTableView.AnimationOptions)
	@objc func isExpandable(_: Any?) -> Bool
	@objc func isItemExpanded(_: Any?) -> Bool
	@objc (itemAtRow:) func item(atRow: Int) -> Any?
	@objc (levelForItem:) func level(forItem: Any?) -> Int
	@objc (levelForRow:) func level(forRow: Int) -> Int
	@objc (moveItemAtIndex:inParent:toIndex:inParent:) @available(OSX 10.7, *) func moveItem(at: Int, inParent: Any?, to: Int, inParent inParent4: Any?)
	@objc (numberOfChildrenOfItem:) @available(OSX 10.10, *) func numberOfChildren(ofItem: Any?) -> Int
	@objc (parentForItem:) func parent(forItem: Any?) -> Any?
	@objc func reloadItem(_: Any?)
	@objc func reloadItem(_: Any?, reloadChildren: Bool)
	@objc (removeItemsAtIndexes:inParent:withAnimation:) @available(OSX 10.7, *) func removeItems(at: IndexSet, inParent: Any?, withAnimation: NSTableView.AnimationOptions)
	@objc (rowForItem:) func row(forItem: Any?) -> Int
	@objc func setDropItem(_: Any?, dropChildIndex: Int)
	@objc (shouldCollapseAutoExpandedItemsForDeposited:) func shouldCollapseAutoExpandedItems(forDeposited: Bool) -> Bool
	@objc static func create() -> OutlineView
}

class OutlineView: NSOutlineView, NSOutlineViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> OutlineView {
		return OutlineView()
	}
}
