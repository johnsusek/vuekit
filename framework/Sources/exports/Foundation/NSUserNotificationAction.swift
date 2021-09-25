import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSUserNotificationActionExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var identifier: String? { @objc get }
	@objc var title: String? { @objc get }

	// Constructors
	@objc static func create() -> NSUserNotificationAction
	@objc static func create(identifier: String?, title: String?) -> NSUserNotificationAction
}

extension NSUserNotificationAction: NSUserNotificationActionExports {
	@objc class func create() -> NSUserNotificationAction {
		return NSUserNotificationAction()
	}

	@objc class func create(identifier: String?, title: String?) -> NSUserNotificationAction {
		return NSUserNotificationAction(identifier: identifier, title: title)
	}

}
