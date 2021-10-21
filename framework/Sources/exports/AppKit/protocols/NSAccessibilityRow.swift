import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityRowExports: JSExport, NSAccessibilityGroupExports {
  @objc func accessibilityDisclosureLevel() -> Int
  @objc func accessibilityIndex() -> Int
}

