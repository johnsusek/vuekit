import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSToolbarItemValidationExports: JSExport, NSObjectExports {
  @objc func validateToolbarItem(_: NSToolbarItem) -> Bool
}

