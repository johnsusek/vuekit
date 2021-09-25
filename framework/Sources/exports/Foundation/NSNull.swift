import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSNullExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports, CAActionExports
	// Static Methods

	// Constructors
	@objc static func create() -> NSNull
}

extension NSNull: NSNullExports {
	@objc class func create() -> NSNull {
		return NSNull()
	}

}
