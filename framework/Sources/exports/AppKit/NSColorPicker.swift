import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSColorPickerExports: JSExport {
	// , NSColorPickingDefaultExports
	// Static Methods

	// Own Instance Properties
	@objc var buttonToolTip: String { @objc get }
	@objc var colorPanel: NSColorPanel { @objc get }
	@objc var minContentSize: NSSize { @objc get }
	@objc var provideNewButtonImage: NSImage { @objc get }

	// Constructors
}

extension NSColorPicker: NSColorPickerExports {
}
