import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSURLHandleExports: JSExport {
	// Static Methods

	// Constructors
	@objc static func create() -> NSURLHandle
}

extension NSURLHandle: NSURLHandleExports {
	@objc class func create() -> NSURLHandle {
		return NSURLHandle()
	}

}
