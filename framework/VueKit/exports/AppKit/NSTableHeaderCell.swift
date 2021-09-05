import AppKit
import JavaScriptCore

@objc protocol NSTableHeaderCellExports: JSExport {
	@objc (drawSortIndicatorWithFrame:inView:ascending:priority:) func drawSortIndicator(withFrame: NSRect, in: NSView, ascending: Bool, priority: Int)
	@objc (sortIndicatorRectForBounds:) func sortIndicatorRect(forBounds: NSRect) -> NSRect
}

extension NSTableHeaderCell: NSTableHeaderCellExports {
	@objc override class func create() -> NSTableHeaderCell {
		return NSTableHeaderCell()
	}
}
