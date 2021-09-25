import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTabViewItemExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Instance Methods
	@objc (drawLabel:inRect:) func drawLabel(_: Bool, in: NSRect)
	@objc (sizeOfLabel:) func sizeOfLabel(_: Bool) -> NSSize

	// Own Instance Properties
	@objc var color: NSColor { @objc get @objc (setColor:) set }
	@objc var identifier: Any? { @objc get @objc (setIdentifier:) set }
	@objc @available(OSX 10.10, *) var image: NSImage? { @objc get @objc (setImage:) set }
	@objc var initialFirstResponder: NSView? { @objc get @objc (setInitialFirstResponder:) set }
	@objc var label: String { @objc get @objc (setLabel:) set }
	@objc var tabState: NSTabViewItem.State { @objc get }
	@objc var tabView: NSTabView? { @objc get }
	@objc @available(OSX 10.6, *) var toolTip: String? { @objc get @objc (setToolTip:) set }
	@objc var view: NSView? { @objc get @objc (setView:) set }
	@objc @available(OSX 10.10, *) var viewController: NSViewController? { @objc get @objc (setViewController:) set }

	// Constructors
	@objc static func create() -> NSTabViewItem
	@objc static func create(identifier: Any?) -> NSTabViewItem
}

extension NSTabViewItem: NSTabViewItemExports {
	@objc class func create() -> NSTabViewItem {
		return NSTabViewItem()
	}

	@objc class func create(identifier: Any?) -> NSTabViewItem {
		return NSTabViewItem(identifier: identifier)
	}

}
