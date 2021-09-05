import AppKit
import JavaScriptCore

@objc protocol NSSwitchExports: JSExport {
	@objc var state: NSControl.StateValue { @objc get @objc (setState:) set }
	@objc static func create() -> Switch
}

class Switch: NSSwitch, NSSwitchExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> Switch {
		return Switch()
	}
}
