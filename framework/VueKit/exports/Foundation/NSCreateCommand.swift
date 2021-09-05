import AppKit
import JavaScriptCore

@objc protocol NSCreateCommandExports: JSExport {
	@objc var createClassDescription: NSScriptClassDescription { @objc get }
	@objc var resolvedKeyDictionary: [String: Any] { @objc get }
}

extension NSCreateCommand: NSCreateCommandExports {
	@objc override class func create() -> NSCreateCommand {
		return NSCreateCommand()
	}
}
