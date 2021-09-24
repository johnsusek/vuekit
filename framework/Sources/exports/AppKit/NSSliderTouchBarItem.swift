import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSliderTouchBarItemExports: JSExport, NSTouchBarItemExports {
	// Static Methods

	// Own Instance Properties
	@objc var action: Selector? { @objc get @objc (setAction:) set }
	@objc var customizationLabel: String! { @objc get @objc (setCustomizationLabel:) set }
	@objc var doubleValue: Double { @objc get @objc (setDoubleValue:) set }
	@objc var label: String? { @objc get @objc (setLabel:) set }
	@objc @available(OSX 10.15, *) var maximumSliderWidth: CGFloat { get set }
	@objc var maximumValueAccessory: NSSliderAccessory? { @objc get @objc (setMaximumValueAccessory:) set }
	@objc @available(OSX 10.15, *) var minimumSliderWidth: CGFloat { get set }
	@objc var minimumValueAccessory: NSSliderAccessory? { @objc get @objc (setMinimumValueAccessory:) set }
	@objc var slider: NSSlider { @objc get @objc (setSlider:) set }
	@objc var target: AnyObject? { @objc get @objc (setTarget:) set }
	@objc var valueAccessoryWidth: NSSliderAccessory.Width { @objc get @objc (setValueAccessoryWidth:) set }
	@objc var view: NSView & NSUserInterfaceCompression { get }

	// Constructors
}

extension NSSliderTouchBarItem: NSSliderTouchBarItemExports {
}
