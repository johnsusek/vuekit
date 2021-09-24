import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCompositionTrackSegmentExports: JSExport, AVAssetTrackSegmentExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var sourceTrackID: CMPersistentTrackID { @objc get }
	@objc var sourceURL: URL? { get }
}

extension AVCompositionTrackSegment: AVCompositionTrackSegmentExports {}
