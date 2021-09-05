import AppKit
import JavaScriptCore

@objc protocol NSIndexSpecifierExports: JSExport {
	@objc var index: Int { @objc get @objc (setIndex:) set }
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, index: Int) -> NSIndexSpecifier
}

extension NSIndexSpecifier: NSIndexSpecifierExports {
	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, index: Int) -> NSIndexSpecifier {
		return NSIndexSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key, index: index)
	}

	@objc override class func create() -> NSIndexSpecifier {
		return NSIndexSpecifier()
	}
}
