import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLSessionTaskMetricsExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var redirectCount: Int { @objc get }
	@objc var taskInterval: DateInterval { get }
	@objc var transactionMetrics: [URLSessionTaskTransactionMetrics] { @objc get }

	// Constructors
}

extension URLSessionTaskMetrics: URLSessionTaskMetricsExports {
}
