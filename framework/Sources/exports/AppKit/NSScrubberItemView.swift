import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrubberItemViewExports: JSExport, NSScrubberArrangedViewExports {
	// Static Methods
}

@objc protocol ScrubberItemViewExports: JSExport, NSScrubberArrangedViewExports {
	// Constructors
	@objc static func create() -> ScrubberItemView
}

class ScrubberItemView: NSScrubberItemView, ScrubberItemViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ScrubberItemView {
		return ScrubberItemView()
	}

}

extension NSScrubberItemView: NSScrubberItemViewExports {}
