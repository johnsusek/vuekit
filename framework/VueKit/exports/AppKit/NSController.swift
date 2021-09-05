import AppKit
import JavaScriptCore

@objc protocol NSControllerExports: JSExport {
	@objc var isEditing: Bool { @objc get }
}

extension NSController: NSControllerExports {
	@objc override class func create() -> NSController {
		return NSController()
	}
}
