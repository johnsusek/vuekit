import AppKit
import JavaScriptCore

@objc protocol NSMagnificationGestureRecognizerExports: JSExport {
	@objc var magnification: CGFloat { @objc get @objc (setMagnification:) set }
}

extension NSMagnificationGestureRecognizer: NSMagnificationGestureRecognizerExports {
	@objc override class func create() -> NSMagnificationGestureRecognizer {
		return NSMagnificationGestureRecognizer()
	}
}
