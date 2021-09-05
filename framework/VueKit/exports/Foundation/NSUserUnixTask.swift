import AppKit
import JavaScriptCore

@objc protocol NSUserUnixTaskExports: JSExport {
	@objc var standardError: FileHandle? { @objc get @objc (setStandardError:) set }
	@objc var standardInput: FileHandle? { @objc get @objc (setStandardInput:) set }
	@objc var standardOutput: FileHandle? { @objc get @objc (setStandardOutput:) set }
	// @objc func executeWithArguments(_: [String]?, completionHandler: JSManagedValue /* Error: Void */?)
}

extension NSUserUnixTask: NSUserUnixTaskExports {
	@objc override class func create() -> NSUserUnixTask {
		return NSUserUnixTask()
	}
}
