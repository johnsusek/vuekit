import AppKit
import JavaScriptCore

@objc protocol NSStepperExports: JSExport {
	@objc var autorepeat: Bool { @objc get @objc (setAutorepeat:) set }
	@objc var increment: Double { @objc get @objc (setIncrement:) set }
	@objc var maxValue: Double { @objc get @objc (setMaxValue:) set }
	@objc var minValue: Double { @objc get @objc (setMinValue:) set }
	@objc var valueWraps: Bool { @objc get @objc (setValueWraps:) set }
	@objc static func create() -> Stepper
}

class Stepper: NSStepper, NSStepperExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> Stepper {
		return Stepper()
	}
}
