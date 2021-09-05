import AppKit
import JavaScriptCore

@objc protocol NSScrubberImageItemViewExports: JSExport {
	@objc var image: NSImage { @objc get @objc (setImage:) set }
	@objc var imageAlignment: NSImageAlignment { @objc get @objc (setImageAlignment:) set }
	@objc var imageView: NSImageView { @objc get }
	@objc static func create() -> ScrubberImageItemView
}

class ScrubberImageItemView: NSScrubberImageItemView, NSScrubberImageItemViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> ScrubberImageItemView {
		return ScrubberImageItemView()
	}
}
