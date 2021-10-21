import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLSessionTaskTransactionMetricsExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc @available(OSX 10.15, *) var isCellular: Bool { @objc (isCellular) get }
	@objc var connectEndDate: Date? { @objc get }
	@objc var connectStartDate: Date? { @objc get }
	@objc @available(OSX 10.15, *) var isConstrained: Bool { @objc (isConstrained) get }
	@objc @available(OSX 10.15, *) var countOfRequestBodyBytesBeforeEncoding: Int64 { @objc get }
	@objc @available(OSX 10.15, *) var countOfRequestBodyBytesSent: Int64 { @objc get }
	@objc @available(OSX 10.15, *) var countOfRequestHeaderBytesSent: Int64 { @objc get }
	@objc @available(OSX 10.15, *) var countOfResponseBodyBytesAfterDecoding: Int64 { @objc get }
	@objc @available(OSX 10.15, *) var countOfResponseBodyBytesReceived: Int64 { @objc get }
	@objc @available(OSX 10.15, *) var countOfResponseHeaderBytesReceived: Int64 { @objc get }
	@objc var domainLookupEndDate: Date? { @objc get }
	@objc var domainLookupStartDate: Date? { @objc get }
	@objc @available(OSX 10.15, *) var isExpensive: Bool { @objc (isExpensive) get }
	@objc var fetchStartDate: Date? { @objc get }
	@objc @available(OSX 10.15, *) var localAddress: String? { @objc get }
	// @objc @available(OSX 10.15, *) var localPort: Int? { get }
	@objc @available(OSX 10.15, *) var isMultipath: Bool { @objc (isMultipath) get }
	// @objc @available(OSX 10.15, *) var negotiatedTLSCipherSuite: tls_ciphersuite_t? { get }
	// @objc @available(OSX 10.15, *) var negotiatedTLSProtocolVersion: tls_protocol_version_t? { get }
	@objc var networkProtocolName: String? { @objc get }
	@objc var isProxyConnection: Bool { @objc (isProxyConnection) get }
	@objc @available(OSX 10.15, *) var remoteAddress: String? { @objc get }
	// @objc @available(OSX 10.15, *) var remotePort: Int? { get }
	@objc var request: URLRequest { get }
	@objc var requestEndDate: Date? { @objc get }
	@objc var requestStartDate: Date? { @objc get }
	@objc var resourceFetchType: URLSessionTaskMetrics.ResourceFetchType { @objc get }
	@objc var response: URLResponse? { @objc get }
	@objc var responseEndDate: Date? { @objc get }
	@objc var responseStartDate: Date? { @objc get }
	@objc var isReusedConnection: Bool { @objc (isReusedConnection) get }
	@objc var secureConnectionEndDate: Date? { @objc get }
	@objc var secureConnectionStartDate: Date? { @objc get }
}

extension URLSessionTaskTransactionMetrics: URLSessionTaskTransactionMetricsExports {

}
