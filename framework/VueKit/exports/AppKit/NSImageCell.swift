import AppKit
import JavaScriptCore

@objc protocol NSImageCellExports: JSExport {
	@objc var imageAlignment: NSImageAlignment { @objc get @objc (setImageAlignment:) set }
	@objc var imageFrameStyle: NSImageView.FrameStyle { @objc get @objc (setImageFrameStyle:) set }
	@objc var imageScaling: NSImageScaling { @objc get @objc (setImageScaling:) set }
}

extension NSImageCell: NSImageCellExports {
	@objc override class func create() -> NSImageCell {
		return NSImageCell()
	}
}
