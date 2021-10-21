import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSMenuItemValidationExports: JSExport, NSObjectExports {
  @objc func validateMenuItem(_: NSMenuItem) -> Bool
}

