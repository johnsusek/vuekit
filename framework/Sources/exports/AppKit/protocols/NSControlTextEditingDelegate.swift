import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSControlTextEditingDelegateExports: JSExport, NSObjectExports {
  @objc (control:textView:doCommandBySelector:) func control(_: NSControl, textView: NSTextView, doCommandBy: Selector) -> Bool
  @objc func control(_: NSControl, didFailToFormatString: String, errorDescription: String?) -> Bool
  @objc func control(_: NSControl, didFailToValidatePartialString: String, errorDescription: String?)
  @objc func control(_: NSControl, isValidObject: Any?) -> Bool
  @objc func control(_: NSControl, textShouldBeginEditing: NSText) -> Bool
  @objc func control(_: NSControl, textShouldEndEditing: NSText) -> Bool
  @objc func control(_: NSControl, textView: NSTextView, completions: [String], forPartialWordRange: NSRange, indexOfSelectedItem: Int) -> [String]
  @objc func controlTextDidBeginEditing(_: Notification)
  @objc func controlTextDidChange(_: Notification)
  @objc func controlTextDidEndEditing(_: Notification)
}

