import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSURLConnectionExports: JSExport {
	// Static Methods
	@objc (canHandleRequest:) static func canHandle(_ request: URLRequest) -> Bool

	// Instance Methods
	@objc func cancel()
	@objc (scheduleInRunLoop:forMode:) @available(OSX 10.5, *) func schedule(in: RunLoop, forMode: RunLoop.Mode)
	@objc @available(OSX 10.7, *) func setDelegateQueue(_: OperationQueue?)
	@objc @available(OSX 10.5, *) func start()
	@objc (unscheduleFromRunLoop:forMode:) @available(OSX 10.5, *) func unschedule(from: RunLoop, forMode: RunLoop.Mode)

	// Own Instance Properties
	@objc @available(OSX 10.8, *) var currentRequest: URLRequest { get }
	@objc @available(OSX 10.8, *) var originalRequest: URLRequest { get }

	// Constructors
}

extension NSURLConnection: NSURLConnectionExports {
}
