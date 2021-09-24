import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetWriterInputMetadataAdaptorExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (appendTimedMetadataGroup:) func append(_: AVTimedMetadataGroup) -> Bool

	// Own Instance Properties
	@objc var assetWriterInput: AVAssetWriterInput { @objc get }
}

extension AVAssetWriterInputMetadataAdaptor: AVAssetWriterInputMetadataAdaptorExports {}
