import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSMutableAttributedStringExports: JSExport, NSAttributedStringExports {
	// Static Methods

	// Instance Methods
	@objc func addAttribute(_: NSAttributedString.Key, value: Any, range: NSRange)
	@objc func addAttributes(_ attrs: [NSAttributedString.Key : Any], range: NSRange)
	@objc (appendAttributedString:) func append(_: NSAttributedString)
	@objc func applyFontTraits(_: NSFontTraitMask, range: NSRange)
	@objc func beginEditing()
	@objc (deleteCharactersInRange:) func deleteCharacters(in: NSRange)
	@objc func endEditing()
	@objc (fixAttachmentAttributeInRange:) func fixAttachmentAttribute(in: NSRange)
	@objc (fixAttributesInRange:) @available(OSX 10.0, *) func fixAttributes(in: NSRange)
	@objc (fixFontAttributeInRange:) func fixFontAttribute(in: NSRange)
	@objc (fixParagraphStyleAttributeInRange:) func fixParagraphStyleAttribute(in: NSRange)
	@objc (insertAttributedString:atIndex:) func insert(_: NSAttributedString, at: Int)
	// last error param - @objc (readFromData:options:documentAttributes:error:) @available(OSX 10.0, *) func read(_: Data, _: [String: Any], _: UnsafeMutablePointer<[NSDictionary: Any]>?) -> Bool
	// last error param - @objc (readFromURL:options:documentAttributes:error:) @available(OSX 10.5, *) func read(_: NSURL, _: [String: Any], _: UnsafeMutablePointer<[NSDictionary: Any]>?) -> Bool
	@objc func removeAttribute(_: NSAttributedString.Key, range: NSRange)
	@objc (replaceCharactersInRange:withAttributedString:) func replaceCharacters(in: NSRange, with: NSAttributedString)
	@objc (replaceCharactersInRange:withString:) func replaceCharacters(in: NSRange, with: String)
	@objc func setAlignment(_: NSTextAlignment, range: NSRange)
	@objc func setAttributedString(_: NSAttributedString)
	@objc func setAttributes(_ attrs: [NSAttributedString.Key : Any]?, range: NSRange)
	@objc func setBaseWritingDirection(_: NSWritingDirection, range: NSRange)
	@objc func subscriptRange(_: NSRange)
	@objc func superscriptRange(_: NSRange)
	@objc func unscriptRange(_: NSRange)
	@objc (updateAttachmentsFromPath:) func updateAttachments(fromPath: String)

	// Own Instance Properties
	@objc var mutableString: NSMutableString { @objc get }
}

extension NSMutableAttributedString: NSMutableAttributedStringExports {}
