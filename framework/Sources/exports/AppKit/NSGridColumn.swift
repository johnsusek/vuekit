import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSGridColumnExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Instance Methods
	@objc (cellAtIndex:) func cell(at: Int) -> NSGridCell
	@objc (mergeCellsInRange:) func mergeCells(in: NSRange)

	// Own Instance Properties
	@objc var gridView: NSGridView? { @objc get }
	@objc var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var leadingPadding: CGFloat { get set }
	@objc var numberOfCells: Int { @objc get }
	@objc var trailingPadding: CGFloat { get set }
	@objc var width: CGFloat { get set }
	@objc var xPlacement: NSGridCell.Placement { @objc get @objc (setXPlacement:) set }

	// Constructors
}

extension NSGridColumn: NSGridColumnExports {
}
