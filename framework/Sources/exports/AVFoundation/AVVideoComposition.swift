import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVVideoCompositionExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports
	// Static Methods

	// Instance Methods
	@objc (isValidForAsset:timeRange:validationDelegate:) @available(OSX 10.8, *) func isValid(`for`: AVAsset?, timeRange: CMTimeRange, validationDelegate: AVVideoCompositionValidationHandling?) -> Bool

	// Own Instance Properties
	@objc var animationTool: AVVideoCompositionCoreAnimationTool? { @objc get }
	@objc @available(OSX 10.12, *) var colorPrimaries: String? { @objc get }
	@objc @available(OSX 10.12, *) var colorTransferFunction: String? { @objc get }
	@objc @available(OSX 10.12, *) var colorYCbCrMatrix: String? { @objc get }
	@objc @available(OSX 10.9, *) var customVideoCompositorClass: AVVideoCompositing.Type? { @objc get }
	@objc var frameDuration: CMTime { @objc get }
	@objc var instructions: [AVVideoCompositionInstructionProtocol] { @objc get }
	@objc @available(OSX 10.14, *) var renderScale: Float { @objc get }
	@objc var renderSize: NSSize { @objc get }
	@objc @available(OSX 10.13, *) var sourceTrackIDForFrameTiming: CMPersistentTrackID { @objc get }

	// Constructors
	@objc static func create() -> AVVideoComposition
}

extension AVVideoComposition: AVVideoCompositionExports {
	@objc class func create() -> AVVideoComposition {
		return AVVideoComposition()
	}

}
