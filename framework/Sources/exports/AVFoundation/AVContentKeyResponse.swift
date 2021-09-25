import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVContentKeyResponseExports: JSExport {
	// Static Methods

	// Constructors
	@objc static func create() -> AVContentKeyResponse
	@objc @available(OSX 10.15, *) static func create(authorizationTokenData: Data) -> AVContentKeyResponse
	@objc @available(OSX 10.13, *) static func create(clearKeyData: Data, initializationVector: Data?) -> AVContentKeyResponse
	@objc static func create(fairPlayStreamingKeyResponseData: Data) -> AVContentKeyResponse
}

extension AVContentKeyResponse: AVContentKeyResponseExports {
	@objc class func create() -> AVContentKeyResponse {
		return AVContentKeyResponse()
	}

	@objc class func create(fairPlayStreamingKeyResponseData: Data) -> AVContentKeyResponse {
		return AVContentKeyResponse(fairPlayStreamingKeyResponseData: fairPlayStreamingKeyResponseData)
	}

	@objc @available(OSX 10.13, *) class func create(clearKeyData: Data, initializationVector: Data?) -> AVContentKeyResponse {
		return AVContentKeyResponse(clearKeyData: clearKeyData, initializationVector: initializationVector)
	}

	@objc @available(OSX 10.15, *) class func create(authorizationTokenData: Data) -> AVContentKeyResponse {
		return AVContentKeyResponse(authorizationTokenData: authorizationTokenData)
	}

}
