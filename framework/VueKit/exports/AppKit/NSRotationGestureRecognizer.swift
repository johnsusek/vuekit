import AppKit
import JavaScriptCore

@objc protocol NSRotationGestureRecognizerExports: JSExport {
	@objc var rotation: CGFloat { @objc get @objc (setRotation:) set }
	@objc var rotationInDegrees: CGFloat { @objc get @objc (setRotationInDegrees:) set }
}

extension NSRotationGestureRecognizer: NSRotationGestureRecognizerExports {
	@objc override class func create() -> NSRotationGestureRecognizer {
		return NSRotationGestureRecognizer()
	}
}
