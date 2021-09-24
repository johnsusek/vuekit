import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVContentKeySessionExports: JSExport {
	// Static Methods
	@objc (pendingExpiredSessionReportsWithAppIdentifier:storageDirectoryAtURL:) static func pendingExpiredSessionReports(withAppIdentifier appIdentifier: Data, storageDirectoryAt storageURL: URL) -> [Data]
	@objc (removePendingExpiredSessionReports:withAppIdentifier:storageDirectoryAtURL:) static func removePendingExpiredSessionReports(_ expiredSessionReports: [Data], withAppIdentifier appIdentifier: Data, storageDirectoryAt storageURL: URL)

	// Instance Methods
	@objc func addContentKeyRecipient(_: AVContentKeyRecipient)
	@objc func expire()
	// jsvalue - @objc (invalidateAllPersistableContentKeysForApp:options:completionHandler:) @available(OSX 10.15, *) func invalidateAllPersistableContentKeys(forApp: Data, options: [String: Any]?, completionHandler: JSValue)
	// jsvalue - @objc @available(OSX 10.15, *) func invalidatePersistableContentKey(_: Data, options: [String: Any]?, completionHandler: JSValue)
	// jsvalue - @objc (makeSecureTokenForExpirationDateOfPersistableContentKey:completionHandler:) @available(OSX 10.15, *) func makeSecureTokenForExpirationDate(ofPersistableContentKey: Data, completionHandler: JSValue)
	@objc (processContentKeyRequestWithIdentifier:initializationData:options:) func processContentKeyRequest(withIdentifier: Any?, initializationData: Data?, options: [String: Any]?)
	@objc func removeContentKeyRecipient(_: AVContentKeyRecipient)
	@objc (renewExpiringResponseDataForContentKeyRequest:) func renewExpiringResponseData(`for`: AVContentKeyRequest)
	@objc func setDelegate(_: AVContentKeySessionDelegate?, queue: DispatchQueue?)

	// Own Instance Properties
	@objc var contentKeyRecipients: [AVContentKeyRecipient] { @objc get }
	@objc var contentProtectionSessionIdentifier: Data? { @objc get }
	@objc var delegate: AVContentKeySessionDelegate? { @objc get }
	@objc var delegateQueue: DispatchQueue? { @objc get }
	@objc var keySystem: AVContentKeySystem { @objc get }
	@objc var storageURL: URL? { get }

	// Constructors
}

extension AVContentKeySession: AVContentKeySessionExports {
}
