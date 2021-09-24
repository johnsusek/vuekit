import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTypesetterExports: JSExport {
	// Static Methods
	@objc (printingAdjustmentInLayoutManager:forNominallySpacedGlyphRange:packedGlyphs:count:) static func printingAdjustment(in layoutMgr: NSLayoutManager, forNominallySpacedGlyphRange nominallySpacedGlyphsRange: NSRange, packedGlyphs: UnsafePointer<UInt8>, count packedGlyphsCount: Int) -> NSSize
	@objc (sharedSystemTypesetterForBehavior:) static func sharedSystemTypesetter(`for`: NSLayoutManager.TypesetterBehavior) -> Any

	// Own Static Properties
	@objc static var defaultTypesetterBehavior: NSLayoutManager.TypesetterBehavior { @objc get }
	@objc (sharedSystemTypesetter) static var sharedSystemTypesetter: NSTypesetter { @objc get }

	// Instance Methods
	@objc (actionForControlCharacterAtIndex:) func actionForControlCharacter(at: Int) -> NSTypesetterControlCharacterAction
	@objc (baselineOffsetInLayoutManager:glyphIndex:) func baselineOffset(in: NSLayoutManager, glyphIndex: Int) -> CGFloat
	@objc (beginLineWithGlyphAtIndex:) func beginLine(withGlyphAt: Int)
	@objc func beginParagraph()
	@objc (boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:) func boundingBox(forControlGlyphAt: Int, `for`: NSTextContainer, proposedLineFragment: NSRect, glyphPosition: NSPoint, characterIndex: Int) -> NSRect
	@objc (characterRangeForGlyphRange:actualGlyphRange:) func characterRange(forGlyphRange: NSRange, actualGlyphRange: UnsafeMutablePointer<NSRange>?) -> NSRange
	@objc (endLineWithGlyphRange:) func endLine(withGlyphRange: NSRange)
	@objc func endParagraph()
	@objc func getLineFragmentRect(_: UnsafeMutablePointer<NSRect>, usedRect: UnsafeMutablePointer<NSRect>, forParagraphSeparatorGlyphRange: NSRange, atProposedOrigin: NSPoint)
	@objc (getLineFragmentRect:usedRect:remainingRect:forStartingGlyphAtIndex:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:) func getLineFragmentRect(_ lineFragmentRect: NSRectPointer!, usedRect lineFragmentUsedRect: NSRectPointer!, remaining remainingRect: NSRectPointer!, forStartingGlyphAt startingGlyphIndex: Int, proposedRect: NSRect, lineSpacing: CGFloat, paragraphSpacingBefore: CGFloat, paragraphSpacingAfter: CGFloat)
	@objc (glyphRangeForCharacterRange:actualCharacterRange:) func glyphRange(forCharacterRange: NSRange, actualCharacterRange: UnsafeMutablePointer<NSRange>?) -> NSRange
	@objc (hyphenCharacterForGlyphAtIndex:) func hyphenCharacter(forGlyphAt: Int) -> UTF32Char
	@objc (hyphenationFactorForGlyphAtIndex:) func hyphenationFactor(forGlyphAt: Int) -> Float
	@objc (layoutCharactersInRange:forLayoutManager:maximumNumberOfLineFragments:) @available(OSX 10.5, *) func layoutCharacters(in: NSRange, `for`: NSLayoutManager, maximumNumberOfLineFragments: Int) -> NSRange
	@objc (layoutGlyphsInLayoutManager:startingAtGlyphIndex:maxNumberOfLineFragments:nextGlyphIndex:) func layoutGlyphs(in: NSLayoutManager, startingAtGlyphIndex: Int, maxNumberOfLineFragments: Int, nextGlyphIndex: UnsafeMutablePointer<Int>)
	@objc (layoutParagraphAtPoint:) func layoutParagraph(at: UnsafeMutablePointer<NSPoint>) -> Int
	@objc (lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:) func lineSpacing(afterGlyphAt: Int, withProposedLineFragmentRect: NSRect) -> CGFloat
	@objc (paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:) func paragraphSpacing(afterGlyphAt: Int, withProposedLineFragmentRect: NSRect) -> CGFloat
	@objc (paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:) func paragraphSpacing(beforeGlyphAt: Int, withProposedLineFragmentRect: NSRect) -> CGFloat
	@objc func setAttachmentSize(_: NSSize, forGlyphRange: NSRange)
	@objc func setBidiLevels(_ levels: UnsafePointer<UInt8>!, forGlyphRange glyphRange: NSRange)
	@objc func setDrawsOutsideLineFragment(_: Bool, forGlyphRange: NSRange)
	@objc func setHardInvalidation(_: Bool, forGlyphRange: NSRange)
	@objc func setLineFragmentRect(_ fragmentRect: NSRect, forGlyphRange glyphRange: NSRange, usedRect: NSRect, baselineOffset: CGFloat)
	@objc func setLocation(_: NSPoint, withAdvancements: UnsafePointer<CGFloat>, forStartOfGlyphRange: NSRange)
	@objc func setNotShownAttribute(_: Bool, forGlyphRange: NSRange)
	@objc func setParagraphGlyphRange(_: NSRange, separatorGlyphRange: NSRange)
	@objc (shouldBreakLineByHyphenatingBeforeCharacterAtIndex:) func shouldBreakLine(byHyphenatingBeforeCharacterAt: Int) -> Bool
	@objc (shouldBreakLineByWordBeforeCharacterAtIndex:) func shouldBreakLine(byWordBeforeCharacterAt: Int) -> Bool
	@objc (substituteFontForFont:) func substituteFont(`for`: NSFont) -> NSFont
	@objc (textTabForGlyphLocation:writingDirection:maxLocation:) func textTab(forGlyphLocation glyphLocation: CGFloat, writingDirection direction: NSWritingDirection, maxLocation: CGFloat) -> NSTextTab?
	@objc func willSetLineFragmentRect(_: UnsafeMutablePointer<NSRect>, forGlyphRange: NSRange, usedRect: UnsafeMutablePointer<NSRect>, baselineOffset: UnsafeMutablePointer<CGFloat>)

	// Own Instance Properties
	@objc var attributedString: NSAttributedString? { @objc get @objc (setAttributedString:) set }
	@objc var attributesForExtraLineFragment: [NSAttributedString.Key : Any] { get }
	@objc var bidiProcessingEnabled: Bool { @objc get @objc (setBidiProcessingEnabled:) set }
	@objc var currentParagraphStyle: NSParagraphStyle? { @objc get }
	@objc var currentTextContainer: NSTextContainer? { @objc get }
	@objc var hyphenationFactor: Float { @objc get @objc (setHyphenationFactor:) set }
	@objc var layoutManager: NSLayoutManager? { @objc get }
	@objc var lineFragmentPadding: CGFloat { get set }
	@objc var paragraphCharacterRange: NSRange { @objc get }
	@objc var paragraphGlyphRange: NSRange { @objc get }
	@objc var paragraphSeparatorCharacterRange: NSRange { @objc get }
	@objc var paragraphSeparatorGlyphRange: NSRange { @objc get }
	@objc var textContainers: NSArray? { get }
	@objc var typesetterBehavior: NSLayoutManager.TypesetterBehavior { @objc get @objc (setTypesetterBehavior:) set }
	@objc var usesFontLeading: Bool { @objc get @objc (setUsesFontLeading:) set }

	// Constructors
}

extension NSTypesetter: NSTypesetterExports {
}
