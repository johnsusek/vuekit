import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol

@objc protocol NSUserInterfaceItemIdentificationExports: JSExport {
  var identifier: NSUserInterfaceItemIdentifier { @objc get @objc (setIdentifier:) set }
}

