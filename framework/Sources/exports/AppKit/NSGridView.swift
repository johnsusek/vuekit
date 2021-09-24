import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSGridViewExports: JSExport, NSViewExports {
	// Static Methods

	// Instance Methods
	@objc (addColumnWithViews:) func addColumn(with: [NSView]) -> NSGridColumn
	@objc (addRowWithViews:) func addRow(with: [NSView]) -> NSGridRow
	@objc (cellAtColumnIndex:rowIndex:) func cell(atColumnIndex: Int, rowIndex: Int) -> NSGridCell
	@objc (cellForView:) func cell(`for`: NSView) -> NSGridCell?
	@objc (columnAtIndex:) func column(at: Int) -> NSGridColumn
	@objc (indexOfColumn:) func index(of: NSGridColumn) -> Int
	@objc (indexOfRow:) func index(of: NSGridRow) -> Int
	@objc (insertColumnAtIndex:withViews:) func insertColumn(at: Int, with: [NSView]) -> NSGridColumn
	@objc (insertRowAtIndex:withViews:) func insertRow(at: Int, with: [NSView]) -> NSGridRow
	@objc (mergeCellsInHorizontalRange:verticalRange:) func mergeCells(inHorizontalRange: NSRange, verticalRange: NSRange)
	@objc (moveColumnAtIndex:toIndex:) func moveColumn(at: Int, to: Int)
	@objc (moveRowAtIndex:toIndex:) func moveRow(at: Int, to: Int)
	@objc (removeColumnAtIndex:) func removeColumn(at: Int)
	@objc (removeRowAtIndex:) func removeRow(at: Int)
	@objc (rowAtIndex:) func row(at: Int) -> NSGridRow

	// Own Instance Properties
	@objc var columnSpacing: CGFloat { get set }
	@objc var numberOfColumns: Int { @objc get }
	@objc var numberOfRows: Int { @objc get }
	@objc var rowAlignment: NSGridRow.Alignment { @objc get @objc (setRowAlignment:) set }
	@objc var rowSpacing: CGFloat { get set }
	@objc var xPlacement: NSGridCell.Placement { @objc get @objc (setXPlacement:) set }
	@objc var yPlacement: NSGridCell.Placement { @objc get @objc (setYPlacement:) set }
}

@objc protocol GridViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> GridView
}

class GridView: NSGridView, GridViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> GridView {
		return GridView()
	}

}

extension NSGridView: NSGridViewExports {}
