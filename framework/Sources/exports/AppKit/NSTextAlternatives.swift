import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextAlternativesExports: JSExport {
	// , NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc func noteSelectedAlternativeString(_: String)

	// Own Instance Properties
	@objc var alternativeStrings: [String] { @objc get }
	@objc var primaryString: String { @objc get }

	// Constructors
	@objc static func create() -> NSTextAlternatives
	@objc static func create(primaryString: String, alternativeStrings: [String]) -> NSTextAlternatives
}

extension NSTextAlternatives: NSTextAlternativesExports {
	@objc class func create() -> NSTextAlternatives {
		return NSTextAlternatives()
	}

	@objc class func create(primaryString: String, alternativeStrings: [String]) -> NSTextAlternatives {
		return NSTextAlternatives(primaryString: primaryString, alternativeStrings: alternativeStrings)
	}

}
