import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetReaderExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (addOutput:) func add(_: AVAssetReaderOutput)
	@objc (canAddOutput:) func canAdd(_: AVAssetReaderOutput) -> Bool
	@objc func cancelReading()
	@objc func startReading() -> Bool

	// Own Instance Properties
	@objc var asset: AVAsset { @objc get }
	@objc var error: Error? { @objc get }
	@objc var outputs: [AVAssetReaderOutput] { @objc get }
	@objc var status: AVAssetReader.Status { @objc get }
	@objc var timeRange: CMTimeRange { @objc get @objc (setTimeRange:) set }
}

extension AVAssetReader: AVAssetReaderExports {}
