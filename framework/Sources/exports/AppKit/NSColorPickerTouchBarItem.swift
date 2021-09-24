import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSColorPickerTouchBarItemExports: JSExport, NSTouchBarItemExports {
	// Static Methods

	// Own Instance Properties
	@objc var action: Selector? { @objc get @objc (setAction:) set }
	@objc @available(OSX 10.13, *) var allowedColorSpaces: [NSColorSpace]? { @objc get @objc (setAllowedColorSpaces:) set }
	@objc var color: NSColor { @objc get @objc (setColor:) set }
	@objc var colorList: NSColorList! { @objc get @objc (setColorList:) set }
	@objc var customizationLabel: String! { @objc get @objc (setCustomizationLabel:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var showsAlpha: Bool { @objc get @objc (setShowsAlpha:) set }
	@objc var target: AnyObject? { @objc get @objc (setTarget:) set }
}

extension NSColorPickerTouchBarItem: NSColorPickerTouchBarItemExports {}
