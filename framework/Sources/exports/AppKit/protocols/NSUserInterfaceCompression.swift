import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSUserInterfaceCompressionExports: JSExport {
  var activeCompressionOptions: NSUserInterfaceCompressionOptions { @objc get }
  @objc (compressWithPrioritizedCompressionOptions:) func compress(withPrioritizedCompressionOptions: [NSUserInterfaceCompressionOptions])
  @objc (minimumSizeWithPrioritizedCompressionOptions:) func minimumSize(withPrioritizedCompressionOptions: [NSUserInterfaceCompressionOptions]) -> NSSize
}

