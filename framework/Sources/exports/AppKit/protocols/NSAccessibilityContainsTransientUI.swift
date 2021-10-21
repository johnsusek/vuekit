import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityContainsTransientUIExports: JSExport, NSAccessibilityElementExports {
  @objc func accessibilityPerformShowAlternateUI() -> Bool
  @objc func accessibilityPerformShowDefaultUI() -> Bool
  @objc func isAccessibilityAlternateUIVisible() -> Bool
}

