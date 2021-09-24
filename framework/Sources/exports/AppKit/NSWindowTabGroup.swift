import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSWindowTabGroupExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func addWindow(_: NSWindow)
	@objc (insertWindow:atIndex:) func insertWindow(_: NSWindow, at: Int)
	@objc func removeWindow(_: NSWindow)

	// Own Instance Properties
	@objc var identifier: NSWindow.TabbingIdentifier { @objc get }
	@objc var isOverviewVisible: Bool { @objc get @objc (setOverviewVisible:) set }
	@objc var selectedWindow: NSWindow? { @objc get @objc (setSelectedWindow:) set }
	@objc var isTabBarVisible: Bool { @objc get }
	@objc var windows: [NSWindow] { @objc get }

	// Constructors
}

extension NSWindowTabGroup: NSWindowTabGroupExports {
}
