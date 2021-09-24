import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrubberSelectionViewExports: JSExport, NSScrubberArrangedViewExports {
	// Static Methods
}

@objc protocol ScrubberSelectionViewExports: JSExport, NSScrubberArrangedViewExports {
	// Constructors
	@objc static func create() -> ScrubberSelectionView
}

class ScrubberSelectionView: NSScrubberSelectionView, ScrubberSelectionViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ScrubberSelectionView {
		return ScrubberSelectionView()
	}

}

extension NSScrubberSelectionView: NSScrubberSelectionViewExports {}
