import AppKit
import JavaScriptCore

@objc protocol NSSecureTextFieldCellExports: JSExport {
	@objc var echosBullets: Bool { @objc get @objc (setEchosBullets:) set }
}

extension NSSecureTextFieldCell: NSSecureTextFieldCellExports {
	@objc override class func create() -> NSSecureTextFieldCell {
		return NSSecureTextFieldCell()
	}
}
