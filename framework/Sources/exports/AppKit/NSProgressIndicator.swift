import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSProgressIndicatorExports: JSExport, NSViewExports {
	// , NSAccessibilityProgressIndicatorExports
	// Static Methods

	// Instance Methods
	@objc (incrementBy:) func increment(by: Double)
	@objc func sizeToFit()
	@objc func startAnimation(_: Any?)
	@objc func stopAnimation(_: Any?)

	// Own Instance Properties
	@objc var isBezeled: Bool { @objc get @objc (setBezeled:) set }
	@objc var controlSize: NSControl.ControlSize { @objc get @objc (setControlSize:) set }
	@objc var controlTint: NSControlTint { @objc get @objc (setControlTint:) set }
	@objc var isDisplayedWhenStopped: Bool { @objc get @objc (setDisplayedWhenStopped:) set }
	@objc var doubleValue: Double { @objc get @objc (setDoubleValue:) set }
	@objc var isIndeterminate: Bool { @objc get @objc (setIndeterminate:) set }
	@objc var maxValue: Double { @objc get @objc (setMaxValue:) set }
	@objc var minValue: Double { @objc get @objc (setMinValue:) set }
	@objc var style: NSProgressIndicator.Style { @objc get @objc (setStyle:) set }
	@objc var usesThreadedAnimation: Bool { @objc get @objc (setUsesThreadedAnimation:) set }
}

@objc protocol ProgressIndicatorExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> ProgressIndicator
}

class ProgressIndicator: NSProgressIndicator, ProgressIndicatorExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ProgressIndicator {
		return ProgressIndicator()
	}

}

extension NSProgressIndicator: NSProgressIndicatorExports {}
