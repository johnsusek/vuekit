import AppKit
import JavaScriptCore

@objc protocol NSPathControlItemExports: JSExport {
	@objc var url: URL? { @objc (URL) get }
	@objc var attributedTitle: NSAttributedString { @objc get @objc (setAttributedTitle:) set }
	@objc var image: NSImage? { @objc get @objc (setImage:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }
}

extension NSPathControlItem: NSPathControlItemExports {
	@objc override class func create() -> NSPathControlItem {
		return NSPathControlItem()
	}
}
