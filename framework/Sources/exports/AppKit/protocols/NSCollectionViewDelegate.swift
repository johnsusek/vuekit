import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCollectionViewDelegateExports: JSExport, NSObjectExports {
  @objc (collectionView:canDragItemsAtIndexPaths:withEvent:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, canDragItemsAt: Set<IndexPath>, with: NSEvent) -> Bool
  @objc (collectionView:canDragItemsAtIndexes:withEvent:) @available(OSX 10.6, *) func collectionView(_: NSCollectionView, canDragItemsAt: IndexSet, with: NSEvent) -> Bool
  @objc (collectionView:writeItemsAtIndexPaths:toPasteboard:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, writeItemsAt: Set<IndexPath>, to: NSPasteboard) -> Bool
  @objc (collectionView:writeItemsAtIndexes:toPasteboard:) @available(OSX 10.6, *) func collectionView(_: NSCollectionView, writeItemsAt: IndexSet, to: NSPasteboard) -> Bool
  @objc (collectionView:draggingImageForItemsAtIndexPaths:withEvent:offset:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, draggingImageForItemsAt: Set<IndexPath>, with: NSEvent, offset: NSPointPointer) -> NSImage
  @objc (collectionView:draggingImageForItemsAtIndexes:withEvent:offset:) @available(OSX 10.6, *) func collectionView(_: NSCollectionView, draggingImageForItemsAt: IndexSet, with: NSEvent, offset: NSPointPointer) -> NSImage
  @objc (collectionView:pasteboardWriterForItemAtIndexPath:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, pasteboardWriterForItemAt: IndexPath) -> NSPasteboardWriting?
  @objc (collectionView:pasteboardWriterForItemAtIndex:) func collectionView(_: NSCollectionView, pasteboardWriterForItemAt: Int) -> NSPasteboardWriting?
  @objc (collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexPaths:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, draggingSession: NSDraggingSession, willBeginAt: NSPoint, forItemsAt: Set<IndexPath>)
  @objc (collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexes:) func collectionView(_: NSCollectionView, draggingSession: NSDraggingSession, willBeginAt: NSPoint, forItemsAt: IndexSet)
  @objc (collectionView:draggingSession:endedAtPoint:dragOperation:) func collectionView(_: NSCollectionView, draggingSession: NSDraggingSession, endedAt: NSPoint, dragOperation: NSDragOperation)
  @objc (collectionView:shouldChangeItemsAtIndexPaths:toHighlightState:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, shouldChangeItemsAt: Set<IndexPath>, to: NSCollectionViewItem.HighlightState) -> Set<IndexPath>
  @objc (collectionView:didChangeItemsAtIndexPaths:toHighlightState:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, didChangeItemsAt: Set<IndexPath>, to: NSCollectionViewItem.HighlightState)
  @objc (collectionView:shouldSelectItemsAtIndexPaths:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, shouldSelectItemsAt: Set<IndexPath>) -> Set<IndexPath>
  @objc (collectionView:shouldDeselectItemsAtIndexPaths:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, shouldDeselectItemsAt: Set<IndexPath>) -> Set<IndexPath>
  @objc (collectionView:didSelectItemsAtIndexPaths:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, didSelectItemsAt: Set<IndexPath>)
  @objc (collectionView:didDeselectItemsAtIndexPaths:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, didDeselectItemsAt: Set<IndexPath>)
  @objc (collectionView:willDisplayItem:forRepresentedObjectAtIndexPath:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, willDisplay: NSCollectionViewItem, forRepresentedObjectAt: IndexPath)
  @objc (collectionView:willDisplaySupplementaryView:forElementKind:atIndexPath:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, willDisplaySupplementaryView: NSView, forElementKind: NSCollectionView.SupplementaryElementKind, at: IndexPath)
  @objc (collectionView:didEndDisplayingItem:forRepresentedObjectAtIndexPath:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, didEndDisplaying: NSCollectionViewItem, forRepresentedObjectAt: IndexPath)
  @objc (collectionView:didEndDisplayingSupplementaryView:forElementOfKind:atIndexPath:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, didEndDisplayingSupplementaryView: NSView, forElementOfKind: NSCollectionView.SupplementaryElementKind, at: IndexPath)
  @objc @available(OSX 10.6, *) func collectionView(_: NSCollectionView, acceptDrop: NSDraggingInfo, index: Int, dropOperation: NSCollectionView.DropOperation) -> Bool
  @objc @available(OSX 10.11, *) func collectionView(_: NSCollectionView, acceptDrop: NSDraggingInfo, indexPath: IndexPath, dropOperation: NSCollectionView.DropOperation) -> Bool
  @objc @available(OSX 10.11, *) func collectionView(_: NSCollectionView, transitionLayoutForOldLayout: NSCollectionViewLayout, newLayout: NSCollectionViewLayout) -> NSCollectionViewTransitionLayout
  @objc func collectionView(_: NSCollectionView, updateDraggingItemsForDrag: NSDraggingInfo)
  @objc @available(OSX 10.6, *) func collectionView(_: NSCollectionView, validateDrop: NSDraggingInfo, proposedIndex: Int, dropOperation: NSCollectionView.DropOperation) -> NSDragOperation
  @objc @available(OSX 10.11, *) func collectionView(_: NSCollectionView, validateDrop: NSDraggingInfo, proposedIndexPath: IndexPath, dropOperation: NSCollectionView.DropOperation) -> NSDragOperation
}

