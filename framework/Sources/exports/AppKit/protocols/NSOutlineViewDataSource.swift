import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSOutlineViewDataSourceExports: JSExport, NSObjectExports {
  @objc (outlineView:objectValueForTableColumn:byItem:) func outlineView(_: NSOutlineView, objectValueFor: NSTableColumn?, byItem: Any?) -> Any?
  @objc (outlineView:setObjectValue:forTableColumn:byItem:) func outlineView(_: NSOutlineView, setObjectValue: Any?, `for`: NSTableColumn?, byItem: Any?)
  @objc (outlineView:draggingSession:willBeginAtPoint:forItems:) @available(OSX 10.7, *) func outlineView(_: NSOutlineView, draggingSession: NSDraggingSession, willBeginAt: NSPoint, forItems: [Any])
  @objc (outlineView:draggingSession:endedAtPoint:operation:) @available(OSX 10.7, *) func outlineView(_: NSOutlineView, draggingSession: NSDraggingSession, endedAt: NSPoint, operation: NSDragOperation)
  @objc (outlineView:writeItems:toPasteboard:) @available(OSX 10.0, *) func outlineView(_: NSOutlineView, writeItems: [Any], to: NSPasteboard) -> Bool
  @objc func outlineView(_: NSOutlineView, acceptDrop: NSDraggingInfo, item: Any?, childIndex: Int) -> Bool
  @objc func outlineView(_: NSOutlineView, child: Int, ofItem: Any?) -> Any
  @objc func outlineView(_: NSOutlineView, isItemExpandable: Any) -> Bool
  @objc func outlineView(_: NSOutlineView, itemForPersistentObject: Any) -> Any?
  @objc func outlineView(_: NSOutlineView, numberOfChildrenOfItem: Any?) -> Int
  @objc @available(OSX 10.7, *) func outlineView(_: NSOutlineView, pasteboardWriterForItem: Any) -> NSPasteboardWriting?
  @objc func outlineView(_: NSOutlineView, persistentObjectForItem: Any?) -> Any?
  @objc func outlineView(_: NSOutlineView, sortDescriptorsDidChange: [NSSortDescriptor])
  @objc @available(OSX 10.7, *) func outlineView(_: NSOutlineView, updateDraggingItemsForDrag: NSDraggingInfo)
  @objc func outlineView(_: NSOutlineView, validateDrop: NSDraggingInfo, proposedItem: Any?, proposedChildIndex: Int) -> NSDragOperation
}

