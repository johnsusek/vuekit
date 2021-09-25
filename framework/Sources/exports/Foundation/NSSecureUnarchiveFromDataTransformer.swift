import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSSecureUnarchiveFromDataTransformerExports: JSExport, ValueTransformerExports {
	// Static Methods

	// Own Static Properties
	@objc static var allowedTopLevelClasses: [AnyClass] { get }

	// Constructors
	@objc static func create() -> NSSecureUnarchiveFromDataTransformer
}

extension NSSecureUnarchiveFromDataTransformer: NSSecureUnarchiveFromDataTransformerExports {
	@objc override class func create() -> NSSecureUnarchiveFromDataTransformer {
		return NSSecureUnarchiveFromDataTransformer()
	}

}
