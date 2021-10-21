import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrubberTextItemViewExports: JSExport, NSScrubberItemViewExports {
	// Static Methods

	// Own Instance Properties
	@objc var textField: NSTextField { @objc get }
	@objc var title: String { @objc get @objc (setTitle:) set }
}

@objc protocol ScrubberTextItemViewExports: JSExport, NSScrubberItemViewExports {
	// Constructors
	@objc static func create() -> ScrubberTextItemView
}

class ScrubberTextItemView: NSScrubberTextItemView, ScrubberTextItemViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ScrubberTextItemView {
		return ScrubberTextItemView()
	}

}

extension NSScrubberTextItemView: NSScrubberTextItemViewExports {}
