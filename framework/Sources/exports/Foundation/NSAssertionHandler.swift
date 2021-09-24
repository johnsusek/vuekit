import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSAssertionHandlerExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc (currentHandler) static var current: NSAssertionHandler { @objc (currentHandler) get }

	// Constructors
}

extension NSAssertionHandler: NSAssertionHandlerExports {
}
