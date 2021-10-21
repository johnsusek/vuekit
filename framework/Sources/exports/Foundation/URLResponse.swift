import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLResponseExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	// @objc var MIMEType: String? { @objc get }
	// @objc var URL: URL? { get }
	@objc var expectedContentLength: Int64 { @objc get }
	@objc var suggestedFilename: String? { @objc get }
	@objc var textEncodingName: String? { @objc get }

	// Constructors
	@objc static func create() -> URLResponse
	@objc static func create(url: URL, mimeType: String?, expectedContentLength: Int, textEncodingName: String?) -> URLResponse
}

extension URLResponse: URLResponseExports {
	@objc class func create() -> URLResponse {
		return URLResponse()
	}

	@objc class func create(url: URL, mimeType: String?, expectedContentLength: Int, textEncodingName: String?) -> URLResponse {
		return URLResponse(url: url, mimeType: mimeType, expectedContentLength: expectedContentLength, textEncodingName: textEncodingName)
	}

}
