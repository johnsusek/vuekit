import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityElementExports: JSExport, NSObjectExports {
  @objc func accessibilityFrame() -> NSRect
  @objc func accessibilityIdentifier() -> String
  @objc func accessibilityParent() -> Any?
  @objc func isAccessibilityFocused() -> Bool
}

