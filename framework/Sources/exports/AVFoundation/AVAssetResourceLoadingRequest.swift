import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetResourceLoadingRequestExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc @available(OSX 10.9, *) func finishLoading()
	@objc (finishLoadingWithError:) func finishLoading(with: Error?)
	// throws - @objc @available(OSX 10.15, *) func persistentContentKeyFromKeyVendorResponse(options: Data, error: [String: Any]?) -> Data?
	// throws - @objc func streamingContentKeyRequestDataForApp(contentIdentifier: Data, options: Data, error: [String: Any]?) -> Data?

	// Own Instance Properties
	@objc @available(OSX 10.9, *) var isCancelled: Bool { @objc get }
	@objc @available(OSX 10.9, *) var contentInformationRequest: AVAssetResourceLoadingContentInformationRequest? { @objc get }
	@objc @available(OSX 10.9, *) var dataRequest: AVAssetResourceLoadingDataRequest? { @objc get }
	@objc var isFinished: Bool { @objc get }
	@objc @available(OSX 10.9, *) var redirect: URLRequest? { get set }
	@objc var request: URLRequest { get }
	@objc @available(OSX 10.14, *) var requestor: AVAssetResourceLoadingRequestor { @objc get }
	@objc @available(OSX 10.9, *) var response: URLResponse? { @objc get @objc (setResponse:) set }

	// Constructors
}

extension AVAssetResourceLoadingRequest: AVAssetResourceLoadingRequestExports {
}
