import AppKit
import JavaScriptCore

@objc protocol NSDeleteCommandExports: JSExport {
	@objc var keySpecifier: NSScriptObjectSpecifier { @objc get }
	@objc func setReceiversSpecifier(_: NSScriptObjectSpecifier?)
}

extension NSDeleteCommand: NSDeleteCommandExports {
	@objc override class func create() -> NSDeleteCommand {
		return NSDeleteCommand()
	}
}
