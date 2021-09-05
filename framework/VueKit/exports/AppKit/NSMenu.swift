import AppKit
import JavaScriptCore

@objc protocol NSMenuExports: JSExport {
	@objc static func menuBarVisible() -> Bool
	@objc (popUpContextMenu:withEvent:forView:) static func popUpContextMenu(_: NSMenu, with: NSEvent, `for`: NSView)
	@objc (popUpContextMenu:withEvent:forView:withFont:) static func popUpContextMenu(_: NSMenu, with: NSEvent, `for`: NSView, with with4: NSFont?)
	@objc static func setMenuBarVisible(_: Bool)
	@objc @available(OSX 10.6, *) var allowsContextMenuPlugIns: Bool { @objc get @objc (setAllowsContextMenuPlugIns:) set }
	@objc var autoenablesItems: Bool { @objc get @objc (setAutoenablesItems:) set }
	@objc var delegate: NSMenuDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.6, *) var font: NSFont! { @objc get @objc (setFont:) set }
	@objc @available(OSX 10.5, *) var highlightedItem: NSMenuItem? { @objc get }
	@objc var items: [NSMenuItem] { @objc (itemArray) get @objc (setItemArray:) set }
	@objc var menuBarHeight: CGFloat { @objc get }
	@objc @available(OSX 10.6, *) var minimumWidth: CGFloat { @objc get @objc (setMinimumWidth:) set }
	@objc var numberOfItems: Int { @objc get }
	@objc @available(OSX 10.6, *) var propertiesToUpdate: NSMenu.Properties { @objc get }
	@objc @available(OSX 10.5, *) var showsStateColumn: Bool { @objc get @objc (setShowsStateColumn:) set }
	@objc @available(OSX 10.6, *) var size: NSSize { @objc get }
	@objc var supermenu: NSMenu? { @objc get @objc (setSupermenu:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }
	@objc @available(OSX 10.11, *) var userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection { @objc get @objc (setUserInterfaceLayoutDirection:) set }
	@objc (addItem:) func addItem(_: NSMenuItem)
	@objc (addItemWithTitle:action:keyEquivalent:) func addItem(withTitle: String, action: Selector?, keyEquivalent: String) -> NSMenuItem
	@objc @available(OSX 10.5, *) func cancelTracking()
	@objc @available(OSX 10.6, *) func cancelTrackingWithoutAnimation()
	@objc (indexOfItem:) func index(of: NSMenuItem) -> Int
	@objc (indexOfItemWithRepresentedObject:) func indexOfItem(withRepresentedObject: Any?) -> Int
	@objc (indexOfItemWithSubmenu:) func indexOfItem(withSubmenu: NSMenu?) -> Int
	@objc (indexOfItemWithTag:) func indexOfItem(withTag: Int) -> Int
	@objc (indexOfItemWithTarget:andAction:) func indexOfItem(withTarget: Any?, andAction: Selector?) -> Int
	@objc (indexOfItemWithTitle:) func indexOfItem(withTitle: String) -> Int
	@objc (insertItem:atIndex:) func insertItem(_: NSMenuItem, at: Int)
	@objc (insertItemWithTitle:action:keyEquivalent:atIndex:) func insertItem(withTitle: String, action: Selector?, keyEquivalent: String, at: Int) -> NSMenuItem
	@objc (itemAtIndex:) func item(at: Int) -> NSMenuItem?
	@objc func itemChanged(_: NSMenuItem)
	@objc (itemWithTag:) func item(withTag: Int) -> NSMenuItem?
	@objc (itemWithTitle:) func item(withTitle: String) -> NSMenuItem?
	@objc (performActionForItemAtIndex:) func performActionForItem(at: Int)
	@objc (performKeyEquivalent:) func performKeyEquivalent(with: NSEvent) -> Bool
	@objc (popUpMenuPositioningItem:atLocation:inView:) @available(OSX 10.6, *) func popUp(positioning: NSMenuItem?, at: NSPoint, in: NSView?) -> Bool
	@objc @available(OSX 10.6, *) func removeAllItems()
	@objc (removeItem:) func removeItem(_: NSMenuItem)
	@objc (removeItemAtIndex:) func removeItem(at: Int)
	@objc (setSubmenu:forItem:) func setSubmenu(_: NSMenu?, `for`: NSMenuItem)
	@objc func submenuAction(_: Any?)
	@objc func update()
	@objc static func create(title: String) -> NSMenu
}

extension NSMenu: NSMenuExports {
	@objc class func create(title: String) -> NSMenu {
		return NSMenu(title: title)
	}

	@objc override class func create() -> NSMenu {
		return NSMenu()
	}
}
