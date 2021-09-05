import AppKit
import JavaScriptCore

@objc protocol NSCloseCommandExports: JSExport {
	@objc var saveOptions: NSSaveOptions { @objc get }
}

extension NSCloseCommand: NSCloseCommandExports {
	@objc override class func create() -> NSCloseCommand {
		return NSCloseCommand()
	}
}
