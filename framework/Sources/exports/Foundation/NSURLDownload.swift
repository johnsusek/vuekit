import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSURLDownloadExports: JSExport {
	// Static Methods
	@objc (canResumeDownloadDecodedWithEncodingMIMEType:) static func canResumeDownloadDecoded(withEncodingMIMEType: String) -> Bool

	// Instance Methods
	@objc func cancel()
	@objc func setDestination(_: String, allowOverwrite: Bool)

	// Own Instance Properties
	@objc var deletesFileUponFailure: Bool { @objc get @objc (setDeletesFileUponFailure:) set }
	@objc var request: URLRequest { get }
	@objc var resumeData: Data? { @objc get }

	// Constructors
}

extension NSURLDownload: NSURLDownloadExports {
}
