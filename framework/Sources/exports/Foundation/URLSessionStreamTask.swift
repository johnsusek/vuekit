import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLSessionStreamTaskExports: JSExport, URLSessionTaskExports {
	// Static Methods

	// Instance Methods
	@objc func captureStreams()
	@objc func closeRead()
	@objc func closeWrite()
	// jsvalue - @objc func readDataOfMinLength(_: Int, maxLength: Int, timeout: TimeInterval, completionHandler: JSValue)
	@objc func startSecureConnection()
	// jsvalue - @objc func writeData(_: Data, timeout: TimeInterval, completionHandler: JSValue)

	// Constructors
	@objc static func create() -> URLSessionStreamTask
}

extension URLSessionStreamTask: URLSessionStreamTaskExports {
	@objc override class func create() -> URLSessionStreamTask {
		return URLSessionStreamTask()
	}

}
