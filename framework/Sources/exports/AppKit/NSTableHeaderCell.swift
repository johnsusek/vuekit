import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTableHeaderCellExports: JSExport, NSTextFieldCellExports {
	// Static Methods

	// Instance Methods
	@objc (drawSortIndicatorWithFrame:inView:ascending:priority:) func drawSortIndicator(withFrame: NSRect, in: NSView, ascending: Bool, priority: Int)
	@objc (sortIndicatorRectForBounds:) func sortIndicatorRect(forBounds: NSRect) -> NSRect

	// Constructors
	@objc static func create() -> NSTableHeaderCell
}

extension NSTableHeaderCell: NSTableHeaderCellExports {
	@objc override class func create() -> NSTableHeaderCell {
		return NSTableHeaderCell()
	}

}
