import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLSessionUploadTaskExports: JSExport, URLSessionDataTaskExports {
	// Static Methods

	// Constructors
	@objc static func create() -> URLSessionUploadTask
}

extension URLSessionUploadTask: URLSessionUploadTaskExports {
	@objc override class func create() -> URLSessionUploadTask {
		return URLSessionUploadTask()
	}

}
