import AppKit
import JavaScriptCore

@objc protocol NSStatusBarExports: JSExport {
	@objc var thickness: CGFloat { @objc get }
	@objc var isVertical: Bool { @objc get }
	@objc static var system: NSStatusBar { @objc (systemStatusBar) get }
	@objc (removeStatusItem:) func removeStatusItem(_: NSStatusItem)
	@objc (statusItemWithLength:) func statusItem(withLength: CGFloat) -> NSStatusItem
}

extension NSStatusBar: NSStatusBarExports {
	@objc override class func create() -> NSStatusBar {
		return NSStatusBar()
	}
}
