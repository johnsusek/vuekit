import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSParagraphStyleExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports, NSSecureCodingExports
	// Static Methods
	@objc (defaultWritingDirectionForLanguage:) static func defaultWritingDirection(forLanguage: String?) -> NSWritingDirection

	// Own Static Properties
	@objc (defaultParagraphStyle) static var `default`: NSParagraphStyle { @objc (defaultParagraphStyle) get }

	// Own Instance Properties
	@objc var alignment: NSTextAlignment { @objc get }
	@objc @available(OSX 10.11, *) var allowsDefaultTighteningForTruncation: Bool { @objc get }
	@objc var baseWritingDirection: NSWritingDirection { @objc get }
	@objc @available(OSX 10.0, *) var defaultTabInterval: CGFloat { get }
	@objc var firstLineHeadIndent: CGFloat { get }
	@objc var headIndent: CGFloat { get }
	@objc var headerLevel: Int { @objc get }
	@objc var hyphenationFactor: Float { @objc get }
	@objc var lineBreakMode: NSLineBreakMode { @objc get }
	@objc var lineHeightMultiple: CGFloat { get }
	@objc var lineSpacing: CGFloat { get }
	@objc var maximumLineHeight: CGFloat { get }
	@objc var minimumLineHeight: CGFloat { get }
	@objc var paragraphSpacing: CGFloat { get }
	@objc var paragraphSpacingBefore: CGFloat { get }
	@objc @available(OSX 10.0, *) var tabStops: [NSTextTab] { @objc get }
	@objc var tailIndent: CGFloat { get }
	@objc var textBlocks: [NSTextBlock] { @objc get }
	@objc var textLists: [NSTextList] { @objc get }
	@objc var tighteningFactorForTruncation: Float { @objc get }

	// Constructors
}

extension NSParagraphStyle: NSParagraphStyleExports {
}
