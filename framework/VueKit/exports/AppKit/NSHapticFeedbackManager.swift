import AppKit
import JavaScriptCore

@objc protocol NSHapticFeedbackManagerExports: JSExport {
	@objc static var defaultPerformer: NSHapticFeedbackPerformer { @objc get }
}

extension NSHapticFeedbackManager: NSHapticFeedbackManagerExports {
	@objc override class func create() -> NSHapticFeedbackManager {
		return NSHapticFeedbackManager()
	}
}
