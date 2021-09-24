import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPopUpButtonCellExports: JSExport, NSMenuItemCellExports {
	// , NSMenuItemValidationExports
	// Static Methods

	// Instance Methods
	@objc (addItemWithTitle:) func addItem(withTitle: String)
	@objc (addItemsWithTitles:) func addItems(withTitles: [String])
	@objc (attachPopUpWithFrame:inView:) func attachPopUp(withFrame: NSRect, in: NSView)
	@objc func dismissPopUp()
	@objc (indexOfItem:) func index(of: NSMenuItem) -> Int
	@objc (indexOfItemWithRepresentedObject:) func indexOfItem(withRepresentedObject: Any?) -> Int
	@objc (indexOfItemWithTag:) func indexOfItem(withTag: Int) -> Int
	@objc (indexOfItemWithTarget:andAction:) func indexOfItem(withTarget: Any?, andAction: Selector?) -> Int
	@objc (indexOfItemWithTitle:) func indexOfItem(withTitle: String) -> Int
	@objc (insertItemWithTitle:atIndex:) func insertItem(withTitle: String, at: Int)
	@objc (itemAtIndex:) func item(at: Int) -> NSMenuItem?
	@objc (itemTitleAtIndex:) func itemTitle(at: Int) -> String
	@objc (itemWithTitle:) func item(withTitle: String) -> NSMenuItem?
	@objc (performClickWithFrame:inView:) func performClick(withFrame: NSRect, in: NSView)
	@objc func removeAllItems()
	@objc (removeItemAtIndex:) func removeItem(at: Int)
	@objc (removeItemWithTitle:) func removeItem(withTitle: String)
	@objc (selectItem:) func select(_: NSMenuItem?)
	@objc (selectItemAtIndex:) func selectItem(at: Int)
	@objc (selectItemWithTag:) func selectItem(withTag: Int) -> Bool
	@objc (selectItemWithTitle:) func selectItem(withTitle: String)
	@objc func setTitle(_: String?)
	@objc func synchronizeTitleAndSelectedItem()

	// Own Instance Properties
	@objc var altersStateOfSelectedItem: Bool { @objc get @objc (setAltersStateOfSelectedItem:) set }
	@objc var arrowPosition: NSPopUpButton.ArrowPosition { @objc get @objc (setArrowPosition:) set }
	@objc var autoenablesItems: Bool { @objc get @objc (setAutoenablesItems:) set }
	@objc var indexOfSelectedItem: Int { @objc get }
	@objc var itemArray: [NSMenuItem] { @objc get }
	@objc var itemTitles: [String] { @objc get }
	@objc var lastItem: NSMenuItem? { @objc get }
	@objc var numberOfItems: Int { @objc get }
	@objc var preferredEdge: NSRectEdge { @objc get @objc (setPreferredEdge:) set }
	@objc var pullsDown: Bool { @objc get @objc (setPullsDown:) set }
	@objc var selectedItem: NSMenuItem? { @objc get }
	@objc var titleOfSelectedItem: String? { @objc get }
	@objc var usesItemFromMenu: Bool { @objc get @objc (setUsesItemFromMenu:) set }

	// Constructors
	@objc static func create(textCell: String, pullsDown: Bool) -> NSPopUpButtonCell
}

extension NSPopUpButtonCell: NSPopUpButtonCellExports {
	@objc class func create(textCell: String, pullsDown: Bool) -> NSPopUpButtonCell {
		return NSPopUpButtonCell(textCell: textCell, pullsDown: pullsDown)
	}

}
