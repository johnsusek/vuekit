import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSURLComponentsExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc (URLRelativeToURL:) func url(relativeTo: NSURL?) -> NSURL?

	// Own Instance Properties
	// @objc (URL) var URL: URL? { get }
	@objc var fragment: String? { @objc get @objc (setFragment:) set }
	@objc var host: String? { @objc get @objc (setHost:) set }
	@objc var password: String? { @objc get @objc (setPassword:) set }
	@objc var path: String? { @objc get @objc (setPath:) set }
	@objc var percentEncodedFragment: String? { @objc get @objc (setPercentEncodedFragment:) set }
	@objc var percentEncodedHost: String? { @objc get @objc (setPercentEncodedHost:) set }
	@objc var percentEncodedPassword: String? { @objc get @objc (setPercentEncodedPassword:) set }
	@objc var percentEncodedPath: String? { @objc get @objc (setPercentEncodedPath:) set }
	@objc var percentEncodedQuery: String? { @objc get @objc (setPercentEncodedQuery:) set }
	@objc @available(OSX 10.13, *) var percentEncodedQueryItems: [URLQueryItem]? { get set }
	@objc var percentEncodedUser: String? { @objc get @objc (setPercentEncodedUser:) set }
	@objc var port: NSNumber? { @objc get @objc (setPort:) set }
	@objc var query: String? { @objc get @objc (setQuery:) set }
	@objc @available(OSX 10.10, *) var queryItems: [URLQueryItem]? { get set }
	@objc @available(OSX 10.11, *) var rangeOfFragment: NSRange { @objc get }
	@objc @available(OSX 10.11, *) var rangeOfHost: NSRange { @objc get }
	@objc @available(OSX 10.11, *) var rangeOfPassword: NSRange { @objc get }
	@objc @available(OSX 10.11, *) var rangeOfPath: NSRange { @objc get }
	@objc @available(OSX 10.11, *) var rangeOfPort: NSRange { @objc get }
	@objc @available(OSX 10.11, *) var rangeOfQuery: NSRange { @objc get }
	@objc @available(OSX 10.11, *) var rangeOfScheme: NSRange { @objc get }
	@objc @available(OSX 10.11, *) var rangeOfUser: NSRange { @objc get }
	@objc var scheme: String? { @objc get @objc (setScheme:) set }
	@objc @available(OSX 10.10, *) var string: String? { @objc get }
	@objc var user: String? { @objc get @objc (setUser:) set }

	// Constructors
	@objc static func create() -> NSURLComponents
	@objc static func create(string: String) -> NSURLComponents?
	@objc static func create(url: URL, resolvingAgainstBaseURL: Bool) -> NSURLComponents?
}

extension NSURLComponents: NSURLComponentsExports {
	func url(relativeTo: NSURL?) -> NSURL? {
		return url(relativeTo: relativeTo);
	}

	@objc class func create() -> NSURLComponents {
		return NSURLComponents()
	}

	@objc class func create(url: URL, resolvingAgainstBaseURL: Bool) -> NSURLComponents? {
		return NSURLComponents(url: url, resolvingAgainstBaseURL: resolvingAgainstBaseURL)
	}

	@objc class func create(string: String) -> NSURLComponents? {
		return NSURLComponents(string: string)
	}
}
