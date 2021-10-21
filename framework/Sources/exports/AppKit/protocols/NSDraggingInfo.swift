import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSDraggingInfoExports: JSExport, NSObjectExports {
  var animatesToDestination: Bool { @objc get @objc (setAnimatesToDestination:) set }
  var draggedImage: NSImage? { @objc get }
  var draggedImageLocation: NSPoint { @objc get }
  var draggingDestinationWindow: NSWindow? { @objc get }
  var draggingFormation: NSDraggingFormation { @objc get @objc (setDraggingFormation:) set }
  var draggingLocation: NSPoint { @objc get }
  var draggingPasteboard: NSPasteboard { @objc get }
  var draggingSequenceNumber: Int { @objc get }
  var draggingSource: Any? { @objc get }
  var draggingSourceOperationMask: NSDragOperation { @objc get }
  var numberOfValidItemsForDrop: Int { @objc get @objc (setNumberOfValidItemsForDrop:) set }
  var springLoadingHighlight: NSSpringLoadingHighlight { @objc get }
  // jsvalue - @objc (enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:) @available(OSX 10.7, *) func enumerateDraggingItems(options: NSDraggingItemEnumerationOptions, `for`: NSView?, classes: [NSObject], searchOptions: [String: Any], using: JSValue)
  @objc @available(OSX 10.11, *) func resetSpringLoading()
  @objc (slideDraggedImageTo:) func slideDraggedImage(to: NSPoint)
}

