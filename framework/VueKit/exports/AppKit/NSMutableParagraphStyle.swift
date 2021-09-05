import AppKit
import JavaScriptCore

@objc protocol NSMutableParagraphStyleExports: JSExport {
	@objc var alignment: NSTextAlignment { @objc get @objc (setAlignment:) set }
	@objc @available(OSX 10.11, *) var allowsDefaultTighteningForTruncation: Bool { @objc get @objc (setAllowsDefaultTighteningForTruncation:) set }
	@objc var baseWritingDirection: NSWritingDirection { @objc get @objc (setBaseWritingDirection:) set }
	@objc @available(OSX 10.0, *) var defaultTabInterval: CGFloat { @objc get @objc (setDefaultTabInterval:) set }
	@objc var firstLineHeadIndent: CGFloat { @objc get @objc (setFirstLineHeadIndent:) set }
	@objc var headIndent: CGFloat { @objc get @objc (setHeadIndent:) set }
	@objc var headerLevel: Int { @objc get @objc (setHeaderLevel:) set }
	@objc var hyphenationFactor: Float { @objc get @objc (setHyphenationFactor:) set }
	@objc var lineBreakMode: NSLineBreakMode { @objc get @objc (setLineBreakMode:) set }
	@objc var lineHeightMultiple: CGFloat { @objc get @objc (setLineHeightMultiple:) set }
	@objc var lineSpacing: CGFloat { @objc get @objc (setLineSpacing:) set }
	@objc var maximumLineHeight: CGFloat { @objc get @objc (setMaximumLineHeight:) set }
	@objc var minimumLineHeight: CGFloat { @objc get @objc (setMinimumLineHeight:) set }
	@objc var paragraphSpacing: CGFloat { @objc get @objc (setParagraphSpacing:) set }
	@objc var paragraphSpacingBefore: CGFloat { @objc get @objc (setParagraphSpacingBefore:) set }
	@objc @available(OSX 10.0, *) var tabStops: [NSTextTab]! { @objc get @objc (setTabStops:) set }
	@objc var tailIndent: CGFloat { @objc get @objc (setTailIndent:) set }
	@objc var textBlocks: [NSTextBlock] { @objc get @objc (setTextBlocks:) set }
	@objc var textLists: [NSTextList] { @objc get @objc (setTextLists:) set }
	@objc var tighteningFactorForTruncation: Float { @objc get @objc (setTighteningFactorForTruncation:) set }
	@objc @available(OSX 10.0, *) func addTabStop(_: NSTextTab)
	@objc @available(OSX 10.0, *) func removeTabStop(_: NSTextTab)
	@objc @available(OSX 10.0, *) func setParagraphStyle(_: NSParagraphStyle)
}

extension NSMutableParagraphStyle: NSMutableParagraphStyleExports {
	@objc override class func create() -> NSMutableParagraphStyle {
		return NSMutableParagraphStyle()
	}
}
