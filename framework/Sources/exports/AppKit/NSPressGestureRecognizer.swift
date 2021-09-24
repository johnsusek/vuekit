import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPressGestureRecognizerExports: JSExport, NSGestureRecognizerExports {
	// , NSCodingExports
	// Static Methods

	// Own Instance Properties
	@objc var allowableMovement: CGFloat { get set }
	@objc var buttonMask: Int { @objc get @objc (setButtonMask:) set }
	@objc var minimumPressDuration: TimeInterval { @objc get @objc (setMinimumPressDuration:) set }
	@objc @available(OSX 10.12.2, *) var numberOfTouchesRequired: Int { @objc get @objc (setNumberOfTouchesRequired:) set }

	// Constructors
}

extension NSPressGestureRecognizer: NSPressGestureRecognizerExports {
}
