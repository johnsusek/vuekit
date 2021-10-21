import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol HTTPURLResponseExports: JSExport, URLResponseExports {
	// Static Methods
	// @objc static func localizedStringForStatusCode(_: Int) -> String

	// Instance Methods
	// @objc @available(OSX 10.15, *) func valueForHTTPHeaderField(_: String) -> String?

	// Own Instance Properties
	@objc var allHeaderFields: [AnyHashable: Any] { @objc get }
	@objc var statusCode: Int { @objc get }

	// Constructors
	@objc @available(OSX 10.7, *) static func create(url: URL, statusCode: Int, httpVersion: String?, headerFields: [String: String]?) -> HTTPURLResponse?
}

extension HTTPURLResponse: HTTPURLResponseExports {
	@objc @available(OSX 10.7, *) class func create(url: URL, statusCode: Int, httpVersion: String?, headerFields: [String: String]?) -> HTTPURLResponse? {
		return HTTPURLResponse(url: url, statusCode: statusCode, httpVersion: httpVersion, headerFields: headerFields)
	}
}
