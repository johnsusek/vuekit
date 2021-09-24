import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSScriptClassDescriptionExports: JSExport, NSClassDescriptionExports {
	// Static Methods

	// Instance Methods
	@objc (appleEventCodeForKey:) func appleEventCode(forKey: String) -> FourCharCode
	@objc (classDescriptionForKey:) func forKey(_: String) -> NSScriptClassDescription?
	@objc (hasOrderedToManyRelationshipForKey:) @available(OSX 10.5, *) func hasOrderedToManyRelationship(forKey: String) -> Bool
	@objc (hasPropertyForKey:) @available(OSX 10.5, *) func hasProperty(forKey: String) -> Bool
	@objc (hasReadablePropertyForKey:) @available(OSX 10.5, *) func hasReadableProperty(forKey: String) -> Bool
	@objc (hasWritablePropertyForKey:) @available(OSX 10.5, *) func hasWritableProperty(forKey: String) -> Bool
	@objc (isLocationRequiredToCreateForKey:) func isLocationRequiredToCreate(forKey: String) -> Bool
	@objc (keyWithAppleEventCode:) func key(withAppleEventCode: FourCharCode) -> String?
	@objc func matchesAppleEventCode(_: FourCharCode) -> Bool
	@objc (selectorForCommand:) func selector(forCommand: NSScriptCommandDescription) -> Selector?
	@objc func supportsCommand(_: NSScriptCommandDescription) -> Bool
	@objc (typeForKey:) func type(forKey: String) -> String?

	// Own Instance Properties
	@objc var appleEventCode: FourCharCode { @objc get }
	@objc var defaultSubcontainerAttributeKey: String? { @objc get }
	@objc var implementationClassName: String? { @objc get }
	@objc var suiteName: String? { @objc get }
	@objc (superclassDescription) var superclass: NSScriptClassDescription? { @objc (superclassDescription) get }

	// Constructors
	@objc static func create(suiteName: String, className: String, dictionary: [AnyHashable: Any]?) -> NSScriptClassDescription?
}

extension NSScriptClassDescription: NSScriptClassDescriptionExports {
	@objc class func create(suiteName: String, className: String, dictionary: [AnyHashable: Any]?) -> NSScriptClassDescription? {
		return NSScriptClassDescription(suiteName: suiteName, className: className, dictionary: dictionary)
	}

}
