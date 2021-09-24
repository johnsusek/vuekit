import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetReaderOutputMetadataAdaptorExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func nextTimedMetadataGroup() -> AVTimedMetadataGroup?

	// Own Instance Properties
	@objc var assetReaderTrackOutput: AVAssetReaderTrackOutput { @objc get }
}

extension AVAssetReaderOutputMetadataAdaptor: AVAssetReaderOutputMetadataAdaptorExports {}
