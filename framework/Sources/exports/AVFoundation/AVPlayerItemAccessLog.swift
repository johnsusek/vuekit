import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerItemAccessLogExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc func extendedLogData() -> Data?

	// Own Instance Properties
	@objc var events: [AVPlayerItemAccessLogEvent] { @objc get }
	@objc var extendedLogDataStringEncoding: UInt { get }

	// Constructors
}

extension AVPlayerItemAccessLog: AVPlayerItemAccessLogExports {
}
