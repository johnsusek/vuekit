import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVFrameRateRangeExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var maxFrameDuration: CMTime { @objc get }
	@objc var maxFrameRate: Float64 { @objc get }
	@objc var minFrameDuration: CMTime { @objc get }
	@objc var minFrameRate: Float64 { @objc get }

	// Constructors
}

extension AVFrameRateRange: AVFrameRateRangeExports {
}
