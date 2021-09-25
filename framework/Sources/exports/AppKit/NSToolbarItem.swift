import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSToolbarItemExports: JSExport {
	// , NSCopyingExports, NSMenuItemValidationExports, NSValidatedUserInterfaceItemExports
	// Static Methods

	// Instance Methods
	@objc func validate()

	// Own Instance Properties
	@objc var action: Selector? { @objc get @objc (setAction:) set }
	@objc var allowsDuplicatesInToolbar: Bool { @objc get }
	@objc var autovalidates: Bool { @objc get @objc (setAutovalidates:) set }
	@objc @available(OSX 10.15, *) var isBordered: Bool { @objc get @objc (setBordered:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var image: NSImage? { @objc get @objc (setImage:) set }
	@objc var itemIdentifier: NSToolbarItem.Identifier { @objc get }
	@objc var label: String { @objc get @objc (setLabel:) set }
	@objc var maxSize: NSSize { @objc get @objc (setMaxSize:) set }
	@objc var menuFormRepresentation: NSMenuItem? { @objc get @objc (setMenuFormRepresentation:) set }
	@objc var minSize: NSSize { @objc get @objc (setMinSize:) set }
	@objc var paletteLabel: String { @objc get @objc (setPaletteLabel:) set }
	@objc var tag: Int { @objc get @objc (setTag:) set }
	@objc var target: AnyObject? { @objc get @objc (setTarget:) set }
	@objc @available(OSX 10.15, *) var title: String { @objc get @objc (setTitle:) set }
	@objc var toolTip: String? { @objc get @objc (setToolTip:) set }
	@objc var toolbar: NSToolbar? { @objc get }
	@objc var view: NSView? { @objc get @objc (setView:) set }
	@objc var visibilityPriority: NSToolbarItem.VisibilityPriority { @objc get @objc (setVisibilityPriority:) set }

	// Constructors
	@objc static func create() -> NSToolbarItem
	@objc static func create(itemIdentifier: NSToolbarItem.Identifier) -> NSToolbarItem
}

extension NSToolbarItem: NSToolbarItemExports {
	@objc class func create() -> NSToolbarItem {
		return NSToolbarItem()
	}

	@objc class func create(itemIdentifier: NSToolbarItem.Identifier) -> NSToolbarItem {
		return NSToolbarItem(itemIdentifier: itemIdentifier)
	}

}
