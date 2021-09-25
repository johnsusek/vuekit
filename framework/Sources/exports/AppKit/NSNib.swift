import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSNibExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Instance Methods
	@objc (instantiateWithOwner:topLevelObjects:) @available(OSX 10.8, *) func instantiate(withOwner owner: Any?, topLevelObjects: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> Bool

	// Constructors
	@objc static func create() -> NSNib
	@objc @available(OSX 10.8, *) static func create(nibData: Data, bundle: Bundle?) -> NSNib
	@objc static func create(nibNamed: NSNib.Name, bundle: Bundle?) -> NSNib?
}

extension NSNib: NSNibExports {
	@objc class func create() -> NSNib {
		return NSNib()
	}

	@objc @available(OSX 10.8, *) class func create(nibData: Data, bundle: Bundle?) -> NSNib {
		return NSNib(nibData: nibData, bundle: bundle)
	}

	@objc class func create(nibNamed: NSNib.Name, bundle: Bundle?) -> NSNib? {
		return NSNib(nibNamed: nibNamed, bundle: bundle)
	}

}
