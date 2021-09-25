import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLSessionDataTaskExports: JSExport, URLSessionTaskExports {
	// Static Methods

	// Constructors
	@objc static func create() -> URLSessionDataTask
}

extension URLSessionDataTask: URLSessionDataTaskExports {
	@objc override class func create() -> URLSessionDataTask {
		return URLSessionDataTask()
	}

}
