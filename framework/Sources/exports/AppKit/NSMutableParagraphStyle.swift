import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSMutableParagraphStyleExports: JSExport, NSParagraphStyleExports {
	// Static Methods

	// Instance Methods
	@objc @available(OSX 10.0, *) func addTabStop(_: NSTextTab)
	@objc @available(OSX 10.0, *) func removeTabStop(_: NSTextTab)
	@objc @available(OSX 10.0, *) func setParagraphStyle(_: NSParagraphStyle)

	// Own Instance Properties
	@objc var alignment: NSTextAlignment { @objc get @objc (setAlignment:) set }
	@objc @available(OSX 10.11, *) var allowsDefaultTighteningForTruncation: Bool { @objc get @objc (setAllowsDefaultTighteningForTruncation:) set }
	@objc var baseWritingDirection: NSWritingDirection { @objc get @objc (setBaseWritingDirection:) set }
	@objc @available(OSX 10.0, *) var defaultTabInterval: CGFloat { get set }
	@objc var firstLineHeadIndent: CGFloat { get set }
	@objc var headIndent: CGFloat { get set }
	@objc var headerLevel: Int { @objc get @objc (setHeaderLevel:) set }
	@objc var hyphenationFactor: Float { @objc get @objc (setHyphenationFactor:) set }
	@objc var lineBreakMode: NSLineBreakMode { @objc get @objc (setLineBreakMode:) set }
	@objc var lineHeightMultiple: CGFloat { get set }
	@objc var lineSpacing: CGFloat { get set }
	@objc var maximumLineHeight: CGFloat { get set }
	@objc var minimumLineHeight: CGFloat { get set }
	@objc var paragraphSpacing: CGFloat { get set }
	@objc var paragraphSpacingBefore: CGFloat { get set }
	@objc @available(OSX 10.0, *) var tabStops: [NSTextTab]! { @objc get @objc (setTabStops:) set }
	@objc var tailIndent: CGFloat { get set }
	@objc var textBlocks: [NSTextBlock] { @objc get @objc (setTextBlocks:) set }
	@objc var textLists: [NSTextList] { @objc get @objc (setTextLists:) set }
	@objc var tighteningFactorForTruncation: Float { @objc get @objc (setTighteningFactorForTruncation:) set }

	// Constructors
}

extension NSMutableParagraphStyle: NSMutableParagraphStyleExports {
}
