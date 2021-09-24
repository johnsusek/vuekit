import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSScriptObjectSpecifierExports: JSExport {
	// , NSCodingExports
	// Static Methods
	@objc @available(OSX 10.5, *) static func create(descriptor: NSAppleEventDescriptor) -> NSScriptObjectSpecifier?

	// Instance Methods
	@objc (indicesOfObjectsByEvaluatingWithContainer:count:) func indicesOfObjectsByEvaluating(withContainer: Any, count: UnsafeMutablePointer<Int>) -> UnsafeMutablePointer<Int>?
	@objc (objectsByEvaluatingWithContainers:) func objectsByEvaluating(withContainers: Any) -> Any?

	// Own Instance Properties
	@objc (childSpecifier) var child: NSScriptObjectSpecifier? { @objc (childSpecifier) get @objc (setChildSpecifier:) set }
	@objc var containerClassDescription: NSScriptClassDescription? { @objc get @objc (setContainerClassDescription:) set }
	@objc var containerIsObjectBeingTested: Bool { @objc get @objc (setContainerIsObjectBeingTested:) set }
	@objc var containerIsRangeContainerObject: Bool { @objc get @objc (setContainerIsRangeContainerObject:) set }
	@objc (containerSpecifier) var container: NSScriptObjectSpecifier? { @objc (containerSpecifier) get @objc (setContainerSpecifier:) set }
	@objc @available(OSX 10.5, *) var descriptor: NSAppleEventDescriptor? { @objc get }
	@objc var evaluationErrorNumber: Int { @objc get @objc (setEvaluationErrorNumber:) set }
	@objc (evaluationErrorSpecifier) var evaluationError: NSScriptObjectSpecifier? { @objc (evaluationErrorSpecifier) get }
	@objc var key: String { @objc get @objc (setKey:) set }
	@objc var keyClassDescription: NSScriptClassDescription? { @objc get }
	@objc var objectsByEvaluatingSpecifier: Any? { @objc get }

	// Constructors
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String) -> NSScriptObjectSpecifier
	@objc static func create(containerSpecifier: NSScriptObjectSpecifier, key: String) -> NSScriptObjectSpecifier
}

extension NSScriptObjectSpecifier: NSScriptObjectSpecifierExports {
	@objc @available(OSX 10.5, *) class func create(descriptor: NSAppleEventDescriptor) -> NSScriptObjectSpecifier? {
		return NSScriptObjectSpecifier(descriptor: descriptor)
	}

	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String) -> NSScriptObjectSpecifier {
		return NSScriptObjectSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key)
	}

	@objc class func create(containerSpecifier: NSScriptObjectSpecifier, key: String) -> NSScriptObjectSpecifier {
		return NSScriptObjectSpecifier(containerSpecifier: containerSpecifier, key: key)
	}

}
