import AppKit
import JavaScriptCore

@objc protocol NSUniqueIDSpecifierExports: JSExport {
	@objc var uniqueID: Any { @objc get @objc (setUniqueID:) set }
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, uniqueID: Any) -> NSUniqueIDSpecifier
}

extension NSUniqueIDSpecifier: NSUniqueIDSpecifierExports {
	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, uniqueID: Any) -> NSUniqueIDSpecifier {
		return NSUniqueIDSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key, uniqueID: uniqueID)
	}

	@objc override class func create() -> NSUniqueIDSpecifier {
		return NSUniqueIDSpecifier()
	}
}
