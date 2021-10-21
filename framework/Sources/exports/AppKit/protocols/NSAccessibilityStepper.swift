import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityStepperExports: JSExport, NSAccessibilityElementExports {
  @objc func accessibilityLabel() -> String?
  @objc func accessibilityPerformDecrement() -> Bool
  @objc func accessibilityPerformIncrement() -> Bool
  @objc func accessibilityValue() -> Any?
}

