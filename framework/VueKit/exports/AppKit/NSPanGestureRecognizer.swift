import AppKit
import JavaScriptCore

@objc protocol NSPanGestureRecognizerExports: JSExport {
	@objc var buttonMask: Int { @objc get @objc (setButtonMask:) set }
	@objc @available(OSX 10.12.2, *) var numberOfTouchesRequired: Int { @objc get @objc (setNumberOfTouchesRequired:) set }
	@objc (setTranslation:inView:) func setTranslation(_: NSPoint, in: NSView?)
	@objc (translationInView:) func translation(in: NSView?) -> NSPoint
	@objc (velocityInView:) func velocity(in: NSView?) -> NSPoint
}

extension NSPanGestureRecognizer: NSPanGestureRecognizerExports {
	@objc override class func create() -> NSPanGestureRecognizer {
		return NSPanGestureRecognizer()
	}
}
