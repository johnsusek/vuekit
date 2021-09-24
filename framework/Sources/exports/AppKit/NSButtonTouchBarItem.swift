import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSButtonTouchBarItemExports: JSExport, NSTouchBarItemExports {
	// Static Methods

	// Own Instance Properties
	@objc var action: Selector? { @objc get @objc (setAction:) set }
	@objc var bezelColor: NSColor? { @objc get @objc (setBezelColor:) set }
	@objc var customizationLabel: String! { @objc get @objc (setCustomizationLabel:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var image: NSImage? { @objc get @objc (setImage:) set }
	@objc var target: AnyObject? { @objc get @objc (setTarget:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }

	// Constructors
}

extension NSButtonTouchBarItem: NSButtonTouchBarItemExports {
}
