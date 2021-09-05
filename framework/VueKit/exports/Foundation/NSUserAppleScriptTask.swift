import AppKit
import JavaScriptCore

@objc protocol NSUserAppleScriptTaskExports: JSExport {
	// @objc func executeWithAppleEvent(_: NSAppleEventDescriptor?, completionHandler: JSManagedValue /* NSAppleEventDescriptor, Error: Void */?)
}

extension NSUserAppleScriptTask: NSUserAppleScriptTaskExports {
	@objc override class func create() -> NSUserAppleScriptTask {
		return NSUserAppleScriptTask()
	}
}
