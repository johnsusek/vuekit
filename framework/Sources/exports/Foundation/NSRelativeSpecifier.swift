import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSRelativeSpecifierExports: JSExport, NSScriptObjectSpecifierExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var baseSpecifier: NSScriptObjectSpecifier? { @objc get @objc (setBaseSpecifier:) set }
	@objc var relativePosition: NSRelativeSpecifier.RelativePosition { @objc get @objc (setRelativePosition:) set }

	// Constructors
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, relativePosition: NSRelativeSpecifier.RelativePosition, baseSpecifier: NSScriptObjectSpecifier?) -> NSRelativeSpecifier
}

extension NSRelativeSpecifier: NSRelativeSpecifierExports {
	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, relativePosition: NSRelativeSpecifier.RelativePosition, baseSpecifier: NSScriptObjectSpecifier?) -> NSRelativeSpecifier {
		return NSRelativeSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key, relativePosition: relativePosition, baseSpecifier: baseSpecifier)
	}

}
