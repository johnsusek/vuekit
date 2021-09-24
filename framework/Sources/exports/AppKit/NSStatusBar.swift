import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSStatusBarExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc (systemStatusBar) static var system: NSStatusBar { @objc (systemStatusBar) get }

	// Instance Methods
	@objc (removeStatusItem:) func removeStatusItem(_: NSStatusItem)
	@objc (statusItemWithLength:) func statusItem(withLength length: CGFloat) -> NSStatusItem

	// Own Instance Properties
	@objc var thickness: CGFloat { get }
	@objc var isVertical: Bool { @objc get }

	// Constructors
}

extension NSStatusBar: NSStatusBarExports {
}
