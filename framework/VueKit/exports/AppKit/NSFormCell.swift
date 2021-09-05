import AppKit
import JavaScriptCore

@objc protocol NSFormCellExports: JSExport {
	@objc var attributedTitle: NSAttributedString { @objc get @objc (setAttributedTitle:) set }
	@objc var placeholderAttributedString: NSAttributedString? { @objc get @objc (setPlaceholderAttributedString:) set }
	@objc var placeholderString: String? { @objc get @objc (setPlaceholderString:) set }
	@objc @available(OSX 10.8, *) var preferredTextFieldWidth: CGFloat { @objc get @objc (setPreferredTextFieldWidth:) set }
	@objc var titleAlignment: NSTextAlignment { @objc get @objc (setTitleAlignment:) set }
	@objc var titleBaseWritingDirection: NSWritingDirection { @objc get @objc (setTitleBaseWritingDirection:) set }
	@objc var titleFont: NSFont { @objc get @objc (setTitleFont:) set }
	@objc var titleWidth: CGFloat { @objc get @objc (setTitleWidth:) set }
	@objc func titleWidth(_: NSSize) -> CGFloat
}

extension NSFormCell: NSFormCellExports {
	@objc override class func create() -> NSFormCell {
		return NSFormCell()
	}
}
