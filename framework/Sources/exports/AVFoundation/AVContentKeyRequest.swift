import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVContentKeyRequestExports: JSExport {
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (makeStreamingContentKeyRequestDataForApp:contentIdentifier:options:completionHandler:) func makeStreamingContentKeyRequestData(forApp: Data, contentIdentifier: Data?, options: [String: Any]?, completionHandler: JSValue)
	@objc func processContentKeyResponse(_: AVContentKeyResponse)
	@objc func processContentKeyResponseError(_: Error)
	// throws - @objc @available(OSX 10.15, *) func respondByRequestingPersistableContentKeyRequestAndReturnError() -> Bool

	// Own Instance Properties
	@objc var canProvidePersistableContentKey: Bool { @objc get }
	@objc var error: Error? { @objc get }
	@objc var identifier: Any? { @objc get }
	@objc var initializationData: Data? { @objc get }
	@objc @available(OSX 10.14.4, *) var options: [String: Any] { @objc get }
	@objc var renewsExpiringResponseData: Bool { @objc get }
	@objc var status: AVContentKeyRequest.Status { @objc get }

	// Constructors
	@objc static func create() -> AVContentKeyRequest
}

extension AVContentKeyRequest: AVContentKeyRequestExports {
	@objc class func create() -> AVContentKeyRequest {
		return AVContentKeyRequest()
	}

}
