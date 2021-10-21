import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextFinderClientExports: JSExport, NSObjectExports {
  var allowsMultipleSelection: Bool { @objc get }
  var isEditable: Bool { @objc get }
  var firstSelectedRange: NSRange { @objc get }
  var isSelectable: Bool { @objc get }
  var selectedRanges: [NSValue]? { @objc get @objc (setSelectedRanges:) set }
  var string: String? { @objc get }
  var visibleCharacterRanges: [NSValue]? { @objc get }
  @objc (contentViewAtIndex:effectiveCharacterRange:) func contentView(at: Int, effectiveCharacterRange: NSRangePointer) -> NSView
  @objc func didReplaceCharacters()
  @objc (drawCharactersInRange:forContentView:) func drawCharacters(in: NSRange, forContentView: NSView)
  @objc (rectsForCharacterRange:) func rects(forCharacterRange: NSRange) -> [NSValue]?
  @objc (replaceCharactersInRange:withString:) func replaceCharacters(in: NSRange, with: String)
  @objc func scrollRangeToVisible(_: NSRange)
  @objc (shouldReplaceCharactersInRanges:withStrings:) func shouldReplaceCharacters(inRanges: [NSValue], with: [String]) -> Bool
  @objc (stringAtIndex:effectiveRange:endsWithSearchBoundary:) func string(at: Int, effectiveRange: NSRangePointer, endsWithSearchBoundary: Bool) -> String
  @objc func stringLength() -> Int
}

