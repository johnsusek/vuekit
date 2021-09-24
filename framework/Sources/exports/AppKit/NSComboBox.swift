import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSComboBoxExports: JSExport, NSTextFieldExports {
	// Static Methods

	// Instance Methods
	@objc (addItemWithObjectValue:) func addItem(withObjectValue: Any)
	@objc (addItemsWithObjectValues:) func addItems(withObjectValues: [Any])
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
	@objc var dataSource: NSComboBoxDataSource? { @objc get @objc (setDataSource:) set }
	@objc var delegate: NSComboBoxDelegate? { @objc get @objc (setDelegate:) set }
	@objc var hasVerticalScroller: Bool { @objc get @objc (setHasVerticalScroller:) set }
	@objc var indexOfSelectedItem: Int { @objc get }
	@objc var intercellSpacing: NSSize { @objc get @objc (setIntercellSpacing:) set }
	@objc var itemHeight: CGFloat { get set }
	@objc var numberOfItems: Int { @objc get }
	@objc var numberOfVisibleItems: Int { @objc get @objc (setNumberOfVisibleItems:) set }
	@objc var objectValueOfSelectedItem: Any? { @objc get }
	@objc var objectValues: [Any] { @objc get }
	@objc var usesDataSource: Bool { @objc get @objc (setUsesDataSource:) set }
}

@objc protocol ComboBoxExports: JSExport, NSTextFieldExports {
	// Constructors
	@objc static func create() -> ComboBox
}

class ComboBox: NSComboBox, ComboBoxExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ComboBox {
		return ComboBox()
	}

}

extension NSComboBox: NSComboBoxExports {}
