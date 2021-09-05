import AppKit
import JavaScriptCore

@objc protocol NSGridColumnExports: JSExport {
	@objc var gridView: NSGridView? { @objc get }
	@objc var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var leadingPadding: CGFloat { @objc get @objc (setLeadingPadding:) set }
	@objc var numberOfCells: Int { @objc get }
	@objc var trailingPadding: CGFloat { @objc get @objc (setTrailingPadding:) set }
	@objc var width: CGFloat { @objc get @objc (setWidth:) set }
	@objc var xPlacement: NSGridCell.Placement { @objc get @objc (setXPlacement:) set }
	@objc (cellAtIndex:) func cell(at: Int) -> NSGridCell
	@objc (mergeCellsInRange:) func mergeCells(in: NSRange)
}

extension NSGridColumn: NSGridColumnExports {
	@objc override class func create() -> NSGridColumn {
		return NSGridColumn()
	}
}
