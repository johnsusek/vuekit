import AppKit
import JavaScriptCore

@objc protocol NSTabViewItemExports: JSExport {
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
	@objc (drawLabel:inRect:) func drawLabel(_: Bool, in: NSRect)
	@objc (sizeOfLabel:) func sizeOfLabel(_: Bool) -> NSSize
	@objc @available(OSX 10.10, *) static func create(viewController: NSViewController) -> NSTabViewItem
	@objc static func create(identifier: Any?) -> NSTabViewItem
}

extension NSTabViewItem: NSTabViewItemExports {
	@objc @available(OSX 10.10, *) class func create(viewController: NSViewController) -> NSTabViewItem {
		return NSTabViewItem(viewController: viewController)
	}

	@objc class func create(identifier: Any?) -> NSTabViewItem {
		return NSTabViewItem(identifier: identifier)
	}

	@objc override class func create() -> NSTabViewItem {
		return NSTabViewItem()
	}
}
