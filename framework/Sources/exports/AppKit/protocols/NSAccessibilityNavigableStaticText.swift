import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityNavigableStaticTextExports: JSExport, NSAccessibilityStaticTextExports {
  @objc (accessibilityFrameForRange:) func accessibilityFrame(`for`: NSRange) -> NSRect
  @objc (accessibilityLineForIndex:) func accessibilityLine(`for`: Int) -> Int
  @objc (accessibilityRangeForLine:) func accessibilityRange(forLine: Int) -> NSRange
  @objc (accessibilityStringForRange:) func accessibilityString(`for`: NSRange) -> String?
}

