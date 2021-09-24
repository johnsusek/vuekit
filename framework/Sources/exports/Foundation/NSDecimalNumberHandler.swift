import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSDecimalNumberHandlerExports: JSExport {
	// , NSCodingExports, NSDecimalNumberBehaviorsExports
	// Static Methods

	// Own Static Properties
	@objc static var `default`: NSDecimalNumberHandler { @objc (defaultDecimalNumberHandler) get }

	// Instance Methods
}

extension NSDecimalNumberHandler: NSDecimalNumberHandlerExports {}
