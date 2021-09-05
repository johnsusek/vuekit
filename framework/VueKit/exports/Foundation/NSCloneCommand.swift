import AppKit
import JavaScriptCore

@objc protocol NSCloneCommandExports: JSExport {
	@objc var keySpecifier: NSScriptObjectSpecifier { @objc get }
	@objc func setReceiversSpecifier(_: NSScriptObjectSpecifier?)
}

extension NSCloneCommand: NSCloneCommandExports {
	@objc override class func create() -> NSCloneCommand {
		return NSCloneCommand()
	}
}
