import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextTableBlockExports: JSExport, NSTextBlockExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var columnSpan: Int { @objc get }
	@objc var rowSpan: Int { @objc get }
	@objc var startingColumn: Int { @objc get }
	@objc var startingRow: Int { @objc get }
	@objc var table: NSTextTable { @objc get }

	// Constructors
	@objc static func create() -> NSTextTableBlock
	@objc static func create(table: NSTextTable, startingRow: Int, rowSpan: Int, startingColumn: Int, columnSpan: Int) -> NSTextTableBlock
}

extension NSTextTableBlock: NSTextTableBlockExports {
	@objc override class func create() -> NSTextTableBlock {
		return NSTextTableBlock()
	}

	@objc class func create(table: NSTextTable, startingRow: Int, rowSpan: Int, startingColumn: Int, columnSpan: Int) -> NSTextTableBlock {
		return NSTextTableBlock(table: table, startingRow: startingRow, rowSpan: rowSpan, startingColumn: startingColumn, columnSpan: columnSpan)
	}

}
