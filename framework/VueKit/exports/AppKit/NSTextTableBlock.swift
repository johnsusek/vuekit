import AppKit
import JavaScriptCore

@objc protocol NSTextTableBlockExports: JSExport {
	@objc var columnSpan: Int { @objc get }
	@objc var rowSpan: Int { @objc get }
	@objc var startingColumn: Int { @objc get }
	@objc var startingRow: Int { @objc get }
	@objc var table: NSTextTable { @objc get }
	@objc static func create(table: NSTextTable, startingRow: Int, rowSpan: Int, startingColumn: Int, columnSpan: Int) -> NSTextTableBlock
}

extension NSTextTableBlock: NSTextTableBlockExports {
	@objc class func create(table: NSTextTable, startingRow: Int, rowSpan: Int, startingColumn: Int, columnSpan: Int) -> NSTextTableBlock {
		return NSTextTableBlock(table: table, startingRow: startingRow, rowSpan: rowSpan, startingColumn: startingColumn, columnSpan: columnSpan)
	}

	@objc override class func create() -> NSTextTableBlock {
		return NSTextTableBlock()
	}
}
