import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol CachedURLResponseExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var data: Data { @objc get }
	@objc var response: URLResponse { @objc get }
	@objc var storagePolicy: URLCache.StoragePolicy { @objc get }
	@objc var userInfo: [AnyHashable: Any]? { @objc get }

	// Constructors
	@objc static func create() -> CachedURLResponse
	@objc static func create(response: URLResponse, data: Data) -> CachedURLResponse
	@objc static func create(response: URLResponse, data: Data, userInfo: [AnyHashable: Any]?, storagePolicy: URLCache.StoragePolicy) -> CachedURLResponse
}

extension CachedURLResponse: CachedURLResponseExports {
	@objc class func create() -> CachedURLResponse {
		return CachedURLResponse()
	}

	@objc class func create(response: URLResponse, data: Data) -> CachedURLResponse {
		return CachedURLResponse(response: response, data: data)
	}

	@objc class func create(response: URLResponse, data: Data, userInfo: [AnyHashable: Any]?, storagePolicy: URLCache.StoragePolicy) -> CachedURLResponse {
		return CachedURLResponse(response: response, data: data, userInfo: userInfo, storagePolicy: storagePolicy)
	}

}
