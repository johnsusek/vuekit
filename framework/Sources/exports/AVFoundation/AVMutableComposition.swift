import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMutableCompositionExports: JSExport, AVCompositionExports {
	// Static Methods

	// Instance Methods
	@objc (addMutableTrackWithMediaType:preferredTrackID:) func addMutableTrack(withMediaType: AVMediaType, preferredTrackID: CMPersistentTrackID) -> AVMutableCompositionTrack?
	@objc (insertEmptyTimeRange:) func insertEmptyTimeRange(_: CMTimeRange)
	// last error param - @objc (insertTimeRange:ofAsset:atTime:error:) func insertTimeRange(_: CMTimeRange, of: AVAsset, at: CMTime) -> Bool
	@objc (mutableTrackCompatibleWithTrack:) func mutableTrack(compatibleWith: AVAssetTrack) -> AVMutableCompositionTrack?
	@objc (removeTimeRange:) func removeTimeRange(_: CMTimeRange)
	@objc func removeTrack(_: AVCompositionTrack)
	@objc (scaleTimeRange:toDuration:) func scaleTimeRange(_: CMTimeRange, toDuration: CMTime)
	@objc (trackWithTrackID:) func track(withTrackID: CMPersistentTrackID) -> AVMutableCompositionTrack?

	// Own Instance Properties
	@objc var naturalSize: NSSize { @objc get @objc (setNaturalSize:) set }
}

extension AVMutableComposition: AVMutableCompositionExports {}
