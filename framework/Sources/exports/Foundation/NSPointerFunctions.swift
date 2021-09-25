import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSPointerFunctionsExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var acquireFunction: (@convention(c) (UnsafeRawPointer, (@convention(c) (UnsafeRawPointer) -> Int)?, ObjCBool) -> UnsafeMutableRawPointer)? { get set }
	@objc var descriptionFunction: (@convention(c) (UnsafeRawPointer) -> String?)? { get set }
	@objc var hashFunction: (@convention(c) (UnsafeRawPointer, (@convention(c) (UnsafeRawPointer) -> Int)?) -> Int)? { get set }
	@objc var isEqualFunction: (@convention(c) (UnsafeRawPointer, UnsafeRawPointer, (@convention(c) (UnsafeRawPointer) -> Int)?) -> ObjCBool)? { get set }
	@objc var relinquishFunction: (@convention(c) (UnsafeRawPointer, (@convention(c) (UnsafeRawPointer) -> Int)?) -> Void)? { get set }
	@objc var sizeFunction: (@convention(c) (UnsafeRawPointer) -> Int)? { get set }

	// Constructors
	@objc static func create() -> NSPointerFunctions
	@objc static func create(options: NSPointerFunctions.Options) -> NSPointerFunctions
}

extension NSPointerFunctions: NSPointerFunctionsExports {
	@objc class func create() -> NSPointerFunctions {
		return NSPointerFunctions()
	}

	@objc class func create(options: NSPointerFunctions.Options) -> NSPointerFunctions {
		return NSPointerFunctions(options: options)
	}

}
