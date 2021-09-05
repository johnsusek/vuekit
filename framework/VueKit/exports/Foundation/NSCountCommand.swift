import AppKit
import JavaScriptCore

@objc protocol NSCountCommandExports: JSExport {
}

extension NSCountCommand: NSCountCommandExports {
	@objc override class func create() -> NSCountCommand {
		return NSCountCommand()
	}
}
