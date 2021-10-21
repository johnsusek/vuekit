import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSUserInterfaceValidationsExports: JSExport {
  @objc func validateUserInterfaceItem(_: NSValidatedUserInterfaceItem) -> Bool
}

