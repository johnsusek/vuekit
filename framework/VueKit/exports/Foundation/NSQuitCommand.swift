import AppKit
import JavaScriptCore

@objc protocol NSQuitCommandExports: JSExport {
	@objc var saveOptions: NSSaveOptions { @objc get }
}

extension NSQuitCommand: NSQuitCommandExports {
	@objc override class func create() -> NSQuitCommand {
		return NSQuitCommand()
	}
}
