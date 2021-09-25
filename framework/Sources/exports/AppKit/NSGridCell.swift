import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSGridCellExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var emptyContentView: NSView { @objc get }

	// Own Instance Properties
	@objc var column: NSGridColumn? { @objc get }
	@objc var contentView: NSView? { @objc get @objc (setContentView:) set }
	@objc var customPlacementConstraints: [NSLayoutConstraint] { @objc get @objc (setCustomPlacementConstraints:) set }
	@objc var row: NSGridRow? { @objc get }
	@objc var rowAlignment: NSGridRow.Alignment { @objc get @objc (setRowAlignment:) set }
	@objc var xPlacement: NSGridCell.Placement { @objc get @objc (setXPlacement:) set }
	@objc var yPlacement: NSGridCell.Placement { @objc get @objc (setYPlacement:) set }

	// Constructors
	@objc static func create() -> NSGridCell
}

extension NSGridCell: NSGridCellExports {
	@objc class func create() -> NSGridCell {
		return NSGridCell()
	}

}
