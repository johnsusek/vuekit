import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTableViewExports: JSExport, NSControlExports {
	// , NSAccessibilityTableExports, NSDraggingSourceExports, NSTextViewDelegateExports, NSUserInterfaceValidationsExports
	// Static Methods

	// Instance Methods
	@objc func addTableColumn(_: NSTableColumn)
	@objc @available(OSX 10.7, *) func beginUpdates()
	@objc (canDragRowsWithIndexes:atPoint:) func canDragRows(with: IndexSet, at: NSPoint) -> Bool
	@objc (columnAtPoint:) func column(at: NSPoint) -> Int
	@objc (columnForView:) @available(OSX 10.7, *) func column(`for`: NSView) -> Int
	@objc (columnIndexesInRect:) @available(OSX 10.5, *) func columnIndexes(in: NSRect) -> IndexSet
	@objc (columnWithIdentifier:) func column(withIdentifier: NSUserInterfaceItemIdentifier) -> Int
	@objc func deselectAll(_: Any?)
	@objc func deselectColumn(_: Int)
	@objc func deselectRow(_: Int)
	@objc (didAddRowView:forRow:) @available(OSX 10.7, *) func didAdd(_: NSTableRowView, forRow: Int)
	@objc (didRemoveRowView:forRow:) @available(OSX 10.7, *) func didRemove(_: NSTableRowView, forRow: Int)
	@objc (dragImageForRowsWithIndexes:tableColumns:event:offset:) func dragImageForRows(with: IndexSet, tableColumns: [NSTableColumn], event: NSEvent, offset: UnsafeMutablePointer<NSPoint>) -> NSImage
	@objc (drawBackgroundInClipRect:) func drawBackground(inClipRect: NSRect)
	@objc (drawGridInClipRect:) func drawGrid(inClipRect: NSRect)
	@objc func drawRow(_: Int, clipRect: NSRect)
	@objc (editColumn:row:withEvent:select:) func editColumn(_: Int, row: Int, with: NSEvent?, select: Bool)
	@objc @available(OSX 10.7, *) func endUpdates()
	// jsvalue - @objc (enumerateAvailableRowViewsUsingBlock:) @available(OSX 10.7, *) func enumerateAvailableRowViews(_: JSValue)
	@objc (frameOfCellAtColumn:row:) func frameOfCell(atColumn: Int, row: Int) -> NSRect
	@objc (hideRowsAtIndexes:withAnimation:) @available(OSX 10.11, *) func hideRows(at: IndexSet, withAnimation: NSTableView.AnimationOptions)
	@objc (highlightSelectionInClipRect:) func highlightSelection(inClipRect: NSRect)
	@objc (indicatorImageInTableColumn:) func indicatorImage(in: NSTableColumn) -> NSImage?
	@objc (insertRowsAtIndexes:withAnimation:) @available(OSX 10.7, *) func insertRows(at: IndexSet, withAnimation: NSTableView.AnimationOptions)
	@objc func isColumnSelected(_: Int) -> Bool
	@objc func isRowSelected(_: Int) -> Bool
	@objc (makeViewWithIdentifier:owner:) @available(OSX 10.7, *) func makeView(withIdentifier: NSUserInterfaceItemIdentifier, owner: Any?) -> NSView?
	@objc func moveColumn(_: Int, toColumn: Int)
	@objc (moveRowAtIndex:toIndex:) @available(OSX 10.7, *) func moveRow(at: Int, to: Int)
	@objc (noteHeightOfRowsWithIndexesChanged:) func noteHeightOfRows(withIndexesChanged: IndexSet)
	@objc func noteNumberOfRowsChanged()
	@objc (rectOfColumn:) func rect(ofColumn: Int) -> NSRect
	@objc (rectOfRow:) func rect(ofRow: Int) -> NSRect
	@objc (registerNib:forIdentifier:) @available(OSX 10.8, *) func register(_: NSNib?, forIdentifier: NSUserInterfaceItemIdentifier)
	@objc func reloadData()
	@objc (reloadDataForRowIndexes:columnIndexes:) @available(OSX 10.6, *) func reloadData(forRowIndexes: IndexSet, columnIndexes: IndexSet)
	@objc (removeRowsAtIndexes:withAnimation:) @available(OSX 10.7, *) func removeRows(at: IndexSet, withAnimation: NSTableView.AnimationOptions)
	@objc func removeTableColumn(_: NSTableColumn)
	@objc (rowAtPoint:) func row(at: NSPoint) -> Int
	@objc (rowForView:) @available(OSX 10.7, *) func row(`for`: NSView) -> Int
	@objc (rowViewAtRow:makeIfNecessary:) @available(OSX 10.7, *) func rowView(atRow: Int, makeIfNecessary: Bool) -> NSTableRowView?
	@objc (rowsInRect:) func rows(in: NSRect) -> NSRange
	@objc func scrollColumnToVisible(_: Int)
	@objc func scrollRowToVisible(_: Int)
	@objc func selectColumnIndexes(_: IndexSet, byExtendingSelection: Bool)
	@objc func selectRowIndexes(_: IndexSet, byExtendingSelection: Bool)
	@objc func setDraggingSourceOperationMask(_: NSDragOperation, forLocal: Bool)
	@objc func setDropRow(_: Int, dropOperation: NSTableView.DropOperation)
	@objc (setIndicatorImage:inTableColumn:) func setIndicatorImage(_: NSImage?, in: NSTableColumn)
	@objc func sizeLastColumnToFit()
	@objc (tableColumnWithIdentifier:) func tableColumn(withIdentifier: NSUserInterfaceItemIdentifier) -> NSTableColumn?
	@objc func tile()
	@objc (unhideRowsAtIndexes:withAnimation:) @available(OSX 10.11, *) func unhideRows(at: IndexSet, withAnimation: NSTableView.AnimationOptions)
	@objc (viewAtColumn:row:makeIfNecessary:) @available(OSX 10.7, *) func view(atColumn: Int, row: Int, makeIfNecessary: Bool) -> NSView?

	// Own Instance Properties
	@objc var allowsColumnReordering: Bool { @objc get @objc (setAllowsColumnReordering:) set }
	@objc var allowsColumnResizing: Bool { @objc get @objc (setAllowsColumnResizing:) set }
	@objc var allowsColumnSelection: Bool { @objc get @objc (setAllowsColumnSelection:) set }
	@objc var allowsEmptySelection: Bool { @objc get @objc (setAllowsEmptySelection:) set }
	@objc var allowsMultipleSelection: Bool { @objc get @objc (setAllowsMultipleSelection:) set }
	@objc @available(OSX 10.5, *) var allowsTypeSelect: Bool { @objc get @objc (setAllowsTypeSelect:) set }
	@objc var autosaveName: NSTableView.AutosaveName? { @objc get @objc (setAutosaveName:) set }
	@objc var autosaveTableColumns: Bool { @objc get @objc (setAutosaveTableColumns:) set }
	@objc var backgroundColor: NSColor { @objc get @objc (setBackgroundColor:) set }
	@objc var clickedColumn: Int { @objc get }
	@objc var clickedRow: Int { @objc get }
	@objc var columnAutoresizingStyle: NSTableView.ColumnAutoresizingStyle { @objc get @objc (setColumnAutoresizingStyle:) set }
	@objc var cornerView: NSView? { @objc get @objc (setCornerView:) set }
	@objc var dataSource: NSTableViewDataSource? { @objc get @objc (setDataSource:) set }
	@objc var delegate: NSTableViewDelegate? { @objc get @objc (setDelegate:) set }
	@objc var doubleAction: Selector? { @objc get @objc (setDoubleAction:) set }
	@objc @available(OSX 10.6, *) var draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle { @objc get @objc (setDraggingDestinationFeedbackStyle:) set }
	@objc var editedColumn: Int { @objc get }
	@objc var editedRow: Int { @objc get }
	@objc @available(OSX 10.7, *) var effectiveRowSizeStyle: NSTableView.RowSizeStyle { @objc get }
	@objc @available(OSX 10.7, *) var floatsGroupRows: Bool { @objc get @objc (setFloatsGroupRows:) set }
	@objc var gridColor: NSColor { @objc get @objc (setGridColor:) set }
	@objc var gridStyleMask: NSTableView.GridLineStyle { @objc get @objc (setGridStyleMask:) set }
	@objc var headerView: NSTableHeaderView? { @objc get @objc (setHeaderView:) set }
	@objc @available(OSX 10.11, *) var hiddenRowIndexes: IndexSet { @objc get }
	@objc var highlightedTableColumn: NSTableColumn? { @objc get @objc (setHighlightedTableColumn:) set }
	@objc var intercellSpacing: NSSize { @objc get @objc (setIntercellSpacing:) set }
	@objc var numberOfColumns: Int { @objc get }
	@objc var numberOfRows: Int { @objc get }
	@objc var numberOfSelectedColumns: Int { @objc get }
	@objc var numberOfSelectedRows: Int { @objc get }
	@objc @available(OSX 10.8, *) var registeredNibsByIdentifier: [NSUserInterfaceItemIdentifier : NSNib]? { get }
	@objc @available(OSX 10.11, *) var rowActionsVisible: Bool { @objc get @objc (setRowActionsVisible:) set }
	@objc var rowHeight: CGFloat { get set }
	@objc @available(OSX 10.7, *) var rowSizeStyle: NSTableView.RowSizeStyle { @objc get @objc (setRowSizeStyle:) set }
	@objc var selectedColumn: Int { @objc get }
	@objc var selectedColumnIndexes: IndexSet { @objc get }
	@objc var selectedRow: Int { @objc get }
	@objc var selectedRowIndexes: IndexSet { @objc get }
	@objc @available(OSX 10.5, *) var selectionHighlightStyle: NSTableView.SelectionHighlightStyle { @objc get @objc (setSelectionHighlightStyle:) set }
	@objc var sortDescriptors: [NSSortDescriptor] { @objc get @objc (setSortDescriptors:) set }
	@objc var tableColumns: [NSTableColumn] { @objc get }
	@objc var usesAlternatingRowBackgroundColors: Bool { @objc get @objc (setUsesAlternatingRowBackgroundColors:) set }
	@objc @available(OSX 10.13, *) var usesAutomaticRowHeights: Bool { @objc get @objc (setUsesAutomaticRowHeights:) set }
	@objc @available(OSX 10.10, *) var usesStaticContents: Bool { @objc get @objc (setUsesStaticContents:) set }
	@objc var verticalMotionCanBeginDrag: Bool { @objc get @objc (setVerticalMotionCanBeginDrag:) set }
}

@objc protocol TableViewExports: JSExport, NSControlExports {
	// Constructors
	@objc static func create() -> TableView
}

class TableView: NSTableView, TableViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> TableView {
		return TableView()
	}

}

extension NSTableView: NSTableViewExports {}
