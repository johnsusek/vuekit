import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilitySwitchExports: JSExport, NSAccessibilityButtonExports {
  @objc func accessibilityPerformDecrement() -> Bool
  @objc func accessibilityPerformIncrement() -> Bool
  @objc func accessibilityValue() -> String?
}

