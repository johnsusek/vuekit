import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSPointerArrayExports: JSExport {
	// , NSCopyingExports, NSFastEnumerationExports, NSSecureCodingExports
	// Static Methods
	@objc (strongObjectsPointerArray) @available(OSX 10.8, *) static func strongObjects() -> NSPointerArray
	@objc (weakObjectsPointerArray) @available(OSX 10.8, *) static func weakObjects() -> NSPointerArray

	// Instance Methods
	@objc func addPointer(_: UnsafeMutableRawPointer?)
	@objc func compact()
	@objc (insertPointer:atIndex:) func insertPointer(_: UnsafeMutableRawPointer?, at: Int)
	@objc (pointerAtIndex:) func pointer(at: Int) -> UnsafeMutableRawPointer?
	@objc (removePointerAtIndex:) func removePointer(at: Int)
	@objc (replacePointerAtIndex:withPointer:) func replacePointer(at: Int, withPointer: UnsafeMutableRawPointer?)

	// Own Instance Properties
	@objc var allObjects: [Any] { @objc get }
	@objc var count: Int { @objc get @objc (setCount:) set }
	@objc var pointerFunctions: NSPointerFunctions { @objc get }

	// Constructors
	@objc static func create() -> NSPointerArray
	@objc static func create(options: NSPointerFunctions.Options) -> NSPointerArray
	@objc static func create(pointerFunctions: NSPointerFunctions) -> NSPointerArray
}

extension NSPointerArray: NSPointerArrayExports {
	@objc class func create() -> NSPointerArray {
		return NSPointerArray()
	}

	@objc class func create(options: NSPointerFunctions.Options) -> NSPointerArray {
		return NSPointerArray(options: options)
	}

	@objc class func create(pointerFunctions: NSPointerFunctions) -> NSPointerArray {
		return NSPointerArray(pointerFunctions: pointerFunctions)
	}

}
