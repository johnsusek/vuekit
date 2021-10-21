import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSOutlineViewDelegateExports: JSExport, NSControlTextEditingDelegateExports {
  @objc (outlineView:viewForTableColumn:item:) @available(OSX 10.7, *) func outlineView(_: NSOutlineView, viewFor: NSTableColumn?, item: Any) -> NSView?
  @objc (outlineView:willDisplayOutlineCell:forTableColumn:item:) func outlineView(_: NSOutlineView, willDisplayOutlineCell: Any, `for`: NSTableColumn?, item: Any)
  @objc (outlineView:didAddRowView:forRow:) @available(OSX 10.7, *) func outlineView(_: NSOutlineView, didAdd: NSTableRowView, forRow: Int)
  @objc (outlineView:didRemoveRowView:forRow:) @available(OSX 10.7, *) func outlineView(_: NSOutlineView, didRemove: NSTableRowView, forRow: Int)
  @objc (outlineView:willDisplayCell:forTableColumn:item:) func outlineView(_: NSOutlineView, willDisplayCell: Any, `for`: NSTableColumn?, item: Any)
  @objc (outlineView:shouldEditTableColumn:item:) func outlineView(_: NSOutlineView, shouldEdit: NSTableColumn?, item: Any) -> Bool
  @objc (outlineView:dataCellForTableColumn:item:) @available(OSX 10.5, *) func outlineView(_: NSOutlineView, dataCellFor: NSTableColumn?, item: Any) -> NSCell?
  @objc (outlineView:shouldTrackCell:forTableColumn:item:) @available(OSX 10.5, *) func outlineView(_: NSOutlineView, shouldTrackCell: NSCell, `for`: NSTableColumn?, item: Any) -> Bool
  @objc (outlineView:shouldShowCellExpansionForTableColumn:item:) @available(OSX 10.5, *) func outlineView(_: NSOutlineView, shouldShowCellExpansionFor: NSTableColumn?, item: Any) -> Bool
  @objc (outlineView:shouldSelectTableColumn:) func outlineView(_: NSOutlineView, shouldSelect: NSTableColumn?) -> Bool
  @objc (outlineView:mouseDownInHeaderOfTableColumn:) func outlineView(_: NSOutlineView, mouseDownInHeaderOf: NSTableColumn)
  @objc (outlineView:didClickTableColumn:) func outlineView(_: NSOutlineView, didClick: NSTableColumn)
  @objc (outlineView:didDragTableColumn:) func outlineView(_: NSOutlineView, didDrag: NSTableColumn)
  @objc (outlineView:toolTipForCell:rect:tableColumn:item:mouseLocation:) func outlineView(_: NSOutlineView, toolTipFor: NSCell, rect: NSRectPointer, tableColumn: NSTableColumn?, item: Any, mouseLocation: NSPoint) -> String
  @objc (outlineView:shouldTypeSelectForEvent:withCurrentSearchString:) @available(OSX 10.5, *) func outlineView(_: NSOutlineView, shouldTypeSelectFor: NSEvent, withCurrentSearch: String?) -> Bool
  @objc (outlineView:typeSelectStringForTableColumn:item:) @available(OSX 10.5, *) func outlineView(_: NSOutlineView, typeSelectStringFor: NSTableColumn?, item: Any) -> String?
  @objc (outlineView:nextTypeSelectMatchFromItem:toItem:forString:) @available(OSX 10.5, *) func outlineView(_: NSOutlineView, nextTypeSelectMatchFromItem: Any, toItem: Any, `for`: String) -> Any?
  @objc func outlineView(_: NSOutlineView, heightOfRowByItem: Any) -> CGFloat
  @objc @available(OSX 10.5, *) func outlineView(_: NSOutlineView, isGroupItem: Any) -> Bool
  @objc @available(OSX 10.7, *) func outlineView(_: NSOutlineView, rowViewForItem: Any) -> NSTableRowView?
  @objc @available(OSX 10.5, *) func outlineView(_: NSOutlineView, selectionIndexesForProposedSelection: IndexSet) -> IndexSet
  @objc func outlineView(_: NSOutlineView, shouldCollapseItem: Any) -> Bool
  @objc func outlineView(_: NSOutlineView, shouldExpandItem: Any) -> Bool
  @objc @available(OSX 10.6, *) func outlineView(_: NSOutlineView, shouldReorderColumn: Int, toColumn: Int) -> Bool
  @objc func outlineView(_: NSOutlineView, shouldSelectItem: Any) -> Bool
  @objc @available(OSX 10.6, *) func outlineView(_: NSOutlineView, shouldShowOutlineCellForItem: Any) -> Bool
  @objc @available(OSX 10.6, *) func outlineView(_: NSOutlineView, sizeToFitWidthOfColumn: Int) -> CGFloat
  @objc func outlineViewColumnDidMove(_: Notification)
  @objc func outlineViewColumnDidResize(_: Notification)
  @objc func outlineViewItemDidCollapse(_: Notification)
  @objc func outlineViewItemDidExpand(_: Notification)
  @objc func outlineViewItemWillCollapse(_: Notification)
  @objc func outlineViewItemWillExpand(_: Notification)
  @objc func outlineViewSelectionDidChange(_: Notification)
  @objc func outlineViewSelectionIsChanging(_: Notification)
  @objc (selectionShouldChangeInOutlineView:) func selectionShouldChange(in: NSOutlineView) -> Bool
}

