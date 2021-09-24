import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSUserActivityExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (addUserInfoEntriesFromDictionary:) func addUserInfoEntries(from: [AnyHashable: Any])
	@objc func becomeCurrent()
	// jsvalue - @objc (getContinuationStreamsWithCompletionHandler:) func getContinuationStreams(completionHandler: JSValue)
	@objc func invalidate()
	@objc @available(OSX 10.11, *) func resignCurrent()

	// Own Instance Properties
	@objc var activityType: String { @objc get }
	@objc var delegate: NSUserActivityDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.13.4, *) var detectedBarcodeDescriptor: CIBarcodeDescriptor? { @objc get }
	@objc @available(OSX 10.11, *) var isEligibleForHandoff: Bool { @objc get @objc (setEligibleForHandoff:) set }
	@objc @available(OSX 10.11, *) var isEligibleForPublicIndexing: Bool { @objc get @objc (setEligibleForPublicIndexing:) set }
	@objc @available(OSX 10.11, *) var isEligibleForSearch: Bool { @objc get @objc (setEligibleForSearch:) set }
	@objc @available(OSX 10.11, *) var expirationDate: Date? { @objc get @objc (setExpirationDate:) set }
	@objc @available(OSX 10.11, *) var keywords: Set<String> { @objc get @objc (setKeywords:) set }
	@objc var needsSave: Bool { @objc get @objc (setNeedsSave:) set }
	@objc @available(OSX 10.13, *) var referrerURL: URL? { get set }
	@objc @available(OSX 10.11, *) var requiredUserInfoKeys: Set<String>? { @objc get @objc (setRequiredUserInfoKeys:) set }
	@objc var supportsContinuationStreams: Bool { @objc get @objc (setSupportsContinuationStreams:) set }
	@objc @available(OSX 10.15, *) var targetContentIdentifier: String? { @objc get @objc (setTargetContentIdentifier:) set }
	@objc var title: String? { @objc get @objc (setTitle:) set }
	@objc var userInfo: [AnyHashable: Any]? { @objc get @objc (setUserInfo:) set }
	@objc var webpageURL: URL? { get set }

	// Constructors
	@objc static func create(activityType: String) -> NSUserActivity
}

extension NSUserActivity: NSUserActivityExports {
	@objc class func create(activityType: String) -> NSUserActivity {
		return NSUserActivity(activityType: activityType)
	}

}
