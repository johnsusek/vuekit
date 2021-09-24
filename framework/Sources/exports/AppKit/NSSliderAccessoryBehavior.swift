import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSliderAccessoryBehaviorExports: JSExport {
	// , NSCodingExports, NSCopyingExports
	// Static Methods
	// 	@objc static func create(handler: JSValue) -> NSSliderAccessoryBehavior
	// 	@objc static func create() -> NSSliderAccessoryBehavior

	// Own Static Properties
	@objc static var automatic: NSSliderAccessoryBehavior { @objc (automaticBehavior) get }
	@objc static var valueReset: NSSliderAccessoryBehavior { @objc (valueResetBehavior) get }
	@objc static var valueStep: NSSliderAccessoryBehavior { @objc (valueStepBehavior) get }

	// Instance Methods
	@objc func handleAction(_: NSSliderAccessory)
}

extension NSSliderAccessoryBehavior: NSSliderAccessoryBehaviorExports {}
