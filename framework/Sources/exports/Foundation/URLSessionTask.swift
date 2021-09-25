import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLSessionTaskExports: JSExport {
	// , NSCopyingExports, ProgressReportingExports
	// Static Methods

	// Instance Methods
	@objc func cancel()
	@objc func resume()
	@objc func suspend()

	// Own Instance Properties
	@objc @available(OSX 10.13, *) var countOfBytesClientExpectsToReceive: Int64 { @objc get @objc (setCountOfBytesClientExpectsToReceive:) set }
	@objc @available(OSX 10.13, *) var countOfBytesClientExpectsToSend: Int64 { @objc get @objc (setCountOfBytesClientExpectsToSend:) set }
	@objc var countOfBytesExpectedToReceive: Int64 { @objc get }
	@objc var countOfBytesExpectedToSend: Int64 { @objc get }
	@objc var countOfBytesReceived: Int64 { @objc get }
	@objc var countOfBytesSent: Int64 { @objc get }
	@objc var currentRequest: URLRequest? { get }
	@objc @available(OSX 10.13, *) var earliestBeginDate: Date? { @objc get @objc (setEarliestBeginDate:) set }
	@objc var error: Error? { @objc get }
	@objc var originalRequest: URLRequest? { get }
	@objc @available(OSX 10.10, *) var priority: Float { @objc get @objc (setPriority:) set }
	@objc var response: URLResponse? { @objc get }
	@objc var state: URLSessionTask.State { @objc get }
	@objc var taskDescription: String? { @objc get @objc (setTaskDescription:) set }
	@objc var taskIdentifier: Int { @objc get }

	// Constructors
	@objc static func create() -> URLSessionTask
}

extension URLSessionTask: URLSessionTaskExports {
	@objc class func create() -> URLSessionTask {
		return URLSessionTask()
	}

}
