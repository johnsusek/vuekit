import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextDelegateExports: JSExport, NSObjectExports {
  @objc func textDidBeginEditing(_: Notification)
  @objc func textDidChange(_: Notification)
  @objc func textDidEndEditing(_: Notification)
  @objc func textShouldBeginEditing(_: NSText) -> Bool
  @objc func textShouldEndEditing(_: NSText) -> Bool
}

