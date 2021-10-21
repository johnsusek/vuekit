import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSMutableURLRequestExports: JSExport, NSURLRequestExports {
	// Static Methods

	// Instance Methods
	@objc func addValue(_: String, forHTTPHeaderField: String)
	@objc func setValue(_: String?, forHTTPHeaderField: String)

	// Own Instance Properties
	@objc var allHTTPHeaderFields: [String: String]? { @objc get @objc (setAllHTTPHeaderFields:) set }
	@objc @available(OSX 10.8, *) var allowsCellularAccess: Bool { @objc get @objc (setAllowsCellularAccess:) set }
	@objc @available(OSX 10.15, *) var allowsConstrainedNetworkAccess: Bool { @objc get @objc (setAllowsConstrainedNetworkAccess:) set }
	@objc @available(OSX 10.15, *) var allowsExpensiveNetworkAccess: Bool { @objc get @objc (setAllowsExpensiveNetworkAccess:) set }
	@objc var cachePolicy: NSURLRequest.CachePolicy { @objc get @objc (setCachePolicy:) set }
	@objc var mainDocumentURL: URL? { get set }
	@objc @available(OSX 10.7, *) var networkServiceType: NSURLRequest.NetworkServiceType { @objc get @objc (setNetworkServiceType:) set }
	@objc var timeoutInterval: TimeInterval { @objc get @objc (setTimeoutInterval:) set }

	// Constructors
	@objc static func create() -> NSMutableURLRequest
}

extension NSMutableURLRequest: NSMutableURLRequestExports {
	@objc override class func create() -> NSMutableURLRequest {
		return NSMutableURLRequest()
	}

}
