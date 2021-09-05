import AppKit
import JavaScriptCore

@objc protocol NSMenuToolbarItemExports: JSExport {
	@objc var menu: NSMenu { @objc get @objc (setMenu:) set }
	@objc var showsIndicator: Bool { @objc get @objc (setShowsIndicator:) set }
}

extension NSMenuToolbarItem: NSMenuToolbarItemExports {
	@objc override class func create() -> NSMenuToolbarItem {
		return NSMenuToolbarItem()
	}
}
