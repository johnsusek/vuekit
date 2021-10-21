import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTableViewDataSourceExports: JSExport, NSObjectExports {
  @objc (numberOfRowsInTableView:) func numberOfRows(in: NSTableView) -> Int
  @objc (tableView:objectValueForTableColumn:row:) func tableView(_: NSTableView, objectValueFor: NSTableColumn?, row: Int) -> Any?
  @objc (tableView:setObjectValue:forTableColumn:row:) func tableView(_: NSTableView, setObjectValue: Any?, `for`: NSTableColumn?, row: Int)
  @objc (tableView:draggingSession:willBeginAtPoint:forRowIndexes:) @available(OSX 10.7, *) func tableView(_: NSTableView, draggingSession: NSDraggingSession, willBeginAt: NSPoint, forRowIndexes: IndexSet)
  @objc (tableView:draggingSession:endedAtPoint:operation:) @available(OSX 10.7, *) func tableView(_: NSTableView, draggingSession: NSDraggingSession, endedAt: NSPoint, operation: NSDragOperation)
  @objc (tableView:writeRowsWithIndexes:toPasteboard:) @available(OSX 10.4, *) func tableView(_: NSTableView, writeRowsWith: IndexSet, to: NSPasteboard) -> Bool
  @objc func tableView(_: NSTableView, acceptDrop: NSDraggingInfo, row: Int, dropOperation: NSTableView.DropOperation) -> Bool
  @objc @available(OSX 10.7, *) func tableView(_: NSTableView, pasteboardWriterForRow: Int) -> NSPasteboardWriting?
  @objc func tableView(_: NSTableView, sortDescriptorsDidChange: [NSSortDescriptor])
  @objc @available(OSX 10.7, *) func tableView(_: NSTableView, updateDraggingItemsForDrag: NSDraggingInfo)
  @objc func tableView(_: NSTableView, validateDrop: NSDraggingInfo, proposedRow: Int, proposedDropOperation: NSTableView.DropOperation) -> NSDragOperation
}

