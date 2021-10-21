import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSImageViewExports: JSExport, NSControlExports {
	// , NSAccessibilityImageExports, NSMenuItemValidationExports
	// Static Methods

	// Own Instance Properties
	@objc var allowsCutCopyPaste: Bool { @objc get @objc (setAllowsCutCopyPaste:) set }
	@objc var animates: Bool { @objc get @objc (setAnimates:) set }
	@objc @available(OSX 10.14, *) var contentTintColor: NSColor? { @objc get @objc (setContentTintColor:) set }
	@objc var isEditable: Bool { @objc get @objc (setEditable:) set }
	@objc var image: NSImage? { @objc get @objc (setImage:) set }
	@objc var imageAlignment: NSImageAlignment { @objc get @objc (setImageAlignment:) set }
	@objc var imageFrameStyle: NSImageView.FrameStyle { @objc get @objc (setImageFrameStyle:) set }
	@objc var imageScaling: NSImageScaling { @objc get @objc (setImageScaling:) set }
}

@objc protocol ImageViewExports: JSExport, NSControlExports {
	// Constructors
	@objc static func create() -> ImageView
}

class ImageView: NSImageView, ImageViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ImageView {
		return ImageView()
	}

}

extension NSImageView: NSImageViewExports {}
