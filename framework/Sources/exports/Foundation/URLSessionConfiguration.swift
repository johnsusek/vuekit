import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLSessionConfigurationExports: JSExport {
	// , NSCopyingExports
	// Static Methods
	@objc (backgroundSessionConfigurationWithIdentifier:) @available(OSX 10.10, *) static func background(withIdentifier: String) -> URLSessionConfiguration

	// Own Static Properties
	// @objc static var defaultSessionConfiguration: URLSessionConfiguration { @objc get }
	// @objc static var ephemeralSessionConfiguration: URLSessionConfiguration { @objc get }

	// Own Instance Properties
	// @objc var HTTPAdditionalHeaders: [AnyHashable: Any]? { @objc get @objc (setHTTPAdditionalHeaders:) set }
	// @objc var HTTPCookieAcceptPolicy: HTTPCookie.AcceptPolicy { @objc get @objc (setHTTPCookieAcceptPolicy:) set }
	// @objc var HTTPCookieStorage: HTTPCookieStorage? { @objc get @objc (setHTTPCookieStorage:) set }
	// @objc var HTTPMaximumConnectionsPerHost: Int { @objc get @objc (setHTTPMaximumConnectionsPerHost:) set }
	// @objc var HTTPShouldSetCookies: Bool { @objc get @objc (setHTTPShouldSetCookies:) set }
	// @objc var HTTPShouldUsePipelining: Bool { @objc get @objc (setHTTPShouldUsePipelining:) set }
	// @objc @available(OSX 10.9, *) var TLSMaximumSupportedProtocol: SSLProtocol { @objc get @objc (setTLSMaximumSupportedProtocol:) set }
	// @objc @available(OSX 10.15, *) var TLSMaximumSupportedProtocolVersion: tls_protocol_version_t { @objc get @objc (setTLSMaximumSupportedProtocolVersion:) set }
	// @objc @available(OSX 10.9, *) var TLSMinimumSupportedProtocol: SSLProtocol { @objc get @objc (setTLSMinimumSupportedProtocol:) set }
	// @objc @available(OSX 10.15, *) var TLSMinimumSupportedProtocolVersion: tls_protocol_version_t { @objc get @objc (setTLSMinimumSupportedProtocolVersion:) set }
	// @objc var URLCache: URLCache? { @objc get @objc (setURLCache:) set }
	// @objc var URLCredentialStorage: URLCredentialStorage? { @objc get @objc (setURLCredentialStorage:) set }
	@objc var allowsCellularAccess: Bool { @objc get @objc (setAllowsCellularAccess:) set }
	@objc @available(OSX 10.15, *) var allowsConstrainedNetworkAccess: Bool { @objc get @objc (setAllowsConstrainedNetworkAccess:) set }
	@objc @available(OSX 10.15, *) var allowsExpensiveNetworkAccess: Bool { @objc get @objc (setAllowsExpensiveNetworkAccess:) set }
	@objc var connectionProxyDictionary: [AnyHashable: Any]? { @objc get @objc (setConnectionProxyDictionary:) set }
	@objc @available(OSX 10.10, *) var isDiscretionary: Bool { @objc (isDiscretionary) get @objc (setDiscretionary:) set }
	@objc var identifier: String? { @objc get }
	@objc var networkServiceType: NSURLRequest.NetworkServiceType { @objc get @objc (setNetworkServiceType:) set }
	@objc var protocolClasses: [AnyClass]? { get set }
	@objc var requestCachePolicy: NSURLRequest.CachePolicy { @objc get @objc (setRequestCachePolicy:) set }
	@objc @available(OSX 10.10, *) var sharedContainerIdentifier: String? { @objc get @objc (setSharedContainerIdentifier:) set }
	@objc @available(OSX 10.11, *) var shouldUseExtendedBackgroundIdleMode: Bool { @objc get @objc (setShouldUseExtendedBackgroundIdleMode:) set }
	@objc var timeoutIntervalForRequest: TimeInterval { @objc get @objc (setTimeoutIntervalForRequest:) set }
	@objc var timeoutIntervalForResource: TimeInterval { @objc get @objc (setTimeoutIntervalForResource:) set }
	@objc @available(OSX 10.13, *) var waitsForConnectivity: Bool { @objc get @objc (setWaitsForConnectivity:) set }

	// Constructors
	@objc static func create() -> URLSessionConfiguration
}

extension URLSessionConfiguration: URLSessionConfigurationExports {
	@objc class func create() -> URLSessionConfiguration {
		return URLSessionConfiguration()
	}

}
