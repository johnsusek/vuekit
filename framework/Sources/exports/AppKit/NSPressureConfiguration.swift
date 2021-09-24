import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPressureConfigurationExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func set()

	// Own Instance Properties
	@objc var pressureBehavior: NSEvent.PressureBehavior { @objc get }

	// Constructors
	@objc static func create(pressureBehavior: NSEvent.PressureBehavior) -> NSPressureConfiguration
}

extension NSPressureConfiguration: NSPressureConfigurationExports {
	@objc class func create(pressureBehavior: NSEvent.PressureBehavior) -> NSPressureConfiguration {
		return NSPressureConfiguration(pressureBehavior: pressureBehavior)
	}

}
