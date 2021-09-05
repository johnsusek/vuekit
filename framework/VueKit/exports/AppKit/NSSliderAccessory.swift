import AppKit
import JavaScriptCore

@objc protocol NSSliderAccessoryExports: JSExport {
	@objc static func create(image: NSImage) -> NSSliderAccessory
	@objc var behavior: NSSliderAccessoryBehavior { @objc get @objc (setBehavior:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
}

extension NSSliderAccessory: NSSliderAccessoryExports {
	@objc class func create(image: NSImage) -> NSSliderAccessory {
		return NSSliderAccessory(image: image)
	}

	@objc override class func create() -> NSSliderAccessory {
		return NSSliderAccessory()
	}
}
