import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSLayoutManagerDelegateExports: JSExport, NSObjectExports {
  @objc (layoutManager:lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:) @available(OSX 10.11, *) func layoutManager(_: NSLayoutManager, lineSpacingAfterGlyphAt: Int, withProposedLineFragmentRect: NSRect) -> CGFloat
  @objc (layoutManager:paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:) @available(OSX 10.11, *) func layoutManager(_: NSLayoutManager, paragraphSpacingBeforeGlyphAt: Int, withProposedLineFragmentRect: NSRect) -> CGFloat
  @objc (layoutManager:paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:) @available(OSX 10.11, *) func layoutManager(_: NSLayoutManager, paragraphSpacingAfterGlyphAt: Int, withProposedLineFragmentRect: NSRect) -> CGFloat
  @objc (layoutManager:shouldUseAction:forControlCharacterAtIndex:) @available(OSX 10.11, *) func layoutManager(_: NSLayoutManager, shouldUse: NSLayoutManager.ControlCharacterAction, forControlCharacterAt: Int) -> NSLayoutManager.ControlCharacterAction
  @objc (layoutManager:shouldBreakLineByWordBeforeCharacterAtIndex:) @available(OSX 10.11, *) func layoutManager(_: NSLayoutManager, shouldBreakLineByWordBeforeCharacterAt: Int) -> Bool
  @objc (layoutManager:shouldBreakLineByHyphenatingBeforeCharacterAtIndex:) @available(OSX 10.11, *) func layoutManager(_: NSLayoutManager, shouldBreakLineByHyphenatingBeforeCharacterAt: Int) -> Bool
  @objc (layoutManager:boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:) @available(OSX 10.11, *) func layoutManager(_: NSLayoutManager, boundingBoxForControlGlyphAt: Int, `for`: NSTextContainer, proposedLineFragment: NSRect, glyphPosition: NSPoint, characterIndex: Int) -> NSRect
  @objc (layoutManager:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:inTextContainer:forGlyphRange:) @available(OSX 10.11, *) func layoutManager(_: NSLayoutManager, shouldSetLineFragmentRect: NSRect, lineFragmentUsedRect: NSRect, baselineOffset: Float, in: NSTextContainer, forGlyphRange: NSRange) -> Bool
  @objc (layoutManager:didCompleteLayoutForTextContainer:atEnd:) @available(OSX 10.0, *) func layoutManager(_: NSLayoutManager, didCompleteLayoutFor: NSTextContainer?, atEnd: Bool)
  @objc (layoutManager:textContainer:didChangeGeometryFromSize:) @available(OSX 10.11, *) func layoutManager(_: NSLayoutManager, textContainer: NSTextContainer, didChangeGeometryFrom: NSSize)
  @objc @available(OSX 10.11, *) func layoutManager(_: NSLayoutManager, shouldGenerateGlyphs: CGGlyph, properties: NSLayoutManager.GlyphProperty, characterIndexes: Int, font: NSFont, forGlyphRange: NSRange) -> Int
  @objc @available(OSX 10.5, *) func layoutManager(_: NSLayoutManager, shouldUseTemporaryAttributes: [String: Any], forDrawingToScreen: Bool, atCharacterIndex: Int, effectiveRange: NSRangePointer?) -> [String: Any]?
  @objc @available(OSX 10.0, *) func layoutManagerDidInvalidateLayout(_: NSLayoutManager)
}

