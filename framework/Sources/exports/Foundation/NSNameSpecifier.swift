import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSNameSpecifierExports: JSExport, NSScriptObjectSpecifierExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var name: String { @objc get @objc (setName:) set }

	// Constructors
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, name: String) -> NSNameSpecifier
}

extension NSNameSpecifier: NSNameSpecifierExports {
	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, name: String) -> NSNameSpecifier {
		return NSNameSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key, name: name)
	}

}
