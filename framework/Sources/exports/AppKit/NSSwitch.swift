import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSwitchExports: JSExport, NSControlExports {
	// , NSAccessibilitySwitchExports
	// Static Methods

	// Own Instance Properties
	@objc var state: NSControl.StateValue { @objc get @objc (setState:) set }
}

@objc protocol SwitchExports: JSExport, NSControlExports {
	// Constructors
	@objc static func create() -> Switch
}

class Switch: NSSwitch, SwitchExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> Switch {
		return Switch()
	}

}

extension NSSwitch: NSSwitchExports {}
