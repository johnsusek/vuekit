import AppKit
import JavaScriptCore

@objc protocol NSScrubberItemViewExports: JSExport {
	@objc static func create() -> ScrubberItemView
}

class ScrubberItemView: NSScrubberItemView, NSScrubberItemViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> ScrubberItemView {
		return ScrubberItemView()
	}
}
