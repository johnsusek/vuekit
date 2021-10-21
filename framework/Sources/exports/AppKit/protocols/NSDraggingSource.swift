import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSDraggingSourceExports: JSExport, NSObjectExports {
  @objc (draggingSession:sourceOperationMaskForDraggingContext:) func draggingSession(_: NSDraggingSession, sourceOperationMaskFor: NSDraggingContext) -> NSDragOperation
  @objc (draggingSession:willBeginAtPoint:) func draggingSession(_: NSDraggingSession, willBeginAt: NSPoint)
  @objc (draggingSession:movedToPoint:) func draggingSession(_: NSDraggingSession, movedTo: NSPoint)
  @objc (draggingSession:endedAtPoint:operation:) func draggingSession(_: NSDraggingSession, endedAt: NSPoint, operation: NSDragOperation)
  @objc (ignoreModifierKeysForDraggingSession:) func ignoreModifierKeys(`for`: NSDraggingSession) -> Bool
}

