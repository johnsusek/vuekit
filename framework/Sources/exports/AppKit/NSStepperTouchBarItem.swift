import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSStepperTouchBarItemExports: JSExport, NSTouchBarItemExports {
	// Static Methods

	// Own Instance Properties
	@objc var action: Selector? { @objc get @objc (setAction:) set }
	@objc var customizationLabel: String! { @objc get @objc (setCustomizationLabel:) set }
	@objc var increment: Double { @objc get @objc (setIncrement:) set }
	@objc var maxValue: Double { @objc get @objc (setMaxValue:) set }
	@objc var minValue: Double { @objc get @objc (setMinValue:) set }
	@objc var target: AnyObject? { @objc get @objc (setTarget:) set }
	@objc var value: Double { @objc get @objc (setValue:) set }

	// Constructors
}

extension NSStepperTouchBarItem: NSStepperTouchBarItemExports {
}
