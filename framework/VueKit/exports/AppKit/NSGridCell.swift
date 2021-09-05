import AppKit
import JavaScriptCore

@objc protocol NSGridCellExports: JSExport {
	@objc var column: NSGridColumn? { @objc get }
	@objc var contentView: NSView? { @objc get @objc (setContentView:) set }
	@objc var customPlacementConstraints: [NSLayoutConstraint] { @objc get @objc (setCustomPlacementConstraints:) set }
	@objc var row: NSGridRow? { @objc get }
	@objc var rowAlignment: NSGridRow.Alignment { @objc get @objc (setRowAlignment:) set }
	@objc var xPlacement: NSGridCell.Placement { @objc get @objc (setXPlacement:) set }
	@objc var yPlacement: NSGridCell.Placement { @objc get @objc (setYPlacement:) set }
	@objc static var emptyContentView: NSView { @objc get }
}

extension NSGridCell: NSGridCellExports {
	@objc override class func create() -> NSGridCell {
		return NSGridCell()
	}
}
