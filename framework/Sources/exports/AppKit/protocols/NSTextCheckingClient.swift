import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextCheckingClientExports: JSExport, NSTextInputClientExports, NSTextInputTraitsExports {
  @objc func addAnnotations(_: [String: String], range: NSRange)
  @objc (annotatedSubstringForProposedRange:actualRange:) func annotatedSubstring(forProposedRange: NSRange, actualRange: NSRangePointer?) -> NSAttributedString?
  @objc func candidateListTouchBarItem() -> NSCandidateListTouchBarItem<AnyObject>?
  @objc func removeAnnotation(_: NSAttributedString.Key, range: NSRange)
  @objc (replaceCharactersInRange:withAnnotatedString:) func replaceCharacters(in: NSRange, withAnnotatedString: NSAttributedString)
  @objc (selectAndShowRange:) func selectAndShow(_: NSRange)
  @objc func setAnnotations(_: [String: String], range: NSRange)
  @objc (viewForRange:firstRect:actualRange:) func view(`for`: NSRange, firstRect: NSRectPointer?, actualRange: NSRangePointer?) -> NSView?
}

