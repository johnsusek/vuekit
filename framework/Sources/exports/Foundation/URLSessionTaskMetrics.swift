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
	@objc static func create() -> URLSessionTaskMetrics
}

extension URLSessionTaskMetrics: URLSessionTaskMetricsExports {
	@objc class func create() -> URLSessionTaskMetrics {
		return URLSessionTaskMetrics()
	}

}
