import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSComboBoxCellExports: JSExport, NSTextFieldCellExports {
	// Static Methods

	// Instance Methods
	@objc (addItemWithObjectValue:) func addItem(withObjectValue: Any)
	@objc (addItemsWithObjectValues:) func addItems(withObjectValues: [Any])
	@objc func completedString(_: String) -> String?
	@objc (deselectItemAtIndex:) func deselectItem(at: Int)
	@objc (indexOfItemWithObjectValue:) func indexOfItem(withObjectValue: Any) -> Int
	@objc (insertItemWithObjectValue:atIndex:) func insertItem(withObjectValue: Any, at: Int)
	@objc (itemObjectValueAtIndex:) func itemObjectValue(at: Int) -> Any
	@objc func noteNumberOfItemsChanged()
	@objc func reloadData()
	@objc func removeAllItems()
	@objc (removeItemAtIndex:) func removeItem(at: Int)
	@objc (removeItemWithObjectValue:) func removeItem(withObjectValue: Any)
	@objc (scrollItemAtIndexToTop:) func scrollItemAtIndexToTop(_: Int)
	@objc func scrollItemAtIndexToVisible(_: Int)
	@objc (selectItemAtIndex:) func selectItem(at: Int)
	@objc (selectItemWithObjectValue:) func selectItem(withObjectValue: Any?)

	// Own Instance Properties
	@objc var isButtonBordered: Bool { @objc get @objc (setButtonBordered:) set }
	@objc var completes: Bool { @objc get @objc (setCompletes:) set }
	@objc var dataSource: NSComboBoxCellDataSource? { @objc get @objc (setDataSource:) set }
	@objc var hasVerticalScroller: Bool { @objc get @objc (setHasVerticalScroller:) set }
	@objc var indexOfSelectedItem: Int { @objc get }
	@objc var intercellSpacing: NSSize { @objc get @objc (setIntercellSpacing:) set }
	@objc var itemHeight: CGFloat { get set }
	@objc var numberOfItems: Int { @objc get }
	@objc var numberOfVisibleItems: Int { @objc get @objc (setNumberOfVisibleItems:) set }
	@objc var objectValueOfSelectedItem: Any? { @objc get }
	@objc var objectValues: [Any] { @objc get }
	@objc var usesDataSource: Bool { @objc get @objc (setUsesDataSource:) set }

	// Constructors
	@objc static func create() -> NSComboBoxCell
}

extension NSComboBoxCell: NSComboBoxCellExports {
	@objc override class func create() -> NSComboBoxCell {
		return NSComboBoxCell()
	}

}
