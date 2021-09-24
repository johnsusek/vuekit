import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSScriptSuiteRegistryExports: JSExport {
	// Static Methods
	@objc (setSharedScriptSuiteRegistry:) static func setShared(_: NSScriptSuiteRegistry)
	@objc (sharedScriptSuiteRegistry) static func shared() -> NSScriptSuiteRegistry

	// Instance Methods
	@objc func aeteResource(_: String) -> Data?
	@objc (appleEventCodeForSuite:) func appleEventCode(forSuite: String) -> FourCharCode
	@objc (bundleForSuite:) func bundle(forSuite: String) -> Bundle?
	@objc (classDescriptionWithAppleEventCode:) func classDescription(withAppleEventCode: FourCharCode) -> NSScriptClassDescription?
	@objc (classDescriptionsInSuite:) func classDescriptions(inSuite: String) -> [String: NSScriptClassDescription]?
	@objc (commandDescriptionWithAppleEventClass:andAppleEventCode:) func commandDescription(withAppleEventClass: FourCharCode, andAppleEventCode: FourCharCode) -> NSScriptCommandDescription?
	@objc (commandDescriptionsInSuite:) func commandDescriptions(inSuite: String) -> [String: NSScriptCommandDescription]?
	@objc (loadSuiteWithDictionary:fromBundle:) func loadSuite(with: [AnyHashable: Any], from: Bundle)
	@objc (loadSuitesFromBundle:) func loadSuites(from: Bundle)
	@objc (registerClassDescription:) func register(_: NSScriptClassDescription)
	@objc (registerCommandDescription:) func register(_: NSScriptCommandDescription)
	@objc (suiteForAppleEventCode:) func suite(forAppleEventCode: FourCharCode) -> String?

	// Own Instance Properties
	@objc var suiteNames: [String] { @objc get }

	// Constructors
}

extension NSScriptSuiteRegistry: NSScriptSuiteRegistryExports {
}
