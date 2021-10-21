import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSpringLoadingDestinationExports: JSExport, NSObjectExports {
  @objc @available(OSX 10.11, *) func draggingEnded(_: NSDraggingInfo)
  @objc @available(OSX 10.11, *) func springLoadingActivated(_: Bool, draggingInfo: NSDraggingInfo)
  @objc @available(OSX 10.11, *) func springLoadingEntered(_: NSDraggingInfo) -> NSSpringLoadingOptions
  @objc @available(OSX 10.11, *) func springLoadingExited(_: NSDraggingInfo)
  @objc @available(OSX 10.11, *) func springLoadingHighlightChanged(_: NSDraggingInfo)
  @objc @available(OSX 10.11, *) func springLoadingUpdated(_: NSDraggingInfo) -> NSSpringLoadingOptions
}

