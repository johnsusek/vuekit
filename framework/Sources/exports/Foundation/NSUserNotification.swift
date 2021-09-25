import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSUserNotificationExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var actionButtonTitle: String { @objc get @objc (setActionButtonTitle:) set }
	@objc var activationType: NSUserNotification.ActivationType { @objc get }
	@objc var actualDeliveryDate: Date? { @objc get }
	@objc @available(OSX 10.10, *) var additionalActions: [NSUserNotificationAction]? { @objc get @objc (setAdditionalActions:) set }
	@objc @available(OSX 10.10, *) var additionalActivationAction: NSUserNotificationAction? { @objc get }
	@objc @available(OSX 10.9, *) var contentImage: NSImage? { @objc get @objc (setContentImage:) set }
	@objc var deliveryDate: Date? { @objc get @objc (setDeliveryDate:) set }
	@objc var deliveryRepeatInterval: DateComponents? { get set }
	@objc var deliveryTimeZone: TimeZone? { get set }
	@objc var hasActionButton: Bool { @objc get @objc (setHasActionButton:) set }
	@objc @available(OSX 10.9, *) var hasReplyButton: Bool { @objc get @objc (setHasReplyButton:) set }
	@objc @available(OSX 10.9, *) var identifier: String? { @objc get @objc (setIdentifier:) set }
	@objc var informativeText: String? { @objc get @objc (setInformativeText:) set }
	@objc var otherButtonTitle: String { @objc get @objc (setOtherButtonTitle:) set }
	@objc var isPresented: Bool { @objc get }
	@objc var isRemote: Bool { @objc get }
	@objc @available(OSX 10.9, *) var response: NSAttributedString? { @objc get }
	@objc @available(OSX 10.9, *) var responsePlaceholder: String? { @objc get @objc (setResponsePlaceholder:) set }
	@objc var soundName: String? { @objc get @objc (setSoundName:) set }
	@objc var subtitle: String? { @objc get @objc (setSubtitle:) set }
	@objc var title: String? { @objc get @objc (setTitle:) set }
	@objc var userInfo: [String: Any]? { @objc get @objc (setUserInfo:) set }

	// Constructors
	@objc static func create() -> NSUserNotification
}

extension NSUserNotification: NSUserNotificationExports {
	@objc class func create() -> NSUserNotification {
		return NSUserNotification()
	}

}
