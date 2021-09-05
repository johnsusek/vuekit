import AppKit
import JavaScriptCore

@objc protocol NSTextTableExports: JSExport {
	@objc var collapsesBorders: Bool { @objc get @objc (setCollapsesBorders:) set }
	@objc var hidesEmptyCells: Bool { @objc get @objc (setHidesEmptyCells:) set }
	@objc var layoutAlgorithm: NSTextTable.LayoutAlgorithm { @objc get @objc (setLayoutAlgorithm:) set }
	@objc var numberOfColumns: Int { @objc get @objc (setNumberOfColumns:) set }
	@objc (boundsRectForBlock:contentRect:inRect:textContainer:characterRange:) func boundsRect(`for`: NSTextTableBlock, contentRect: NSRect, in: NSRect, textContainer: NSTextContainer, characterRange: NSRange) -> NSRect
	@objc (drawBackgroundForBlock:withFrame:inView:characterRange:layoutManager:) func drawBackground(`for`: NSTextTableBlock, withFrame: NSRect, in: NSView, characterRange: NSRange, layoutManager: NSLayoutManager)
	@objc (rectForBlock:layoutAtPoint:inRect:textContainer:characterRange:) func rect(`for`: NSTextTableBlock, layoutAt: NSPoint, in: NSRect, textContainer: NSTextContainer, characterRange: NSRange) -> NSRect
}

extension NSTextTable: NSTextTableExports {
	@objc override class func create() -> NSTextTable {
		return NSTextTable()
	}
}
