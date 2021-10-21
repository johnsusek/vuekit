import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextInputClientExports: JSExport {
  @objc func attributedString() -> NSAttributedString
  @objc (attributedSubstringForProposedRange:actualRange:) func attributedSubstring(forProposedRange: NSRange, actualRange: NSRangePointer?) -> NSAttributedString?
  @objc (baselineDeltaForCharacterAtIndex:) func baselineDeltaForCharacter(at: Int) -> CGFloat
  @objc (characterIndexForPoint:) func characterIndex(`for`: NSPoint) -> Int
  @objc (doCommandBySelector:) func doCommand(by: Selector)
  @objc (drawsVerticallyForCharacterAtIndex:) @available(OSX 10.6, *) func drawsVerticallyForCharacter(at: Int) -> Bool
  @objc (firstRectForCharacterRange:actualRange:) func firstRect(forCharacterRange: NSRange, actualRange: NSRangePointer?) -> NSRect
  @objc (fractionOfDistanceThroughGlyphForPoint:) func fractionOfDistanceThroughGlyph(`for`: NSPoint) -> CGFloat
  @objc func hasMarkedText() -> Bool
  @objc func insertText(_: Any, replacementRange: NSRange)
  @objc func markedRange() -> NSRange
  @objc func selectedRange() -> NSRange
  @objc func setMarkedText(_: Any, selectedRange: NSRange, replacementRange: NSRange)
  @objc func unmarkText()
  @objc func validAttributesForMarkedText() -> [String]
  @objc func windowLevel() -> Int
}

