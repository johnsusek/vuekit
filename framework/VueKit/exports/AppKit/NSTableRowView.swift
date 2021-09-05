import AppKit
import JavaScriptCore

@objc protocol NSTableRowViewExports: JSExport {
	@objc var backgroundColor: NSColor { @objc get @objc (setBackgroundColor:) set }
	@objc var draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle { @objc get @objc (setDraggingDestinationFeedbackStyle:) set }
	@objc var isEmphasized: Bool { @objc get @objc (setEmphasized:) set }
	@objc var isFloating: Bool { @objc get @objc (setFloating:) set }
	@objc var isGroupRowStyle: Bool { @objc get @objc (setGroupRowStyle:) set }
	@objc var indentationForDropOperation: CGFloat { @objc get @objc (setIndentationForDropOperation:) set }
	@objc var interiorBackgroundStyle: NSView.BackgroundStyle { @objc get }
	@objc var isNextRowSelected: Bool { @objc get @objc (setNextRowSelected:) set }
	@objc var numberOfColumns: Int { @objc get }
	@objc @available(OSX 10.10, *) var isPreviousRowSelected: Bool { @objc get @objc (setPreviousRowSelected:) set }
	@objc var isSelected: Bool { @objc get @objc (setSelected:) set }
	@objc var selectionHighlightStyle: NSTableView.SelectionHighlightStyle { @objc get @objc (setSelectionHighlightStyle:) set }
	@objc var isTargetForDropOperation: Bool { @objc get @objc (setTargetForDropOperation:) set }
	@objc (drawBackgroundInRect:) func drawBackground(in: NSRect)
	@objc (drawDraggingDestinationFeedbackInRect:) func drawDraggingDestinationFeedback(in: NSRect)
	@objc (drawSelectionInRect:) func drawSelection(in: NSRect)
	@objc (drawSeparatorInRect:) func drawSeparator(in: NSRect)
	@objc (viewAtColumn:) func view(atColumn: Int) -> Any?
	@objc static func create() -> TableRowView
}

class TableRowView: NSTableRowView, NSTableRowViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> TableRowView {
		return TableRowView()
	}
}
