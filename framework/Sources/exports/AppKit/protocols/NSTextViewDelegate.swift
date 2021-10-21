import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextViewDelegateExports: JSExport, NSTextDelegateExports {
  @objc (textView:clickedOnLink:atIndex:) func textView(_: NSTextView, clickedOnLink: Any, at: Int) -> Bool
  @objc (textView:clickedOnCell:inRect:atIndex:) func textView(_: NSTextView, clickedOn: NSTextAttachmentCellProtocol, in: NSRect, at: Int)
  @objc (textView:doubleClickedOnCell:inRect:atIndex:) func textView(_: NSTextView, doubleClickedOn: NSTextAttachmentCellProtocol, in: NSRect, at: Int)
  @objc (textView:draggedCell:inRect:event:atIndex:) func textView(_: NSTextView, draggedCell: NSTextAttachmentCellProtocol, in: NSRect, event: NSEvent, at: Int)
  @objc (textView:writablePasteboardTypesForCell:atIndex:) func textView(_: NSTextView, writablePasteboardTypesFor: NSTextAttachmentCellProtocol, at: Int) -> [String]
  @objc (textView:writeCell:atIndex:toPasteboard:type:) func textView(_: NSTextView, write: NSTextAttachmentCellProtocol, at: Int, to: NSPasteboard, type: NSPasteboard.PasteboardType) -> Bool
  @objc (textView:willDisplayToolTip:forCharacterAtIndex:) func textView(_: NSTextView, willDisplayToolTip: String, forCharacterAt: Int) -> String?
  @objc (textView:shouldChangeTextInRange:replacementString:) func textView(_: NSTextView, shouldChangeTextIn: NSRange, replacementString: String?) -> Bool
  @objc (textView:doCommandBySelector:) func textView(_: NSTextView, doCommandBy: Selector) -> Bool
  @objc (textView:menu:forEvent:atIndex:) @available(OSX 10.5, *) func textView(_: NSTextView, menu: NSMenu, `for`: NSEvent, at: Int) -> NSMenu?
  @objc (textView:willCheckTextInRange:options:types:) @available(OSX 10.6, *) func textView(_: NSTextView, willCheckTextIn: NSRange, options: [String: Any], types: NSTextCheckingTypes) -> [String: Any]
  @objc (textView:didCheckTextInRange:types:options:results:orthography:wordCount:) @available(OSX 10.6, *) func textView(_: NSTextView, didCheckTextIn: NSRange, types: UInt64, options: [String: Any], results: [NSTextCheckingResult], orthography: NSOrthography, wordCount: Int) -> [NSTextCheckingResult]
  @objc (textView:URLForContentsOfTextAttachment:atIndex:) @available(OSX 10.7, *) func textView(_: NSTextView, urlForContentsOf: NSTextAttachment, at: Int) -> NSURL?
  @objc (textView:willShowSharingServicePicker:forItems:) @available(OSX 10.8, *) func textView(_: NSTextView, willShow: NSSharingServicePicker, forItems: [Any]) -> NSSharingServicePicker?
  @objc (textView:shouldSelectCandidateAtIndex:) @available(OSX 10.12.2, *) func textView(_: NSTextView, shouldSelectCandidateAt: Int) -> Bool
  @objc @available(OSX 10.12.2, *) func textView(_: NSTextView, candidates: [NSTextCheckingResult], forSelectedRange: NSRange) -> [NSTextCheckingResult]
  @objc @available(OSX 10.12.2, *) func textView(_: NSTextView, candidatesForSelectedRange: NSRange) -> [Any]?
  @objc func textView(_: NSTextView, completions: [String], forPartialWordRange: NSRange, indexOfSelectedItem: Int) -> [String]
  @objc func textView(_: NSTextView, shouldChangeTextInRanges: [NSValue], replacementStrings: [String]?) -> Bool
  @objc func textView(_: NSTextView, shouldChangeTypingAttributes: [String: Any], toAttributes: [String: Any]) -> [String: Any]
  @objc @available(OSX 10.5, *) func textView(_: NSTextView, shouldSetSpellingState: Int, range: NSRange) -> Int
  @objc @available(OSX 10.12.2, *) func textView(_: NSTextView, shouldUpdateTouchBarItemIdentifiers: [String]) -> [String]
  @objc func textView(_: NSTextView, willChangeSelectionFromCharacterRange: NSRange, toCharacterRange: NSRange) -> NSRange
  @objc func textView(_: NSTextView, willChangeSelectionFromCharacterRanges: [NSValue], toCharacterRanges: [NSValue]) -> [NSValue]
  @objc func textViewDidChangeSelection(_: Notification)
  @objc func textViewDidChangeTypingAttributes(_: Notification)
  @objc (undoManagerForTextView:) func undoManager(`for`: NSTextView) -> UndoManager?
}

