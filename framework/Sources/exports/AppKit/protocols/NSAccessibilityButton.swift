import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityButtonExports: JSExport, NSAccessibilityElementExports {
  @objc func accessibilityLabel() -> String?
  @objc func accessibilityPerformPress() -> Bool
}

