import AppKit
import JavaScriptCore

@objc protocol NSTableColumnExports: JSExport {
	@objc var dataCell: Any { @objc get @objc (setDataCell:) set }
	@objc var isEditable: Bool { @objc get @objc (setEditable:) set }
	@objc var headerCell: NSTableHeaderCell { @objc get @objc (setHeaderCell:) set }
	@objc @available(OSX 10.5, *) var headerToolTip: String? { @objc get @objc (setHeaderToolTip:) set }
	@objc @available(OSX 10.5, *) var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var maxWidth: CGFloat { @objc get @objc (setMaxWidth:) set }
	@objc var minWidth: CGFloat { @objc get @objc (setMinWidth:) set }
	@objc var resizingMask: NSTableColumn.ResizingOptions { @objc get @objc (setResizingMask:) set }
	@objc var sortDescriptorPrototype: NSSortDescriptor? { @objc get @objc (setSortDescriptorPrototype:) set }
	@objc var tableView: NSTableView? { @objc get @objc (setTableView:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }
	@objc var width: CGFloat { @objc get @objc (setWidth:) set }
	@objc (dataCellForRow:) func dataCell(forRow: Int) -> Any
	@objc func sizeToFit()
	@objc static func create(identifier: NSUserInterfaceItemIdentifier) -> NSTableColumn
}

extension NSTableColumn: NSTableColumnExports {
	@objc class func create(identifier: NSUserInterfaceItemIdentifier) -> NSTableColumn {
		return NSTableColumn(identifier: identifier)
	}

	@objc override class func create() -> NSTableColumn {
		return NSTableColumn()
	}
}
