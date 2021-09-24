import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSMagnificationGestureRecognizerExports: JSExport, NSGestureRecognizerExports {
	// Static Methods

	// Own Instance Properties
	@objc var magnification: CGFloat { get set }

	// Constructors
}

extension NSMagnificationGestureRecognizer: NSMagnificationGestureRecognizerExports {
}
