import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSFileSecurityExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Constructors
	@objc static func create() -> NSFileSecurity
}

extension NSFileSecurity: NSFileSecurityExports {
	@objc class func create() -> NSFileSecurity {
		return NSFileSecurity()
	}

}
