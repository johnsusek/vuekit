import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSGridRowExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Instance Methods
	@objc (cellAtIndex:) func cell(at: Int) -> NSGridCell
	@objc (mergeCellsInRange:) func mergeCells(in: NSRange)

	// Own Instance Properties
	@objc var bottomPadding: CGFloat { get set }
	@objc var gridView: NSGridView? { @objc get }
	@objc var height: CGFloat { get set }
	@objc var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var numberOfCells: Int { @objc get }
	@objc var rowAlignment: NSGridRow.Alignment { @objc get @objc (setRowAlignment:) set }
	@objc var topPadding: CGFloat { get set }
	@objc var yPlacement: NSGridCell.Placement { @objc get @objc (setYPlacement:) set }

	// Constructors
}

extension NSGridRow: NSGridRowExports {
}
