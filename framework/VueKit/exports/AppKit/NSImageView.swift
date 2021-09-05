import AppKit
import JavaScriptCore

@objc protocol NSImageViewExports: JSExport {
	@objc var allowsCutCopyPaste: Bool { @objc get @objc (setAllowsCutCopyPaste:) set }
	@objc var animates: Bool { @objc get @objc (setAnimates:) set }
	@objc @available(OSX 10.14, *) var contentTintColor: NSColor? { @objc get @objc (setContentTintColor:) set }
	@objc var isEditable: Bool { @objc get @objc (setEditable:) set }
	@objc var image: NSImage? { @objc get @objc (setImage:) set }
	@objc var imageAlignment: NSImageAlignment { @objc get @objc (setImageAlignment:) set }
	@objc var imageFrameStyle: NSImageView.FrameStyle { @objc get @objc (setImageFrameStyle:) set }
	@objc var imageScaling: NSImageScaling { @objc get @objc (setImageScaling:) set }
	@objc @available(OSX 10.12, *) static func create(image: NSImage) -> ImageView
	@objc static func create() -> ImageView
}

class ImageView: NSImageView, NSImageViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc @available(OSX 10.12, *) class func create(image: NSImage) -> ImageView {
		return ImageView(image: image)
	}

	@objc override class func create() -> ImageView {
		return ImageView()
	}
}
