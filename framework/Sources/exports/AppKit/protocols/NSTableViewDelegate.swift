import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTableViewDelegateExports: JSExport, NSControlTextEditingDelegateExports {
  @objc (selectionShouldChangeInTableView:) func selectionShouldChange(in: NSTableView) -> Bool
  @objc (tableView:viewForTableColumn:row:) @available(OSX 10.7, *) func tableView(_: NSTableView, viewFor: NSTableColumn?, row: Int) -> NSView?
  @objc (tableView:didAddRowView:forRow:) @available(OSX 10.7, *) func tableView(_: NSTableView, didAdd: NSTableRowView, forRow: Int)
  @objc (tableView:didRemoveRowView:forRow:) @available(OSX 10.7, *) func tableView(_: NSTableView, didRemove: NSTableRowView, forRow: Int)
  @objc (tableView:willDisplayCell:forTableColumn:row:) func tableView(_: NSTableView, willDisplayCell: Any, `for`: NSTableColumn?, row: Int)
  @objc (tableView:shouldEditTableColumn:row:) func tableView(_: NSTableView, shouldEdit: NSTableColumn?, row: Int) -> Bool
  @objc (tableView:toolTipForCell:rect:tableColumn:row:mouseLocation:) func tableView(_: NSTableView, toolTipFor: NSCell, rect: NSRectPointer, tableColumn: NSTableColumn?, row: Int, mouseLocation: NSPoint) -> String
  @objc (tableView:shouldShowCellExpansionForTableColumn:row:) @available(OSX 10.5, *) func tableView(_: NSTableView, shouldShowCellExpansionFor: NSTableColumn?, row: Int) -> Bool
  @objc (tableView:shouldTrackCell:forTableColumn:row:) @available(OSX 10.5, *) func tableView(_: NSTableView, shouldTrackCell: NSCell, `for`: NSTableColumn?, row: Int) -> Bool
  @objc (tableView:dataCellForTableColumn:row:) @available(OSX 10.5, *) func tableView(_: NSTableView, dataCellFor: NSTableColumn?, row: Int) -> NSCell?
  @objc (tableView:shouldSelectTableColumn:) func tableView(_: NSTableView, shouldSelect: NSTableColumn?) -> Bool
  @objc (tableView:mouseDownInHeaderOfTableColumn:) func tableView(_: NSTableView, mouseDownInHeaderOf: NSTableColumn)
  @objc (tableView:didClickTableColumn:) func tableView(_: NSTableView, didClick: NSTableColumn)
  @objc (tableView:didDragTableColumn:) func tableView(_: NSTableView, didDrag: NSTableColumn)
  @objc (tableView:typeSelectStringForTableColumn:row:) @available(OSX 10.5, *) func tableView(_: NSTableView, typeSelectStringFor: NSTableColumn?, row: Int) -> String?
  @objc (tableView:nextTypeSelectMatchFromRow:toRow:forString:) @available(OSX 10.5, *) func tableView(_: NSTableView, nextTypeSelectMatchFromRow: Int, toRow: Int, `for`: String) -> Int
  @objc (tableView:shouldTypeSelectForEvent:withCurrentSearchString:) @available(OSX 10.5, *) func tableView(_: NSTableView, shouldTypeSelectFor: NSEvent, withCurrentSearch: String?) -> Bool
  @objc func tableView(_: NSTableView, heightOfRow: Int) -> CGFloat
  @objc @available(OSX 10.5, *) func tableView(_: NSTableView, isGroupRow: Int) -> Bool
  @objc @available(OSX 10.11, *) func tableView(_: NSTableView, rowActionsForRow: Int, edge: NSTableView.RowActionEdge) -> [NSTableViewRowAction]
  @objc @available(OSX 10.7, *) func tableView(_: NSTableView, rowViewForRow: Int) -> NSTableRowView?
  @objc @available(OSX 10.5, *) func tableView(_: NSTableView, selectionIndexesForProposedSelection: IndexSet) -> IndexSet
  @objc @available(OSX 10.6, *) func tableView(_: NSTableView, shouldReorderColumn: Int, toColumn: Int) -> Bool
  @objc func tableView(_: NSTableView, shouldSelectRow: Int) -> Bool
  @objc @available(OSX 10.6, *) func tableView(_: NSTableView, sizeToFitWidthOfColumn: Int) -> CGFloat
  @objc func tableViewColumnDidMove(_: Notification)
  @objc func tableViewColumnDidResize(_: Notification)
  @objc func tableViewSelectionDidChange(_: Notification)
  @objc func tableViewSelectionIsChanging(_: Notification)
}

