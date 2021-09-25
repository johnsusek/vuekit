import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSImageCellExports: JSExport, NSCellExports {
	// , NSCodingExports, NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var imageAlignment: NSImageAlignment { @objc get @objc (setImageAlignment:) set }
	@objc var imageFrameStyle: NSImageView.FrameStyle { @objc get @objc (setImageFrameStyle:) set }
	@objc var imageScaling: NSImageScaling { @objc get @objc (setImageScaling:) set }

	// Constructors
	@objc static func create() -> NSImageCell
}

extension NSImageCell: NSImageCellExports {
	@objc override class func create() -> NSImageCell {
		return NSImageCell()
	}

}
