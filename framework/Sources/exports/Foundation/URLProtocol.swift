import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLProtocolExports: JSExport {
	// Static Methods
	// @objc static func canInitWithRequest(_ request: URLRequest) -> Bool
	// @objc @available(OSX 10.10, *) static func canInitWithTask(_: URLSessionTask) -> Bool
	// @objc static func canonicalRequestForRequest(_: URLRequest) -> URLRequest
	// @objc static func propertyForKey(_ key: String, inRequest request: URLRequest) -> Any?
	@objc static func registerClass(_: AnyClass) -> Bool
	// @objc static func removePropertyForKey(_: String, inRequest: NSMutableURLRequest)
	// @objc static func requestIsCacheEquivalent(_ a: URLRequest, toRequest b: URLRequest) -> Bool
	// @objc static func setProperty(_: Any, forKey: String, inRequest: NSMutableURLRequest)
	@objc static func unregisterClass(_: AnyClass)

	// Instance Methods
	@objc func startLoading()
	@objc func stopLoading()

	// Own Instance Properties
	@objc var cachedResponse: CachedURLResponse? { @objc get }
	@objc var client: URLProtocolClient? { @objc get }
	@objc var request: URLRequest { get }
	@objc @available(OSX 10.10, *) var task: URLSessionTask? { @objc get }

	// Constructors
	@objc static func create() -> URLProtocol
}

extension URLProtocol: URLProtocolExports {
	@objc class func create() -> URLProtocol {
		return URLProtocol()
	}
}
