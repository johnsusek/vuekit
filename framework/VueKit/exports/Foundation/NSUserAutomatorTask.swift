import AppKit
import JavaScriptCore

@objc protocol NSUserAutomatorTaskExports: JSExport {
	@objc var variables: [String: Any]? { @objc get @objc (setVariables:) set }
	// @objc func executeWithInput(_: NSSecureCoding?, completionHandler: JSManagedValue /* NSUserAutomatorTask.CompletionHandler, Error: Void */?)
}

extension NSUserAutomatorTask: NSUserAutomatorTaskExports {
	@objc override class func create() -> NSUserAutomatorTask {
		return NSUserAutomatorTask()
	}
}
