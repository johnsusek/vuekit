import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVVideoCompositionLayerInstructionExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (getCropRectangleRampForTime:startCropRectangle:endCropRectangle:timeRange:) @available(OSX 10.9, *) func getCropRectangleRamp(`for`: CMTime, startCropRectangle: UnsafeMutablePointer<NSRect>?, endCropRectangle: UnsafeMutablePointer<NSRect>?, timeRange: UnsafeMutablePointer<CMTimeRange>?) -> Bool
	@objc (getOpacityRampForTime:startOpacity:endOpacity:timeRange:) func getOpacityRamp(for time: CMTime, startOpacity: UnsafeMutablePointer<Float>?, endOpacity: UnsafeMutablePointer<Float>?, timeRange: UnsafeMutablePointer<CMTimeRange>?) -> Bool
	@objc (getTransformRampForTime:startTransform:endTransform:timeRange:) func getTransformRamp(`for`: CMTime, start: UnsafeMutablePointer<CGAffineTransform>?, end: UnsafeMutablePointer<CGAffineTransform>?, timeRange: UnsafeMutablePointer<CMTimeRange>?) -> Bool

	// Own Instance Properties
	@objc var trackID: CMPersistentTrackID { @objc get }

	// Constructors
}

extension AVVideoCompositionLayerInstruction: AVVideoCompositionLayerInstructionExports {
}
