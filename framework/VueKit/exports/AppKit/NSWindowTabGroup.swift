import AppKit
import JavaScriptCore

@objc protocol NSWindowTabGroupExports: JSExport {
	@objc var identifier: NSWindow.TabbingIdentifier { @objc get }
	@objc var isOverviewVisible: Bool { @objc get @objc (setOverviewVisible:) set }
	@objc var selectedWindow: NSWindow? { @objc get @objc (setSelectedWindow:) set }
	@objc var isTabBarVisible: Bool { @objc get }
	@objc var windows: [NSWindow] { @objc get }
	@objc func addWindow(_: NSWindow)
	@objc (insertWindow:atIndex:) func insertWindow(_: NSWindow, at: Int)
	@objc func removeWindow(_: NSWindow)
}

extension NSWindowTabGroup: NSWindowTabGroupExports {
	@objc override class func create() -> NSWindowTabGroup {
		return NSWindowTabGroup()
	}
}
