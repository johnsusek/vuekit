import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSScriptCommandDescriptionExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Instance Methods
	@objc (appleEventCodeForArgumentWithName:) func appleEventCodeForArgument(withName: String) -> FourCharCode
	@objc func createCommandInstance() -> NSScriptCommand
	@objc (createCommandInstanceWithZone:) func createCommandInstance(with zone: NSZone?) -> NSScriptCommand
	@objc (isOptionalArgumentWithName:) func isOptionalArgument(withName: String) -> Bool
	@objc (typeForArgumentWithName:) func typeForArgument(withName: String) -> String?

	// Own Instance Properties
	@objc var appleEventClassCode: FourCharCode { @objc get }
	@objc var appleEventCode: FourCharCode { @objc get }
	@objc var appleEventCodeForReturnType: FourCharCode { @objc get }
	@objc var argumentNames: [String] { @objc get }
	@objc var commandClassName: String { @objc get }
	@objc var commandName: String { @objc get }
	@objc var returnType: String? { @objc get }
	@objc var suiteName: String { @objc get }

	// Constructors
	@objc static func create(suiteName: String, commandName: String, dictionary: [AnyHashable: Any]?) -> NSScriptCommandDescription?
}

extension NSScriptCommandDescription: NSScriptCommandDescriptionExports {
	@objc class func create(suiteName: String, commandName: String, dictionary: [AnyHashable: Any]?) -> NSScriptCommandDescription? {
		return NSScriptCommandDescription(suiteName: suiteName, commandName: commandName, dictionary: dictionary)
	}

}
