import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetWriterExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (addInput:) func add(_: AVAssetWriterInput)
	@objc (addInputGroup:) @available(OSX 10.9, *) func add(_: AVAssetWriterInputGroup)
	@objc (canAddInput:) func canAdd(_: AVAssetWriterInput) -> Bool
	@objc (canAddInputGroup:) @available(OSX 10.9, *) func canAdd(_: AVAssetWriterInputGroup) -> Bool
	@objc (canApplyOutputSettings:forMediaType:) func canApply(outputSettings: [String: Any]?, forMediaType: AVMediaType) -> Bool
	@objc func cancelWriting()
	@objc (endSessionAtSourceTime:) func endSession(atSourceTime: CMTime)
	@objc (finishWritingWithCompletionHandler:) @available(OSX 10.9, *) func finishWriting(completionHandler handler: @escaping () -> Void)
	@objc (startSessionAtSourceTime:) func startSession(atSourceTime: CMTime)
	@objc func startWriting() -> Bool

	// Own Instance Properties
	@objc var availableMediaTypes: [AVMediaType] { get }
	@objc @available(OSX 10.10, *) var directoryForTemporaryFiles: URL? { get set }
	@objc var error: Error? { @objc get }
	@objc @available(OSX 10.9, *) var inputGroups: [AVAssetWriterInputGroup] { @objc get }
	@objc var inputs: [AVAssetWriterInput] { @objc get }
	@objc var metadata: [AVMetadataItem] { @objc get @objc (setMetadata:) set }
	@objc var movieFragmentInterval: CMTime { @objc get @objc (setMovieFragmentInterval:) set }
	@objc @available(OSX 10.7, *) var movieTimeScale: CMTimeScale { @objc get @objc (setMovieTimeScale:) set }
	@objc var outputFileType: AVFileType { @objc get }
	@objc var outputURL: URL { get }
	@objc var overallDurationHint: CMTime { @objc get @objc (setOverallDurationHint:) set }
	@objc var shouldOptimizeForNetworkUse: Bool { @objc get @objc (setShouldOptimizeForNetworkUse:) set }
	@objc var status: AVAssetWriter.Status { @objc get }
}

extension AVAssetWriter: AVAssetWriterExports {}
