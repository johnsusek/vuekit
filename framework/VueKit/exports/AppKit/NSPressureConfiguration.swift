import AppKit
import JavaScriptCore

@objc protocol NSPressureConfigurationExports: JSExport {
	@objc var pressureBehavior: NSEvent.PressureBehavior { @objc get }
	@objc func set()
	@objc static func create(pressureBehavior: NSEvent.PressureBehavior) -> NSPressureConfiguration
}

extension NSPressureConfiguration: NSPressureConfigurationExports {
	@objc class func create(pressureBehavior: NSEvent.PressureBehavior) -> NSPressureConfiguration {
		return NSPressureConfiguration(pressureBehavior: pressureBehavior)
	}

	@objc override class func create() -> NSPressureConfiguration {
		return NSPressureConfiguration()
	}
}
