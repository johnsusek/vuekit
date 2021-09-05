import AppKit
import JavaScriptCore

@objc protocol NSColorWellExports: JSExport {
	@objc var isActive: Bool { @objc get }
	@objc var isBordered: Bool { @objc get @objc (setBordered:) set }
	@objc var color: NSColor { @objc get @objc (setColor:) set }
	@objc func activate(_: Bool)
	@objc func deactivate()
	@objc (drawWellInside:) func drawWell(inside: NSRect)
	@objc func takeColorFrom(_: Any?)
	@objc static func create() -> ColorWell
}

class ColorWell: NSColorWell, NSColorWellExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> ColorWell {
		return ColorWell()
	}
}
