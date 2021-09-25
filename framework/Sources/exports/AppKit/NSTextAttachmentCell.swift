import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextAttachmentCellExports: JSExport, NSCellExports {
	// , 
	// Static Methods

	// Constructors
	@objc static func create() -> NSTextAttachmentCell
}

extension NSTextAttachmentCell: NSTextAttachmentCellExports {
	@objc override class func create() -> NSTextAttachmentCell {
		return NSTextAttachmentCell()
	}

}
