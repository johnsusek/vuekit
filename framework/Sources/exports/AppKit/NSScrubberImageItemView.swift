import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrubberImageItemViewExports: JSExport, NSScrubberItemViewExports {
	// Static Methods

	// Own Instance Properties
	@objc var image: NSImage { @objc get @objc (setImage:) set }
	@objc var imageAlignment: NSImageAlignment { @objc get @objc (setImageAlignment:) set }
	@objc var imageView: NSImageView { @objc get }
}

@objc protocol ScrubberImageItemViewExports: JSExport, NSScrubberItemViewExports {
	// Constructors
	@objc static func create() -> ScrubberImageItemView
}

class ScrubberImageItemView: NSScrubberImageItemView, ScrubberImageItemViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ScrubberImageItemView {
		return ScrubberImageItemView()
	}

}

extension NSScrubberImageItemView: NSScrubberImageItemViewExports {}
