import AppKit
import JavaScriptCore

@objc protocol NSWhoseSpecifierExports: JSExport {
	@objc var endSubelementIdentifier: NSWhoseSpecifier.SubelementIdentifier { @objc get @objc (setEndSubelementIdentifier:) set }
	@objc var endSubelementIndex: Int { @objc get @objc (setEndSubelementIndex:) set }
	@objc var startSubelementIdentifier: NSWhoseSpecifier.SubelementIdentifier { @objc get @objc (setStartSubelementIdentifier:) set }
	@objc var startSubelementIndex: Int { @objc get @objc (setStartSubelementIndex:) set }
	@objc var test: NSScriptWhoseTest { @objc get @objc (setTest:) set }
	@objc static func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, test: NSScriptWhoseTest) -> NSWhoseSpecifier
}

extension NSWhoseSpecifier: NSWhoseSpecifierExports {
	@objc class func create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier?, key: String, test: NSScriptWhoseTest) -> NSWhoseSpecifier {
		return NSWhoseSpecifier(containerClassDescription: containerClassDescription, containerSpecifier: containerSpecifier, key: key, test: test)
	}

	@objc override class func create() -> NSWhoseSpecifier {
		return NSWhoseSpecifier()
	}
}
