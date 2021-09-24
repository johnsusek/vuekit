import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSNotificationExports: JSExport {
	// , NSCodingExports, NSCopyingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var name: NSNotification.Name { @objc get }
	@objc var object: Any? { @objc get }
	@objc var userInfo: [AnyHashable: Any]? { @objc get }
}

extension NSNotification: NSNotificationExports {}
