import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLSessionExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc static var shared: URLSession { @objc (sharedSession) get }

	// Instance Methods
	// @objc func dataTaskWithRequest(_ request: URLRequest) -> URLSessionDataTask
	// jsvalue - @objc func dataTaskWithRequest(_: NSURLRequest, completionHandler: JSValue) -> URLSessionDataTask
	// @objc func dataTaskWithURL(_ url: URL) -> URLSessionDataTask
	// jsvalue - @objc func dataTaskWithURL(_: NSURL, completionHandler: JSValue) -> URLSessionDataTask
	// @objc func downloadTaskWithRequest(_ request: URLRequest) -> URLSessionDownloadTask
	// jsvalue - @objc func downloadTaskWithRequest(_: NSURLRequest, completionHandler: JSValue) -> URLSessionDownloadTask
	// @objc func downloadTaskWithResumeData(_: Data) -> URLSessionDownloadTask
	// jsvalue - @objc func downloadTaskWithResumeData(_: Data, completionHandler: JSValue) -> URLSessionDownloadTask
	// @objc func downloadTaskWithURL(_ url: URL) -> URLSessionDownloadTask
	// jsvalue - @objc func downloadTaskWithURL(_: NSURL, completionHandler: JSValue) -> URLSessionDownloadTask
	@objc func finishTasksAndInvalidate()
	// jsvalue - @objc func flushWithCompletionHandler(_: JSValue)
	// jsvalue - @objc @available(OSX 10.11, *) func getAllTasksWithCompletionHandler(_: JSValue)
	// jsvalue - @objc func getTasksWithCompletionHandler(_: JSValue)
	@objc func invalidateAndCancel()
	// jsvalue - @objc func resetWithCompletionHandler(_: JSValue)
	// @objc @available(OSX 10.11, *) func streamTaskWithHostName(_: String, port: Int) -> URLSessionStreamTask
	// @objc @available(OSX 10.11, *) func streamTaskWithNetService(_: NetService) -> URLSessionStreamTask
	// @objc func uploadTaskWithRequest(_ request: URLRequest, fromData bodyData: Data) -> URLSessionUploadTask
	// jsvalue - @objc func uploadTaskWithRequest(_: NSURLRequest, fromData: Data?, completionHandler: JSValue) -> URLSessionUploadTask
	// @objc func uploadTaskWithRequest(_ request: URLRequest, fromFile fileURL: URL) -> URLSessionUploadTask
	// jsvalue - @objc func uploadTaskWithRequest(_: NSURLRequest, fromFile: NSURL, completionHandler: JSValue) -> URLSessionUploadTask
	// @objc func uploadTaskWithStreamedRequest(_ request: URLRequest) -> URLSessionUploadTask
	// @objc @available(OSX 10.15, *) func webSocketTaskWithRequest(_ request: URLRequest) -> URLSessionWebSocketTask
	// @objc @available(OSX 10.15, *) func webSocketTaskWithURL(_ url: URL) -> URLSessionWebSocketTask
	// @objc @available(OSX 10.15, *) func webSocketTaskWithURL(_ url: URL, protocols: [String]) -> URLSessionWebSocketTask

	// Own Instance Properties
	@objc var configuration: URLSessionConfiguration { @objc get }
	@objc var delegate: URLSessionDelegate? { @objc get }
	@objc var delegateQueue: OperationQueue { @objc get }
	@objc var sessionDescription: String? { @objc get @objc (setSessionDescription:) set }
}

extension URLSession: URLSessionExports {
}
