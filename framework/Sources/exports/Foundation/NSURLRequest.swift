import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSURLRequestExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (valueForHTTPHeaderField:) func value(forHTTPHeaderField: String) -> String?

	// Own Instance Properties
	// @objc (HTTPBody) var HTTPBody: Data? { @objc (HTTPBody) get }
	// @objc (HTTPBodyStream) var HTTPBodyStream: InputStream? { @objc (HTTPBodyStream) get }
	// @objc (HTTPMethod) var HTTPMethod: String? { @objc (HTTPMethod) get }
	// @objc (HTTPShouldHandleCookies) var HTTPShouldHandleCookies: Bool { @objc (HTTPShouldHandleCookies) get }
	// @objc (HTTPShouldUsePipelining) @available(OSX 10.7, *) var HTTPShouldUsePipelining: Bool { @objc (HTTPShouldUsePipelining) get }
	// @objc (URL) var URL: URL? { get }
	@objc var allHTTPHeaderFields: [String: String]? { @objc get }
	@objc @available(OSX 10.8, *) var allowsCellularAccess: Bool { @objc get }
	@objc @available(OSX 10.15, *) var allowsConstrainedNetworkAccess: Bool { @objc get }
	@objc @available(OSX 10.15, *) var allowsExpensiveNetworkAccess: Bool { @objc get }
	@objc var cachePolicy: NSURLRequest.CachePolicy { @objc get }
	@objc var mainDocumentURL: URL? { get }
	@objc @available(OSX 10.7, *) var networkServiceType: NSURLRequest.NetworkServiceType { @objc get }
	@objc var timeoutInterval: TimeInterval { @objc get }

	// Constructors
	@objc static func create() -> NSURLRequest
	@objc static func create(url: URL) -> NSURLRequest
	@objc static func create(url: URL, cachePolicy: NSURLRequest.CachePolicy, timeoutInterval: TimeInterval) -> NSURLRequest
}

extension NSURLRequest: NSURLRequestExports {
	@objc class func create() -> NSURLRequest {
		return NSURLRequest()
	}

	@objc class func create(url: URL) -> NSURLRequest {
		return NSURLRequest(url: url)
	}

	@objc class func create(url: URL, cachePolicy: NSURLRequest.CachePolicy, timeoutInterval: TimeInterval) -> NSURLRequest {
		return NSURLRequest(url: url, cachePolicy: cachePolicy, timeoutInterval: timeoutInterval)
	}

}
