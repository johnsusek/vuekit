import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSBrowserDelegateExports: JSExport, NSObjectExports {
  @objc (browser:createRowsForColumn:inMatrix:) func browser(_: NSBrowser, createRowsForColumn: Int, in: NSMatrix)
  @objc (browser:nextTypeSelectMatchFromRow:toRow:inColumn:forString:) @available(OSX 10.5, *) func browser(_: NSBrowser, nextTypeSelectMatchFromRow: Int, toRow: Int, inColumn: Int, `for`: String?) -> Int
  @objc (browser:shouldTypeSelectForEvent:withCurrentSearchString:) @available(OSX 10.5, *) func browser(_: NSBrowser, shouldTypeSelectFor: NSEvent, withCurrentSearch: String?) -> Bool
  @objc (browser:selectCellWithString:inColumn:) func browser(_: NSBrowser, selectCellWith: String, inColumn: Int) -> Bool
  @objc (browser:draggingImageForRowsWithIndexes:inColumn:withEvent:offset:) @available(OSX 10.5, *) func browser(_: NSBrowser, draggingImageForRowsWith: IndexSet, inColumn: Int, with: NSEvent, offset: NSPointPointer) -> NSImage?
  @objc (browser:canDragRowsWithIndexes:inColumn:withEvent:) @available(OSX 10.5, *) func browser(_: NSBrowser, canDragRowsWith: IndexSet, inColumn: Int, with: NSEvent) -> Bool
  @objc (browser:writeRowsWithIndexes:inColumn:toPasteboard:) @available(OSX 10.5, *) func browser(_: NSBrowser, writeRowsWith: IndexSet, inColumn: Int, to: NSPasteboard) -> Bool
  @objc @available(OSX 10.5, *) func browser(_: NSBrowser, acceptDrop: NSDraggingInfo, atRow: Int, column: Int, dropOperation: NSBrowser.DropOperation) -> Bool
  @objc @available(OSX 10.6, *) func browser(_: NSBrowser, child: Int, ofItem: Any?) -> Any
  @objc func browser(_: NSBrowser, didChangeLastColumn: Int, toColumn: Int)
  @objc @available(OSX 10.6, *) func browser(_: NSBrowser, headerViewControllerForItem: Any?) -> NSViewController?
  @objc @available(OSX 10.6, *) func browser(_: NSBrowser, heightOfRow: Int, inColumn: Int) -> CGFloat
  @objc func browser(_: NSBrowser, isColumnValid: Int) -> Bool
  @objc @available(OSX 10.6, *) func browser(_: NSBrowser, isLeafItem: Any?) -> Bool
  @objc @available(OSX 10.6, *) func browser(_: NSBrowser, numberOfChildrenOfItem: Any?) -> Int
  @objc func browser(_: NSBrowser, numberOfRowsInColumn: Int) -> Int
  @objc @available(OSX 10.6, *) func browser(_: NSBrowser, objectValueForItem: Any?) -> Any?
  @objc @available(OSX 10.6, *) func browser(_: NSBrowser, previewViewControllerForLeafItem: Any) -> NSViewController?
  @objc @available(OSX 10.6, *) func browser(_: NSBrowser, selectionIndexesForProposedSelection: IndexSet, inColumn: Int) -> IndexSet
  @objc func browser(_: NSBrowser, selectRow: Int, inColumn: Int) -> Bool
  @objc @available(OSX 10.6, *) func browser(_: NSBrowser, setObjectValue: Any?, forItem: Any?)
  @objc @available(OSX 10.6, *) func browser(_: NSBrowser, shouldEditItem: Any?) -> Bool
  @objc @available(OSX 10.5, *) func browser(_: NSBrowser, shouldShowCellExpansionForRow: Int, column: Int) -> Bool
  @objc func browser(_: NSBrowser, shouldSizeColumn: Int, forUserResize: Bool, toWidth: Float) -> CGFloat
  @objc func browser(_: NSBrowser, sizeToFitWidthOfColumn: Int) -> CGFloat
  @objc func browser(_: NSBrowser, titleOfColumn: Int) -> String?
  @objc @available(OSX 10.5, *) func browser(_: NSBrowser, typeSelectStringForRow: Int, inColumn: Int) -> String?
  @objc @available(OSX 10.5, *) func browser(_: NSBrowser, validateDrop: NSDraggingInfo, proposedRow: Int, column: Int, dropOperation: NSBrowser.DropOperation) -> NSDragOperation
  @objc func browser(_: NSBrowser, willDisplayCell: Any, atRow: Int, column: Int)
  @objc func browserColumnConfigurationDidChange(_: Notification)
  @objc func browserDidScroll(_: NSBrowser)
  @objc func browserWillScroll(_: NSBrowser)
  @objc (rootItemForBrowser:) @available(OSX 10.6, *) func rootItem(`for`: NSBrowser) -> Any?
}

