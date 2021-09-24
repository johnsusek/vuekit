import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMutableVideoCompositionLayerInstructionExports: JSExport, AVVideoCompositionLayerInstructionExports {
	// Static Methods

	// Instance Methods
	@objc (setCropRectangle:atTime:) @available(OSX 10.9, *) func setCropRectangle(_: NSRect, at: CMTime)
	@objc (setCropRectangleRampFromStartCropRectangle:toEndCropRectangle:timeRange:) @available(OSX 10.9, *) func setCropRectangleRamp(fromStartCropRectangle: NSRect, toEndCropRectangle: NSRect, timeRange: CMTimeRange)
	@objc (setOpacity:atTime:) func setOpacity(_: Float, at: CMTime)
	@objc (setOpacityRampFromStartOpacity:toEndOpacity:timeRange:) func setOpacityRamp(fromStartOpacity: Float, toEndOpacity: Float, timeRange: CMTimeRange)
	@objc (setTransform:atTime:) func setTransform(_: CGAffineTransform, at: CMTime)
	@objc (setTransformRampFromStartTransform:toEndTransform:timeRange:) func setTransformRamp(fromStart: CGAffineTransform, toEnd: CGAffineTransform, timeRange: CMTimeRange)

	// Own Instance Properties
	@objc var trackID: CMPersistentTrackID { @objc get @objc (setTrackID:) set }
}

extension AVMutableVideoCompositionLayerInstruction: AVMutableVideoCompositionLayerInstructionExports {}
