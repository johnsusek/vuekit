import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSRotationGestureRecognizerExports: JSExport, NSGestureRecognizerExports {
	// Static Methods

	// Own Instance Properties
	@objc var rotation: CGFloat { get set }
	@objc var rotationInDegrees: CGFloat { get set }

	// Constructors
}

extension NSRotationGestureRecognizer: NSRotationGestureRecognizerExports {
}
