import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSDraggingDestinationExports: JSExport, NSObjectExports {
  @objc func concludeDragOperation(_: NSDraggingInfo?)
  @objc func draggingEnded(_: NSDraggingInfo)
  @objc func draggingEntered(_: NSDraggingInfo) -> NSDragOperation
  @objc func draggingExited(_: NSDraggingInfo?)
  @objc func draggingUpdated(_: NSDraggingInfo) -> NSDragOperation
  @objc func performDragOperation(_: NSDraggingInfo) -> Bool
  @objc func prepareForDragOperation(_: NSDraggingInfo) -> Bool
  @objc @available(OSX 10.7, *) func updateDraggingItemsForDrag(_: NSDraggingInfo?)
  @objc func wantsPeriodicDraggingUpdates() -> Bool
}

