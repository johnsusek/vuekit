import AppKit
import JavaScriptCore

@objc protocol NSToolbarExports: JSExport {
	@objc @available(OSX 10.10, *) var allowsExtensionItems: Bool { @objc get @objc (setAllowsExtensionItems:) set }
	@objc var allowsUserCustomization: Bool { @objc get @objc (setAllowsUserCustomization:) set }
	@objc var autosavesConfiguration: Bool { @objc get @objc (setAutosavesConfiguration:) set }
	@objc @available(OSX 10.14, *) var centeredItemIdentifier: NSToolbarItem.Identifier? { @objc get @objc (setCenteredItemIdentifier:) set }
	@objc var configuration: [String: Any] { @objc (configurationDictionary) get }
	@objc var customizationPaletteIsRunning: Bool { @objc get }
	@objc var delegate: NSToolbarDelegate? { @objc get @objc (setDelegate:) set }
	@objc var displayMode: NSToolbar.DisplayMode { @objc get @objc (setDisplayMode:) set }
	@objc var identifier: NSToolbar.Identifier { @objc get }
	@objc var items: [NSToolbarItem] { @objc get }
	@objc var selectedItemIdentifier: NSToolbarItem.Identifier? { @objc get @objc (setSelectedItemIdentifier:) set }
	@objc var showsBaselineSeparator: Bool { @objc get @objc (setShowsBaselineSeparator:) set }
	@objc var sizeMode: NSToolbar.SizeMode { @objc get @objc (setSizeMode:) set }
	@objc var isVisible: Bool { @objc get @objc (setVisible:) set }
	@objc var visibleItems: [NSToolbarItem]? { @objc get }
	@objc (insertItemWithItemIdentifier:atIndex:) func insertItem(withItemIdentifier: NSToolbarItem.Identifier, at: Int)
	@objc (removeItemAtIndex:) func removeItem(at: Int)
	@objc func runCustomizationPalette(_: Any?)
	@objc (setConfigurationFromDictionary:) func setConfiguration(_: [String: Any])
	@objc func validateVisibleItems()
	@objc static func create(identifier: NSToolbar.Identifier) -> NSToolbar
}

extension NSToolbar: NSToolbarExports {
	@objc class func create(identifier: NSToolbar.Identifier) -> NSToolbar {
		return NSToolbar(identifier: identifier)
	}

	@objc override class func create() -> NSToolbar {
		return NSToolbar()
	}
}
