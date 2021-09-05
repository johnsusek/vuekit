import AppKit
import JavaScriptCore

@objc protocol NSClickGestureRecognizerExports: JSExport {
	@objc var buttonMask: Int { @objc get @objc (setButtonMask:) set }
	@objc var numberOfClicksRequired: Int { @objc get @objc (setNumberOfClicksRequired:) set }
	@objc @available(OSX 10.12.2, *) var numberOfTouchesRequired: Int { @objc get @objc (setNumberOfTouchesRequired:) set }
}

extension NSClickGestureRecognizer: NSClickGestureRecognizerExports {
	@objc override class func create() -> NSClickGestureRecognizer {
		return NSClickGestureRecognizer()
	}
}
