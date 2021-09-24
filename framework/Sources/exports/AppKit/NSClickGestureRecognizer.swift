import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSClickGestureRecognizerExports: JSExport, NSGestureRecognizerExports {
	// , NSCodingExports
	// Static Methods

	// Own Instance Properties
	@objc var buttonMask: Int { @objc get @objc (setButtonMask:) set }
	@objc var numberOfClicksRequired: Int { @objc get @objc (setNumberOfClicksRequired:) set }
	@objc @available(OSX 10.12.2, *) var numberOfTouchesRequired: Int { @objc get @objc (setNumberOfTouchesRequired:) set }

	// Constructors
}

extension NSClickGestureRecognizer: NSClickGestureRecognizerExports {
}
