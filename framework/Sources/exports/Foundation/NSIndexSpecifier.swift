import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSIndexSpecifierExports: JSExport, NSScriptObjectSpecifierExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var index: Int { @objc get @objc (setIndex:) set }

	// Constructors
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, index: Int) -> NSIndexSpecifier
}

extension NSIndexSpecifier: NSIndexSpecifierExports {
	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, index: Int) -> NSIndexSpecifier {
		return NSIndexSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key, index: index)
	}

}
