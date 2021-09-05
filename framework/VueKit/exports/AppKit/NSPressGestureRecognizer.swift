import AppKit
import JavaScriptCore

@objc protocol NSPressGestureRecognizerExports: JSExport {
	@objc var allowableMovement: CGFloat { @objc get @objc (setAllowableMovement:) set }
	@objc var buttonMask: Int { @objc get @objc (setButtonMask:) set }
	@objc var minimumPressDuration: TimeInterval { @objc get @objc (setMinimumPressDuration:) set }
	@objc @available(OSX 10.12.2, *) var numberOfTouchesRequired: Int { @objc get @objc (setNumberOfTouchesRequired:) set }
}

extension NSPressGestureRecognizer: NSPressGestureRecognizerExports {
	@objc override class func create() -> NSPressGestureRecognizer {
		return NSPressGestureRecognizer()
	}
}
