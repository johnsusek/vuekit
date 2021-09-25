import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAsynchronousCIImageFilteringRequestExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc (finishWithError:) func finish(with: Error)
	@objc (finishWithImage:context:) func finish(with: CIImage, context: CIContext?)

	// Own Instance Properties
	@objc var compositionTime: CMTime { @objc get }
	@objc var renderSize: NSSize { @objc get }
	@objc var sourceImage: CIImage { @objc get }

	// Constructors
	@objc static func create() -> AVAsynchronousCIImageFilteringRequest
}

extension AVAsynchronousCIImageFilteringRequest: AVAsynchronousCIImageFilteringRequestExports {
	@objc class func create() -> AVAsynchronousCIImageFilteringRequest {
		return AVAsynchronousCIImageFilteringRequest()
	}

}
