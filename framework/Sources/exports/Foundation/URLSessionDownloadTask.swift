import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLSessionDownloadTaskExports: JSExport, URLSessionTaskExports {
	// Static Methods

	// Instance Methods
	// jsvalue - @objc func cancelByProducingResumeData(_: JSValue)

	// Constructors
	@objc static func create() -> URLSessionDownloadTask
}

extension URLSessionDownloadTask: URLSessionDownloadTaskExports {
	@objc override class func create() -> URLSessionDownloadTask {
		return URLSessionDownloadTask()
	}

}
