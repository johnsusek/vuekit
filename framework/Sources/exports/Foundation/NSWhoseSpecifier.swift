import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSWhoseSpecifierExports: JSExport, NSScriptObjectSpecifierExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var endSubelementIdentifier: NSWhoseSpecifier.SubelementIdentifier { @objc get @objc (setEndSubelementIdentifier:) set }
	@objc var endSubelementIndex: Int { @objc get @objc (setEndSubelementIndex:) set }
	@objc var startSubelementIdentifier: NSWhoseSpecifier.SubelementIdentifier { @objc get @objc (setStartSubelementIdentifier:) set }
	@objc var startSubelementIndex: Int { @objc get @objc (setStartSubelementIndex:) set }
	@objc var test: NSScriptWhoseTest { @objc get @objc (setTest:) set }

	// Constructors
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, test: NSScriptWhoseTest) -> NSWhoseSpecifier
}

extension NSWhoseSpecifier: NSWhoseSpecifierExports {
	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, test: NSScriptWhoseTest) -> NSWhoseSpecifier {
		return NSWhoseSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key, test: test)
	}

}
