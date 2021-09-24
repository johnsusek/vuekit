import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTrackingAreaExports: JSExport {
	// , NSCodingExports, NSCopyingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var options: NSTrackingArea.Options { @objc get }
	@objc var owner: AnyObject? { get }
	@objc var rect: NSRect { @objc get }
	@objc var userInfo: [AnyHashable : Any]? { get }
}

extension NSTrackingArea: NSTrackingAreaExports {}
