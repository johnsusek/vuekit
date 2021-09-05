import AppKit
import JavaScriptCore

@objc protocol NSNameSpecifierExports: JSExport {
	@objc var name: String { @objc get @objc (setName:) set }
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, name: String) -> NSNameSpecifier
}

extension NSNameSpecifier: NSNameSpecifierExports {
	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, name: String) -> NSNameSpecifier {
		return NSNameSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key, name: name)
	}

	@objc override class func create() -> NSNameSpecifier {
		return NSNameSpecifier()
	}
}
