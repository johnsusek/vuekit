import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSColorWellExports: JSExport, NSControlExports {
	// Static Methods

	// Instance Methods
	@objc func activate(_: Bool)
	@objc func deactivate()
	@objc (drawWellInside:) func drawWell(inside: NSRect)
	@objc func takeColorFrom(_: Any?)

	// Own Instance Properties
	@objc var isActive: Bool { @objc get }
	@objc var isBordered: Bool { @objc get @objc (setBordered:) set }
	@objc var color: NSColor { @objc get @objc (setColor:) set }
}

@objc protocol ColorWellExports: JSExport, NSControlExports {
	// Constructors
	@objc static func create() -> ColorWell
}

class ColorWell: NSColorWell, ColorWellExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ColorWell {
		return ColorWell()
	}

}

extension NSColorWell: NSColorWellExports {}
