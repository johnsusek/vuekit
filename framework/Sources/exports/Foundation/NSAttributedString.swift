import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSAttributedStringExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports, NSSecureCodingExports, NSPasteboardReadingExports, NSPasteboardWritingExports
	// Static Methods
	// 	@objc @available(OSX 10.0, *) static func create(attachment: NSTextAttachment) -> NSAttributedString

	// Own Static Properties
	@objc @available(OSX 10.5, *) static var textTypes: [String] { @objc get }
	@objc @available(OSX 10.5, *) static var textUnfilteredTypes: [String] { @objc get }

	// Instance Methods
	@objc (RTFDFileWrapperFromRange:documentAttributes:) func rtfdFileWrapper(from range: NSRange, documentAttributes dict: [NSAttributedString.DocumentAttributeKey : Any]) -> FileWrapper?
	@objc (RTFDFromRange:documentAttributes:) func rtfd(from range: NSRange, documentAttributes dict: [NSAttributedString.DocumentAttributeKey : Any]) -> Data?
	@objc (RTFFromRange:documentAttributes:) func rtf(from range: NSRange, documentAttributes dict: [NSAttributedString.DocumentAttributeKey : Any]) -> Data?
	@objc (attribute:atIndex:effectiveRange:) func attribute(_: NSAttributedString.Key, at: Int, effectiveRange: UnsafeMutablePointer<NSRange>?) -> Any?
	@objc (attribute:atIndex:longestEffectiveRange:inRange:) func attribute(_: NSAttributedString.Key, at: Int, longestEffectiveRange: UnsafeMutablePointer<NSRange>?, in: NSRange) -> Any?
	@objc (attributedSubstringFromRange:) func attributedSubstring(from: NSRange) -> NSAttributedString
	@objc (attributesAtIndex:effectiveRange:) func attributes(at location: Int, effectiveRange range: NSRangePointer?) -> [NSAttributedString.Key : Any]
	@objc (attributesAtIndex:longestEffectiveRange:inRange:) func attributes(at location: Int, longestEffectiveRange range: NSRangePointer?, in rangeLimit: NSRange) -> [NSAttributedString.Key : Any]
	@objc (boundingRectWithSize:options:) func boundingRect(with: NSSize, options: NSString.DrawingOptions) -> NSRect
	@objc (boundingRectWithSize:options:context:) @available(OSX 10.11, *) func boundingRect(with: NSSize, options: NSString.DrawingOptions, context: NSStringDrawingContext?) -> NSRect
	@objc (containsAttachmentsInRange:) @available(OSX 10.11, *) func containsAttachments(in: NSRange) -> Bool
	// 	@objc @available(OSX 10.0, *) func dataFromRange(documentAttributes: NSRange, error: [String: Any]) -> Data?
	@objc (docFormatFromRange:documentAttributes:) func docFormat(from range: NSRange, documentAttributes dict: [NSAttributedString.DocumentAttributeKey : Any]) -> Data?
	@objc (doubleClickAtIndex:) func doubleClick(at: Int) -> NSRange
	@objc (drawAtPoint:) @available(OSX 10.0, *) func draw(at: NSPoint)
	@objc (drawInRect:) @available(OSX 10.0, *) func draw(in: NSRect)
	@objc (drawWithRect:options:) func draw(with: NSRect, options: NSString.DrawingOptions)
	@objc (drawWithRect:options:context:) @available(OSX 10.11, *) func draw(with: NSRect, options: NSString.DrawingOptions, context: NSStringDrawingContext?)
	@objc (enumerateAttribute:inRange:options:usingBlock:) @available(OSX 10.6, *) func enumerateAttribute(_ attrName: NSAttributedString.Key, in enumerationRange: NSRange, options opts: NSAttributedString.EnumerationOptions, using block: (Any?, NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc (enumerateAttributesInRange:options:usingBlock:) @available(OSX 10.6, *) func enumerateAttributes(in enumerationRange: NSRange, options opts: NSAttributedString.EnumerationOptions, using block: ([NSAttributedString.Key : Any], NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
	// 	@objc @available(OSX 10.0, *) func fileWrapperFromRange(documentAttributes: NSRange, error: [String: Any]) -> FileWrapper?
	@objc (fontAttributesInRange:) func fontAttributes(in range: NSRange) -> [NSAttributedString.Key : Any]
	@objc (isEqualToAttributedString:) func isEqual(to: NSAttributedString) -> Bool
	@objc (itemNumberInTextList:atIndex:) func itemNumber(in: NSTextList, at: Int) -> Int
	@objc (lineBreakBeforeIndex:withinRange:) func lineBreak(before: Int, within: NSRange) -> Int
	@objc (lineBreakByHyphenatingBeforeIndex:withinRange:) func lineBreakByHyphenating(before: Int, within: NSRange) -> Int
	@objc (nextWordFromIndex:forward:) func nextWord(from: Int, forward: Bool) -> Int
	@objc (rangeOfTextBlock:atIndex:) func range(of: NSTextBlock, at: Int) -> NSRange
	@objc (rangeOfTextList:atIndex:) func range(of: NSTextList, at: Int) -> NSRange
	@objc (rangeOfTextTable:atIndex:) func range(of: NSTextTable, at: Int) -> NSRange
	@objc (rulerAttributesInRange:) func rulerAttributes(in range: NSRange) -> [NSAttributedString.Key : Any]
	@objc @available(OSX 10.0, *) func size() -> NSSize

	// Own Instance Properties
	@objc var containsAttachments: Bool { @objc get }
	@objc var length: Int { @objc get }
	@objc var string: String { @objc get }
}

extension NSAttributedString: NSAttributedStringExports {}
