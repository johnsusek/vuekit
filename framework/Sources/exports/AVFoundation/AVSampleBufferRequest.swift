import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVSampleBufferRequestExports: JSExport {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var direction: AVSampleBufferRequest.Direction { @objc get @objc (setDirection:) set }
	@objc var limitCursor: AVSampleCursor? { @objc get @objc (setLimitCursor:) set }
	@objc var maxSampleCount: Int { @objc get @objc (setMaxSampleCount:) set }
	@objc var mode: AVSampleBufferRequest.Mode { @objc get @objc (setMode:) set }
	@objc var overrideTime: CMTime { @objc get @objc (setOverrideTime:) set }
	@objc var preferredMinSampleCount: Int { @objc get @objc (setPreferredMinSampleCount:) set }
	@objc var startCursor: AVSampleCursor { @objc get }
}

extension AVSampleBufferRequest: AVSampleBufferRequestExports {}
