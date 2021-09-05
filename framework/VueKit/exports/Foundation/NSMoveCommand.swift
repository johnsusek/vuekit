import AppKit
import JavaScriptCore

@objc protocol NSMoveCommandExports: JSExport {
	@objc var keySpecifier: NSScriptObjectSpecifier { @objc get }
	@objc func setReceiversSpecifier(_: NSScriptObjectSpecifier?)
}

extension NSMoveCommand: NSMoveCommandExports {
	@objc override class func create() -> NSMoveCommand {
		return NSMoveCommand()
	}
}
