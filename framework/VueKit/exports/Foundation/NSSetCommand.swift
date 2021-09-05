import AppKit
import JavaScriptCore

@objc protocol NSSetCommandExports: JSExport {
	@objc var keySpecifier: NSScriptObjectSpecifier { @objc get }
	@objc func setReceiversSpecifier(_: NSScriptObjectSpecifier?)
}

extension NSSetCommand: NSSetCommandExports {
	@objc override class func create() -> NSSetCommand {
		return NSSetCommand()
	}
}
