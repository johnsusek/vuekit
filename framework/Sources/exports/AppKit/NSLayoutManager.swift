import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSLayoutManagerExports: JSExport {
	// , NSSecureCodingExports, NSGlyphStorageExports
	// Static Methods

	// Instance Methods
	@objc (CGGlyphAtIndex:) @available(OSX 10.11, *) func cgGlyph(at: Int) -> UInt16
	// 	@objc (CGGlyphAtIndex:isValidIndex:) @available(OSX 10.11, *) func cgGlyph(at: Int, isValidIndex: UnsafeMutablePointer<Bool>?) -> UInt16
	@objc @available(OSX 10.5, *) func addTemporaryAttribute(_: NSAttributedString.Key, value: Any, forCharacterRange: NSRange)
	@objc func addTemporaryAttributes(_ attrs: [NSAttributedString.Key : Any], forCharacterRange charRange: NSRange)
	@objc func addTextContainer(_: NSTextContainer)
	@objc (attachmentSizeForGlyphAtIndex:) func attachmentSize(forGlyphAt: Int) -> NSSize
	@objc (boundingRectForGlyphRange:inTextContainer:) func boundingRect(forGlyphRange: NSRange, in: NSTextContainer) -> NSRect
	@objc (boundsRectForTextBlock:atIndex:effectiveRange:) func boundsRect(`for`: NSTextBlock, at: Int, effectiveRange: UnsafeMutablePointer<NSRange>?) -> NSRect
	@objc (boundsRectForTextBlock:glyphRange:) func boundsRect(`for`: NSTextBlock, glyphRange: NSRange) -> NSRect
	@objc (characterIndexForGlyphAtIndex:) func characterIndexForGlyph(at: Int) -> Int
	@objc (characterIndexForPoint:inTextContainer:fractionOfDistanceBetweenInsertionPoints:) func characterIndex(`for`: NSPoint, in: NSTextContainer, fractionOfDistanceBetweenInsertionPoints: UnsafeMutablePointer<CGFloat>?) -> Int
	@objc (characterRangeForGlyphRange:actualGlyphRange:) func characterRange(forGlyphRange: NSRange, actualGlyphRange: UnsafeMutablePointer<NSRange>?) -> NSRange
	@objc (defaultBaselineOffsetForFont:) func defaultBaselineOffset(`for`: NSFont) -> CGFloat
	@objc (defaultLineHeightForFont:) func defaultLineHeight(`for`: NSFont) -> CGFloat
	@objc (drawBackgroundForGlyphRange:atPoint:) func drawBackground(forGlyphRange: NSRange, at: NSPoint)
	@objc (drawGlyphsForGlyphRange:atPoint:) func drawGlyphs(forGlyphRange: NSRange, at: NSPoint)
	@objc (drawStrikethroughForGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:) func drawStrikethrough(forGlyphRange glyphRange: NSRange, strikethroughType strikethroughVal: NSUnderlineStyle, baselineOffset: CGFloat, lineFragmentRect lineRect: NSRect, lineFragmentGlyphRange lineGlyphRange: NSRange, containerOrigin: NSPoint)
	@objc (drawUnderlineForGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:) func drawUnderline(forGlyphRange glyphRange: NSRange, underlineType underlineVal: NSUnderlineStyle, baselineOffset: CGFloat, lineFragmentRect lineRect: NSRect, lineFragmentGlyphRange lineGlyphRange: NSRange, containerOrigin: NSPoint)
	@objc (drawsOutsideLineFragmentForGlyphAtIndex:) func drawsOutsideLineFragment(forGlyphAt: Int) -> Bool
	@objc (ensureGlyphsForCharacterRange:) func ensureGlyphs(forCharacterRange: NSRange)
	@objc (ensureGlyphsForGlyphRange:) func ensureGlyphs(forGlyphRange: NSRange)
	@objc (ensureLayoutForBoundingRect:inTextContainer:) func ensureLayout(forBoundingRect: NSRect, in: NSTextContainer)
	@objc (ensureLayoutForCharacterRange:) func ensureLayout(forCharacterRange: NSRange)
	@objc (ensureLayoutForGlyphRange:) func ensureLayout(forGlyphRange: NSRange)
	@objc (ensureLayoutForTextContainer:) func ensureLayout(`for`: NSTextContainer)
	@objc (enumerateEnclosingRectsForGlyphRange:withinSelectedGlyphRange:inTextContainer:usingBlock:) @available(OSX 10.11, *) func enumerateEnclosingRects(forGlyphRange glyphRange: NSRange, withinSelectedGlyphRange selectedRange: NSRange, in textContainer: NSTextContainer, using block: @escaping (NSRect, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc (enumerateLineFragmentsForGlyphRange:usingBlock:) @available(OSX 10.11, *) func enumerateLineFragments(forGlyphRange glyphRange: NSRange, using block: @escaping (NSRect, NSRect, NSTextContainer, NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc @available(OSX 10.6, *) func fillBackgroundRectArray(_: UnsafePointer<NSRect>, count: Int, forCharacterRange: NSRange, color: NSColor)
	@objc func firstUnlaidCharacterIndex() -> Int
	@objc func firstUnlaidGlyphIndex() -> Int
	@objc (fractionOfDistanceThroughGlyphForPoint:inTextContainer:) func fractionOfDistanceThroughGlyph(`for`: NSPoint, in: NSTextContainer) -> CGFloat
	@objc func getFirstUnlaidCharacterIndex(_: UnsafeMutablePointer<Int>?, glyphIndex: UnsafeMutablePointer<Int>?)
	@objc (getGlyphsInRange:glyphs:properties:characterIndexes:bidiLevels:) @available(OSX 10.5, *) func getGlyphs(in glyphRange: NSRange, glyphs glyphBuffer: UnsafeMutablePointer<CGGlyph>?, properties props: UnsafeMutablePointer<NSLayoutManager.GlyphProperty>?, characterIndexes charIndexBuffer: UnsafeMutablePointer<Int>?, bidiLevels bidiLevelBuffer: UnsafeMutablePointer<UInt8>?) -> Int
	@objc (getLineFragmentInsertionPointsForCharacterAtIndex:alternatePositions:inDisplayOrder:positions:characterIndexes:) func getLineFragmentInsertionPoints(forCharacterAt: Int, alternatePositions: Bool, inDisplayOrder: Bool, positions: UnsafeMutablePointer<CGFloat>?, characterIndexes: UnsafeMutablePointer<Int>?) -> Int
	@objc (glyphAtIndex:) func glyph(at: Int) -> NSGlyph
	@objc (glyphAtIndex:isValidIndex:) func glyph(at glyphIndex: Int, isValidIndex: UnsafeMutablePointer<ObjCBool>?) -> NSGlyph
	@objc (glyphIndexForCharacterAtIndex:) func glyphIndexForCharacter(at: Int) -> Int
	@objc (glyphIndexForPoint:inTextContainer:) func glyphIndex(`for`: NSPoint, in: NSTextContainer) -> Int
	@objc (glyphIndexForPoint:inTextContainer:fractionOfDistanceThroughGlyph:) func glyphIndex(`for`: NSPoint, in: NSTextContainer, fractionOfDistanceThroughGlyph: UnsafeMutablePointer<CGFloat>?) -> Int
	@objc (glyphRangeForBoundingRect:inTextContainer:) func glyphRange(forBoundingRect: NSRect, in: NSTextContainer) -> NSRange
	@objc (glyphRangeForBoundingRectWithoutAdditionalLayout:inTextContainer:) func glyphRange(forBoundingRectWithoutAdditionalLayout: NSRect, in: NSTextContainer) -> NSRange
	@objc (glyphRangeForCharacterRange:actualCharacterRange:) func glyphRange(forCharacterRange: NSRange, actualCharacterRange: UnsafeMutablePointer<NSRange>?) -> NSRange
	@objc (glyphRangeForTextContainer:) func glyphRange(`for`: NSTextContainer) -> NSRange
	@objc (insertTextContainer:atIndex:) func insertTextContainer(_: NSTextContainer, at: Int)
	@objc (invalidateDisplayForCharacterRange:) func invalidateDisplay(forCharacterRange: NSRange)
	@objc (invalidateDisplayForGlyphRange:) func invalidateDisplay(forGlyphRange: NSRange)
	@objc (invalidateGlyphsForCharacterRange:changeInLength:actualCharacterRange:) func invalidateGlyphs(forCharacterRange: NSRange, changeInLength: Int, actualCharacterRange: UnsafeMutablePointer<NSRange>?)
	@objc (invalidateLayoutForCharacterRange:actualCharacterRange:) @available(OSX 10.5, *) func invalidateLayout(forCharacterRange: NSRange, actualCharacterRange: UnsafeMutablePointer<NSRange>?)
	@objc @available(OSX 10.0, *) func isValidGlyphIndex(_: Int) -> Bool
	@objc (layoutManagerOwnsFirstResponderInWindow:) func layoutManagerOwnsFirstResponder(in: NSWindow) -> Bool
	@objc (layoutRectForTextBlock:atIndex:effectiveRange:) func layoutRect(`for`: NSTextBlock, at: Int, effectiveRange: UnsafeMutablePointer<NSRange>?) -> NSRect
	@objc (layoutRectForTextBlock:glyphRange:) func layoutRect(`for`: NSTextBlock, glyphRange: NSRange) -> NSRect
	@objc (lineFragmentRectForGlyphAtIndex:effectiveRange:) func lineFragmentRect(forGlyphAt: Int, effectiveRange: UnsafeMutablePointer<NSRange>?) -> NSRect
	@objc (lineFragmentRectForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:) @available(OSX 10.0, *) func lineFragmentRect(forGlyphAt: Int, effectiveRange: UnsafeMutablePointer<NSRange>?, withoutAdditionalLayout: Bool) -> NSRect
	@objc (lineFragmentUsedRectForGlyphAtIndex:effectiveRange:) func lineFragmentUsedRect(forGlyphAt: Int, effectiveRange: UnsafeMutablePointer<NSRange>?) -> NSRect
	@objc (lineFragmentUsedRectForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:) @available(OSX 10.0, *) func lineFragmentUsedRect(forGlyphAt: Int, effectiveRange: UnsafeMutablePointer<NSRange>?, withoutAdditionalLayout: Bool) -> NSRect
	@objc (locationForGlyphAtIndex:) func location(forGlyphAt: Int) -> NSPoint
	@objc (notShownAttributeForGlyphAtIndex:) func notShownAttribute(forGlyphAt: Int) -> Bool
	@objc (processEditingForTextStorage:edited:range:changeInLength:invalidatedRange:) @available(OSX 10.11, *) func processEditing(`for`: NSTextStorage, edited: NSTextStorageEditActions, range: NSRange, changeInLength: Int, invalidatedRange: NSRange)
	@objc (propertyForGlyphAtIndex:) @available(OSX 10.5, *) func propertyForGlyph(at: Int) -> NSLayoutManager.GlyphProperty
	@objc (rangeOfNominallySpacedGlyphsContainingIndex:) func range(ofNominallySpacedGlyphsContaining: Int) -> NSRange
	@objc (rectArrayForCharacterRange:withinSelectedCharacterRange:inTextContainer:rectCount:) func rectArray(forCharacterRange: NSRange, withinSelectedCharacterRange: NSRange, in: NSTextContainer, rectCount: UnsafeMutablePointer<Int>) -> UnsafeMutablePointer<NSRect>?
	@objc (rectArrayForGlyphRange:withinSelectedGlyphRange:inTextContainer:rectCount:) func rectArray(forGlyphRange: NSRange, withinSelectedGlyphRange: NSRange, in: NSTextContainer, rectCount: UnsafeMutablePointer<Int>) -> UnsafeMutablePointer<NSRect>?
	@objc func removeTemporaryAttribute(_: NSAttributedString.Key, forCharacterRange: NSRange)
	@objc (removeTextContainerAtIndex:) func removeTextContainer(at: Int)
	@objc func replaceTextStorage(_: NSTextStorage)
	@objc (rulerAccessoryViewForTextView:paragraphStyle:ruler:enabled:) func rulerAccessoryView(`for`: NSTextView, paragraphStyle: NSParagraphStyle, ruler: NSRulerView, enabled: Bool) -> NSView?
	@objc (rulerMarkersForTextView:paragraphStyle:ruler:) func rulerMarkers(`for`: NSTextView, paragraphStyle: NSParagraphStyle, ruler: NSRulerView) -> [NSRulerMarker]
	@objc func setAttachmentSize(_: NSSize, forGlyphRange: NSRange)
	@objc (setBoundsRect:forTextBlock:glyphRange:) func setBoundsRect(_: NSRect, `for`: NSTextBlock, glyphRange: NSRange)
	@objc (setDrawsOutsideLineFragment:forGlyphAtIndex:) func setDrawsOutsideLineFragment(_: Bool, forGlyphAt: Int)
	@objc func setExtraLineFragmentRect(_: NSRect, usedRect: NSRect, textContainer: NSTextContainer)
	@objc @available(OSX 10.11, *) func setGlyphs(_: UnsafePointer<UInt16>, properties: UnsafePointer<NSLayoutManager.GlyphProperty>, characterIndexes: UnsafePointer<Int>, font: NSFont, forGlyphRange: NSRange)
	@objc (setLayoutRect:forTextBlock:glyphRange:) func setLayoutRect(_: NSRect, `for`: NSTextBlock, glyphRange: NSRange)
	@objc func setLineFragmentRect(_: NSRect, forGlyphRange: NSRange, usedRect: NSRect)
	@objc func setLocation(_: NSPoint, forStartOfGlyphRange: NSRange)
	@objc (setNotShownAttribute:forGlyphAtIndex:) func setNotShownAttribute(_: Bool, forGlyphAt: Int)
	@objc func setTemporaryAttributes(_ attrs: [NSAttributedString.Key : Any], forCharacterRange charRange: NSRange)
	@objc func setTextContainer(_: NSTextContainer, forGlyphRange: NSRange)
	@objc (showAttachmentCell:inRect:characterIndex:) func showAttachmentCell(_: NSCell, in: NSRect, characterIndex: Int)
	@objc (showCGGlyphs:positions:count:font:textMatrix:attributes:inContext:) @available(OSX 10.15, *) func showCGGlyphs(_ glyphs: UnsafePointer<CGGlyph>, positions: UnsafePointer<CGPoint>, count glyphCount: Int, font: NSFont, textMatrix: CGAffineTransform, attributes: [NSAttributedString.Key : Any], in CGContext: CGContext)
	@objc func strikethroughGlyphRange(_: NSRange, strikethroughType: NSUnderlineStyle, lineFragmentRect: NSRect, lineFragmentGlyphRange: NSRange, containerOrigin: NSPoint)
	@objc @available(OSX 10.5, *) func temporaryAttribute(_: NSAttributedString.Key, atCharacterIndex: Int, effectiveRange: UnsafeMutablePointer<NSRange>?) -> Any?
	@objc (temporaryAttribute:atCharacterIndex:longestEffectiveRange:inRange:) @available(OSX 10.5, *) func temporaryAttribute(_: NSAttributedString.Key, atCharacterIndex: Int, longestEffectiveRange: UnsafeMutablePointer<NSRange>?, in: NSRange) -> Any?
	@objc (temporaryAttributesAtCharacterIndex:effectiveRange:) func temporaryAttributes(atCharacterIndex charIndex: Int, effectiveRange effectiveCharRange: NSRangePointer?) -> [NSAttributedString.Key : Any]
	@objc (temporaryAttributesAtCharacterIndex:longestEffectiveRange:inRange:) @available(OSX 10.5, *) func temporaryAttributes(atCharacterIndex location: Int, longestEffectiveRange range: NSRangePointer?, in rangeLimit: NSRange) -> [NSAttributedString.Key : Any]
	@objc func textContainerChangedGeometry(_: NSTextContainer)
	@objc func textContainerChangedTextView(_: NSTextContainer)
	@objc (textContainerForGlyphAtIndex:effectiveRange:) func textContainer(forGlyphAt: Int, effectiveRange: UnsafeMutablePointer<NSRange>?) -> NSTextContainer?
	@objc (textContainerForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:) @available(OSX 10.0, *) func textContainer(forGlyphAt: Int, effectiveRange: UnsafeMutablePointer<NSRange>?, withoutAdditionalLayout: Bool) -> NSTextContainer?
	@objc (truncatedGlyphRangeInLineFragmentForGlyphAtIndex:) @available(OSX 10.11, *) func truncatedGlyphRange(inLineFragmentForGlyphAt: Int) -> NSRange
	@objc func underlineGlyphRange(_: NSRange, underlineType: NSUnderlineStyle, lineFragmentRect: NSRect, lineFragmentGlyphRange: NSRange, containerOrigin: NSPoint)
	@objc (usedRectForTextContainer:) func usedRect(`for`: NSTextContainer) -> NSRect

	// Own Instance Properties
	@objc @available(OSX 10.5, *) var allowsNonContiguousLayout: Bool { @objc get @objc (setAllowsNonContiguousLayout:) set }
	@objc var backgroundLayoutEnabled: Bool { @objc get @objc (setBackgroundLayoutEnabled:) set }
	@objc var defaultAttachmentScaling: NSImageScaling { @objc get @objc (setDefaultAttachmentScaling:) set }
	@objc var delegate: NSLayoutManagerDelegate? { @objc get @objc (setDelegate:) set }
	@objc var extraLineFragmentRect: NSRect { @objc get }
	@objc var extraLineFragmentTextContainer: NSTextContainer? { @objc get }
	@objc var extraLineFragmentUsedRect: NSRect { @objc get }
	@objc var firstTextView: NSTextView? { @objc get }
	@objc var glyphGenerator: NSGlyphGenerator { @objc get @objc (setGlyphGenerator:) set }
	@objc @available(OSX 10.5, *) var hasNonContiguousLayout: Bool { @objc get }
	@objc @available(OSX 10.14, *) var limitsLayoutForSuspiciousContents: Bool { @objc get @objc (setLimitsLayoutForSuspiciousContents:) set }
	@objc var numberOfGlyphs: Int { @objc get }
	@objc var showsControlCharacters: Bool { @objc get @objc (setShowsControlCharacters:) set }
	@objc var showsInvisibleCharacters: Bool { @objc get @objc (setShowsInvisibleCharacters:) set }
	@objc var textContainers: [NSTextContainer] { @objc get }
	@objc var textStorage: NSTextStorage? { @objc get @objc (setTextStorage:) set }
	@objc var textViewForBeginningOfSelection: NSTextView? { @objc get }
	@objc var typesetter: NSTypesetter { @objc get @objc (setTypesetter:) set }
	@objc var typesetterBehavior: NSLayoutManager.TypesetterBehavior { @objc get @objc (setTypesetterBehavior:) set }
	@objc @available(OSX 10.15, *) var usesDefaultHyphenation: Bool { @objc get @objc (setUsesDefaultHyphenation:) set }
	@objc var usesFontLeading: Bool { @objc get @objc (setUsesFontLeading:) set }

	// Constructors
}

extension NSLayoutManager: NSLayoutManagerExports {
}
