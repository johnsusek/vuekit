import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetTrackSegmentExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var isEmpty: Bool { @objc get }
	@objc var timeMapping: CMTimeMapping { @objc get }

	// Constructors
}

extension AVAssetTrackSegment: AVAssetTrackSegmentExports {
}
