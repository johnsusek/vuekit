import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityElementLoadingExports: JSExport, NSObjectExports {
  @objc (accessibilityElementWithToken:) func accessibilityElement(withToken: Any /* NSSecureCoding NSObject  - pt NSAccessibilityLoadingToken _Nonnull */) -> NSAccessibilityElementProtocol?
  @objc (accessibilityRangeInTargetElementWithToken:) func accessibilityRangeInTargetElement(withToken: Any /* NSSecureCoding NSObject  - pt NSAccessibilityLoadingToken _Nonnull */) -> NSRange
}

