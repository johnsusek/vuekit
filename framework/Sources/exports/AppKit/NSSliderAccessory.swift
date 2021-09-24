import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSliderAccessoryExports: JSExport {
	// , NSCodingExports, NSAccessibilityExports, NSAccessibilityElementExports
	// Static Methods

	// Own Instance Properties
	@objc var behavior: NSSliderAccessoryBehavior { @objc get @objc (setBehavior:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }

	// Constructors
}

extension NSSliderAccessory: NSSliderAccessoryExports {
}
