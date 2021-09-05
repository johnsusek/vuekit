import AppKit
import JavaScriptCore

@objc protocol NSGridRowExports: JSExport {
	@objc var bottomPadding: CGFloat { @objc get @objc (setBottomPadding:) set }
	@objc var gridView: NSGridView? { @objc get }
	@objc var height: CGFloat { @objc get @objc (setHeight:) set }
	@objc var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var numberOfCells: Int { @objc get }
	@objc var rowAlignment: NSGridRow.Alignment { @objc get @objc (setRowAlignment:) set }
	@objc var topPadding: CGFloat { @objc get @objc (setTopPadding:) set }
	@objc var yPlacement: NSGridCell.Placement { @objc get @objc (setYPlacement:) set }
	@objc (cellAtIndex:) func cell(at: Int) -> NSGridCell
	@objc (mergeCellsInRange:) func mergeCells(in: NSRange)
}

extension NSGridRow: NSGridRowExports {
	@objc override class func create() -> NSGridRow {
		return NSGridRow()
	}
}
