import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityStaticTextExports: JSExport, NSAccessibilityElementExports {
  @objc (accessibilityAttributedStringForRange:) func accessibilityAttributedString(`for`: NSRange) -> NSAttributedString?
  @objc func accessibilityValue() -> String?
  @objc func accessibilityVisibleCharacterRange() -> NSRange
}

