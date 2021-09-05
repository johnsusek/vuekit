import AppKit
import JavaScriptCore

@objc protocol NSColorPickerExports: JSExport {
	@objc var buttonToolTip: String { @objc get }
	@objc var colorPanel: NSColorPanel { @objc get }
	@objc var minContentSize: NSSize { @objc get }
	@objc var provideNewButtonImage: NSImage { @objc get }
}

extension NSColorPicker: NSColorPickerExports {
	@objc override class func create() -> NSColorPicker {
		return NSColorPicker()
	}
}
