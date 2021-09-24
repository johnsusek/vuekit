import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTableColumnExports: JSExport {
	// , NSCodingExports, NSUserInterfaceItemIdentificationExports
	// Static Methods

	// Instance Methods
	@objc (dataCellForRow:) func dataCell(forRow: Int) -> Any
	@objc func sizeToFit()

	// Own Instance Properties
	@objc var dataCell: Any { @objc get @objc (setDataCell:) set }
	@objc var isEditable: Bool { @objc get @objc (setEditable:) set }
	@objc var headerCell: NSTableHeaderCell { @objc get @objc (setHeaderCell:) set }
	@objc @available(OSX 10.5, *) var headerToolTip: String? { @objc get @objc (setHeaderToolTip:) set }
	@objc @available(OSX 10.5, *) var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var maxWidth: CGFloat { get set }
	@objc var minWidth: CGFloat { get set }
	@objc var resizingMask: NSTableColumn.ResizingOptions { @objc get @objc (setResizingMask:) set }
	@objc var sortDescriptorPrototype: NSSortDescriptor? { @objc get @objc (setSortDescriptorPrototype:) set }
	@objc var tableView: NSTableView? { @objc get @objc (setTableView:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }
	@objc var width: CGFloat { get set }

	// Constructors
	@objc static func create(identifier: NSUserInterfaceItemIdentifier) -> NSTableColumn
}

extension NSTableColumn: NSTableColumnExports {
	@objc class func create(identifier: NSUserInterfaceItemIdentifier) -> NSTableColumn {
		return NSTableColumn(identifier: identifier)
	}

}
