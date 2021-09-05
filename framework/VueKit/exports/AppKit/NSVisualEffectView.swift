import AppKit
import JavaScriptCore

@objc protocol NSVisualEffectViewExports: JSExport {
	@objc var blendingMode: NSVisualEffectView.BlendingMode { @objc get @objc (setBlendingMode:) set }
	@objc @available(OSX 10.12, *) var isEmphasized: Bool { @objc get @objc (setEmphasized:) set }
	@objc var interiorBackgroundStyle: NSView.BackgroundStyle { @objc get }
	@objc var maskImage: NSImage? { @objc get @objc (setMaskImage:) set }
	@objc var material: NSVisualEffectView.Material { @objc get @objc (setMaterial:) set }
	@objc var state: NSVisualEffectView.State { @objc get @objc (setState:) set }
	@objc static func create() -> VisualEffectView
}

class VisualEffectView: NSVisualEffectView, NSVisualEffectViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> VisualEffectView {
		return VisualEffectView()
	}
}
