import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCustomTouchBarItemExports: JSExport, NSTouchBarItemExports {
	// Static Methods

	// Own Instance Properties
	@objc var customizationLabel: String! { @objc get @objc (setCustomizationLabel:) set }
	@objc var view: NSView { @objc get @objc (setView:) set }
	@objc var viewController: NSViewController? { @objc get @objc (setViewController:) set }

	// Constructors
}

extension NSCustomTouchBarItem: NSCustomTouchBarItemExports {
}
