import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSUserNotificationCenterExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc (defaultUserNotificationCenter) static var `default`: NSUserNotificationCenter { @objc (defaultUserNotificationCenter) get }

	// Instance Methods
	@objc (deliverNotification:) func deliver(_: NSUserNotification)
	@objc func removeAllDeliveredNotifications()
	@objc func removeDeliveredNotification(_: NSUserNotification)
	@objc func removeScheduledNotification(_: NSUserNotification)
	@objc func scheduleNotification(_: NSUserNotification)

	// Own Instance Properties
	@objc var delegate: NSUserNotificationCenterDelegate? { @objc get @objc (setDelegate:) set }
	@objc var deliveredNotifications: [NSUserNotification] { @objc get }
	@objc var scheduledNotifications: [NSUserNotification] { @objc get @objc (setScheduledNotifications:) set }

	// Constructors
}

extension NSUserNotificationCenter: NSUserNotificationCenterExports {
}
