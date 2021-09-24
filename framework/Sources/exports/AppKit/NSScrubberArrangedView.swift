import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrubberArrangedViewExports: JSExport, NSViewExports {
	// Static Methods

	// Instance Methods
	@objc (applyLayoutAttributes:) func apply(_: NSScrubberLayoutAttributes)

	// Own Instance Properties
	@objc var isHighlighted: Bool { @objc get @objc (setHighlighted:) set }
	@objc var isSelected: Bool { @objc get @objc (setSelected:) set }
}

@objc protocol ScrubberArrangedViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> ScrubberArrangedView
}

class ScrubberArrangedView: NSScrubberArrangedView, ScrubberArrangedViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ScrubberArrangedView {
		return ScrubberArrangedView()
	}

}

extension NSScrubberArrangedView: NSScrubberArrangedViewExports {}
