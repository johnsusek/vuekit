import AppKit
import JavaScriptCore

@objc protocol NSWindowTabExports: JSExport {
	@objc var accessoryView: NSView? { @objc get @objc (setAccessoryView:) set }
	@objc var attributedTitle: NSAttributedString? { @objc get @objc (setAttributedTitle:) set }
	@objc var title: String! { @objc get @objc (setTitle:) set }
	@objc var toolTip: String! { @objc get @objc (setToolTip:) set }
}

extension NSWindowTab: NSWindowTabExports {
	@objc override class func create() -> NSWindowTab {
		return NSWindowTab()
	}
}
