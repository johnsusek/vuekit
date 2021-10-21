import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAppearanceCustomizationExports: JSExport, NSObjectExports {
  var appearance: NSAppearance? { @objc get @objc (setAppearance:) set }
  var effectiveAppearance: NSAppearance { @objc get }
}

