import AppKit
import JavaScriptCore

@objc protocol NSScrubberSelectionViewExports: JSExport {
	@objc static func create() -> ScrubberSelectionView
}

class ScrubberSelectionView: NSScrubberSelectionView, NSScrubberSelectionViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> ScrubberSelectionView {
		return ScrubberSelectionView()
	}
}
