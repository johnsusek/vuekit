import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerItemErrorLogExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc func extendedLogData() -> Data?

	// Own Instance Properties
	@objc var events: [AVPlayerItemErrorLogEvent] { @objc get }
	@objc var extendedLogDataStringEncoding: UInt { get }

	// Constructors
}

extension AVPlayerItemErrorLog: AVPlayerItemErrorLogExports {
}
