import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityLayoutAreaExports: JSExport, NSAccessibilityGroupExports {
  var accessibilityFocusedUIElement: Any { @objc get }
  @objc func accessibilityChildren() -> [Any]?
  @objc func accessibilityLabel() -> String
  @objc func accessibilitySelectedChildren() -> [Any]?
}

