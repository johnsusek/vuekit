import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSharingServiceExports: JSExport {
	// Static Methods
	@objc (sharingServicesForItems:) static func sharingServices(forItems: [Any]) -> [NSSharingService]

	// Instance Methods
	@objc (canPerformWithItems:) func canPerform(withItems: [Any]?) -> Bool
	@objc (performWithItems:) func perform(withItems: [Any])

	// Own Instance Properties
	@objc @available(OSX 10.9, *) var accountName: String? { @objc get }
	@objc var alternateImage: NSImage? { @objc get }
	@objc @available(OSX 10.9, *) var attachmentFileURLs: [URL]? { get }
	@objc var delegate: NSSharingServiceDelegate? { @objc get @objc (setDelegate:) set }
	@objc var image: NSImage { @objc get }
	@objc @available(OSX 10.9, *) var menuItemTitle: String { @objc get @objc (setMenuItemTitle:) set }
	@objc @available(OSX 10.9, *) var messageBody: String? { @objc get }
	@objc @available(OSX 10.9, *) var permanentLink: URL? { get }
	@objc @available(OSX 10.9, *) var recipients: [String]? { @objc get @objc (setRecipients:) set }
	@objc @available(OSX 10.9, *) var subject: String? { @objc get @objc (setSubject:) set }
	@objc var title: String { @objc get }

	// Constructors
// 	@objc static func create(title: String, image: NSImage, alternateImage: NSImage?, handler: JSValue) -> NSSharingService
}

extension NSSharingService: NSSharingServiceExports {
}
