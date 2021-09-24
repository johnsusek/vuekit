import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPanGestureRecognizerExports: JSExport, NSGestureRecognizerExports {
	// , NSCodingExports
	// Static Methods

	// Instance Methods
	@objc (setTranslation:inView:) func setTranslation(_: NSPoint, in: NSView?)
	@objc (translationInView:) func translation(in: NSView?) -> NSPoint
	@objc (velocityInView:) func velocity(in: NSView?) -> NSPoint

	// Own Instance Properties
	@objc var buttonMask: Int { @objc get @objc (setButtonMask:) set }
	@objc @available(OSX 10.12.2, *) var numberOfTouchesRequired: Int { @objc get @objc (setNumberOfTouchesRequired:) set }

	// Constructors
}

extension NSPanGestureRecognizer: NSPanGestureRecognizerExports {
}
