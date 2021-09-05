import AppKit
import JavaScriptCore

@objc protocol NSExistsCommandExports: JSExport {
}

extension NSExistsCommand: NSExistsCommandExports {
	@objc override class func create() -> NSExistsCommand {
		return NSExistsCommand()
	}
}
