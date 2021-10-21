import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextFieldDelegateExports: JSExport, NSControlTextEditingDelegateExports {
  @objc (textField:textView:shouldSelectCandidateAtIndex:) @available(OSX 10.12.2, *) func textField(_: NSTextField, textView: NSTextView, shouldSelectCandidateAt: Int) -> Bool
  @objc @available(OSX 10.12.2, *) func textField(_: NSTextField, textView: NSTextView, candidates: [NSTextCheckingResult], forSelectedRange: NSRange) -> [NSTextCheckingResult]
  @objc @available(OSX 10.12.2, *) func textField(_: NSTextField, textView: NSTextView, candidatesForSelectedRange: NSRange) -> [Any]?
}

