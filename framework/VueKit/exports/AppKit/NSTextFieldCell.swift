import AppKit
import JavaScriptCore

@objc protocol NSTextFieldCellExports: JSExport {
	@objc @available(OSX 10.5, *) var allowedInputSourceLocales: [String]? { @objc get @objc (setAllowedInputSourceLocales:) set }
	@objc var backgroundColor: NSColor? { @objc get @objc (setBackgroundColor:) set }
	@objc var bezelStyle: NSTextField.BezelStyle { @objc get @objc (setBezelStyle:) set }
	@objc var drawsBackground: Bool { @objc get @objc (setDrawsBackground:) set }
	@objc var placeholderAttributedString: NSAttributedString? { @objc get @objc (setPlaceholderAttributedString:) set }
	@objc var placeholderString: String? { @objc get @objc (setPlaceholderString:) set }
	@objc var textColor: NSColor? { @objc get @objc (setTextColor:) set }
	@objc @available(OSX 10.5, *) func setWantsNotificationForMarkedText(_: Bool)
}

extension NSTextFieldCell: NSTextFieldCellExports {
	@objc override class func create() -> NSTextFieldCell {
		return NSTextFieldCell()
	}
}
