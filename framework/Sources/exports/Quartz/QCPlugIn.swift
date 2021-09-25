import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol QCPlugInExports: JSExport {
	// Static Methods
	@objc static func attributes() -> [AnyHashable: Any]
	@objc (attributesForPropertyPortWithKey:) static func attributesForPropertyPort(withKey: String) -> [AnyHashable: Any]
	@objc static func executionMode() -> QCPlugInExecutionMode
	@objc static func plugInKeys() -> [Any]
	@objc (registerPlugInClass:) static func registerClass(_: AnyClass)
	@objc static func sortedPropertyPortKeys() -> [Any]
	@objc static func timeMode() -> QCPlugInTimeMode

	// Instance Methods
	@objc (addInputPortWithType:forKey:withAttributes:) func addInputPort(withType: String, forKey: String, withAttributes: [AnyHashable: Any])
	@objc (addOutputPortWithType:forKey:withAttributes:) func addOutputPort(withType: String, forKey: String, withAttributes: [AnyHashable: Any])
	@objc func createViewController() -> QCPlugInViewController
	@objc (didValueForInputKeyChange:) func didValue(forInputKeyChange: String) -> Bool
	@objc func disableExecution(_: QCPlugInContext)
	@objc func enableExecution(_: QCPlugInContext)
	@objc func execute(_: QCPlugInContext, atTime: TimeInterval, withArguments: [AnyHashable: Any]) -> Bool
	@objc (executionTimeForContext:atTime:withArguments:) func executionTime(`for`: QCPlugInContext, atTime: TimeInterval, withArguments: [AnyHashable: Any]) -> TimeInterval
	@objc (removeInputPortForKey:) func removeInputPort(forKey: String)
	@objc (removeOutputPortForKey:) func removeOutputPort(forKey: String)
	@objc (serializedValueForKey:) func serializedValue(forKey: String) -> Any!
	@objc func setSerializedValue(_: Any, forKey: String)
	@objc func setValue(_: Any, forOutputKey: String) -> Bool
	@objc func startExecution(_: QCPlugInContext) -> Bool
	@objc func stopExecution(_: QCPlugInContext)
	@objc (valueForInputKey:) func value(forInputKey: String) -> Any!

	// Constructors
	@objc static func create() -> QCPlugIn
}

extension QCPlugIn: QCPlugInExports {
	@objc class func create() -> QCPlugIn {
		return QCPlugIn()
	}

}
