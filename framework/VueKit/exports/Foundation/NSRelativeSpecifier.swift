import AppKit
import JavaScriptCore

@objc protocol NSRelativeSpecifierExports: JSExport {
	@objc var baseSpecifier: NSScriptObjectSpecifier? { @objc get @objc (setBaseSpecifier:) set }
	@objc var relativePosition: NSRelativeSpecifier.RelativePosition { @objc get @objc (setRelativePosition:) set }
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, relativePosition: NSRelativeSpecifier.RelativePosition, baseSpecifier: NSScriptObjectSpecifier?) -> NSRelativeSpecifier
}

extension NSRelativeSpecifier: NSRelativeSpecifierExports {
	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, relativePosition: NSRelativeSpecifier.RelativePosition, baseSpecifier: NSScriptObjectSpecifier?) -> NSRelativeSpecifier {
		return NSRelativeSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key, relativePosition: relativePosition, baseSpecifier: baseSpecifier)
	}

	@objc override class func create() -> NSRelativeSpecifier {
		return NSRelativeSpecifier()
	}
}
