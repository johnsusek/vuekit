import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSUniqueIDSpecifierExports: JSExport, NSScriptObjectSpecifierExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var uniqueID: Any { @objc get @objc (setUniqueID:) set }

	// Constructors
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, uniqueID: Any) -> NSUniqueIDSpecifier
}

extension NSUniqueIDSpecifier: NSUniqueIDSpecifierExports {
	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, uniqueID: Any) -> NSUniqueIDSpecifier {
		return NSUniqueIDSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key, uniqueID: uniqueID)
	}

}
