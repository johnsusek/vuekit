import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSActionCellExports: JSExport, NSCellExports {
	// Static Methods

	// Constructors
	@objc static func create() -> NSActionCell
}

extension NSActionCell: NSActionCellExports {
	@objc override class func create() -> NSActionCell {
		return NSActionCell()
	}

}
