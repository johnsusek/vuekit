import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTableRowViewExports: JSExport, NSViewExports {
	// , NSAccessibilityRowExports
	// Static Methods

	// Instance Methods
	@objc (drawBackgroundInRect:) func drawBackground(in: NSRect)
	@objc (drawDraggingDestinationFeedbackInRect:) func drawDraggingDestinationFeedback(in: NSRect)
	@objc (drawSelectionInRect:) func drawSelection(in: NSRect)
	@objc (drawSeparatorInRect:) func drawSeparator(in: NSRect)
	@objc (viewAtColumn:) func view(atColumn: Int) -> Any?

	// Own Instance Properties
	@objc var backgroundColor: NSColor { @objc get @objc (setBackgroundColor:) set }
	@objc var draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle { @objc get @objc (setDraggingDestinationFeedbackStyle:) set }
	@objc var isEmphasized: Bool { @objc get @objc (setEmphasized:) set }
	@objc var isFloating: Bool { @objc get @objc (setFloating:) set }
	@objc var isGroupRowStyle: Bool { @objc get @objc (setGroupRowStyle:) set }
	@objc var indentationForDropOperation: CGFloat { get set }
	@objc var interiorBackgroundStyle: NSView.BackgroundStyle { @objc get }
	@objc var isNextRowSelected: Bool { @objc get @objc (setNextRowSelected:) set }
	@objc var numberOfColumns: Int { @objc get }
	@objc @available(OSX 10.10, *) var isPreviousRowSelected: Bool { @objc get @objc (setPreviousRowSelected:) set }
	@objc var isSelected: Bool { @objc get @objc (setSelected:) set }
	@objc var selectionHighlightStyle: NSTableView.SelectionHighlightStyle { @objc get @objc (setSelectionHighlightStyle:) set }
	@objc var isTargetForDropOperation: Bool { @objc get @objc (setTargetForDropOperation:) set }
}

@objc protocol TableRowViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> TableRowView
}

class TableRowView: NSTableRowView, TableRowViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> TableRowView {
		return TableRowView()
	}

}

extension NSTableRowView: NSTableRowViewExports {}
