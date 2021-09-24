import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerItemErrorLogEventExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc (URI) var uri: String? { @objc (URI) get }
	@objc var date: Date? { @objc get }
	@objc var errorComment: String? { @objc get }
	@objc var errorDomain: String { @objc get }
	@objc var errorStatusCode: Int { @objc get }
	@objc var playbackSessionID: String? { @objc get }
	@objc var serverAddress: String? { @objc get }

	// Constructors
}

extension AVPlayerItemErrorLogEvent: AVPlayerItemErrorLogEventExports {
}
