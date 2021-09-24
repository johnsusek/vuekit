import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSStepperExports: JSExport, NSControlExports {
	// , NSAccessibilityStepperExports
	// Static Methods

	// Own Instance Properties
	@objc var autorepeat: Bool { @objc get @objc (setAutorepeat:) set }
	@objc var increment: Double { @objc get @objc (setIncrement:) set }
	@objc var maxValue: Double { @objc get @objc (setMaxValue:) set }
	@objc var minValue: Double { @objc get @objc (setMinValue:) set }
	@objc var valueWraps: Bool { @objc get @objc (setValueWraps:) set }
}

@objc protocol StepperExports: JSExport, NSControlExports {
	// Constructors
	@objc static func create() -> Stepper
}

class Stepper: NSStepper, StepperExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> Stepper {
		return Stepper()
	}

}

extension NSStepper: NSStepperExports {}
