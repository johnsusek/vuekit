import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetImageGeneratorExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func cancelAllCGImageGeneration()
	// throws - @objc func copyCGImageAtTime(actualTime: CMTime, error: UnsafeMutablePointer<CMTime>?) -> CGImage?
	// jsvalue - @objc (generateCGImagesAsynchronouslyForTimes:completionHandler:) func generateCGImagesAsynchronously(forTimes: [NSValue], completionHandler: JSValue)

	// Own Instance Properties
	@objc var apertureMode: AVAssetImageGenerator.ApertureMode? { @objc get @objc (setApertureMode:) set }
	@objc var appliesPreferredTrackTransform: Bool { @objc get @objc (setAppliesPreferredTrackTransform:) set }
	@objc @available(OSX 10.9, *) var asset: AVAsset { @objc get }
	@objc @available(OSX 10.9, *) var customVideoCompositor: AVVideoCompositing? { @objc get }
	@objc var maximumSize: NSSize { @objc get @objc (setMaximumSize:) set }
	@objc @available(OSX 10.7, *) var requestedTimeToleranceAfter: CMTime { @objc get @objc (setRequestedTimeToleranceAfter:) set }
	@objc @available(OSX 10.7, *) var requestedTimeToleranceBefore: CMTime { @objc get @objc (setRequestedTimeToleranceBefore:) set }
	@objc var videoComposition: AVVideoComposition? { @objc get @objc (setVideoComposition:) set }

	// Constructors
	@objc static func create(asset: AVAsset) -> AVAssetImageGenerator
}

extension AVAssetImageGenerator: AVAssetImageGeneratorExports {
	@objc class func create(asset: AVAsset) -> AVAssetImageGenerator {
		return AVAssetImageGenerator(asset: asset)
	}

}
