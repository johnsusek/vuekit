import AppKit
import JavaScriptCore

@objc protocol NSGetCommandExports: JSExport {
}

extension NSGetCommand: NSGetCommandExports {
	@objc override class func create() -> NSGetCommand {
		return NSGetCommand()
	}
}
