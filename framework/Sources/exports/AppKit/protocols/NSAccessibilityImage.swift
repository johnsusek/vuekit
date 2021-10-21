import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityImageExports: JSExport, NSAccessibilityElementExports {
  @objc func accessibilityLabel() -> String?
}

