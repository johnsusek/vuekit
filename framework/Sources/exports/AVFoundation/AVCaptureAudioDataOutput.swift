import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCaptureAudioDataOutputExports: JSExport, AVCaptureOutputExports {
	// Static Methods

	// Instance Methods
	@objc (recommendedAudioSettingsForAssetWriterWithOutputFileType:) @available(OSX 10.15, *) func recommendedAudioSettingsForAssetWriter(writingTo: AVFileType) -> [AnyHashable: Any]?
	@objc func setSampleBufferDelegate(_: AVCaptureAudioDataOutputSampleBufferDelegate?, queue: DispatchQueue?)

	// Own Instance Properties
	@objc var audioSettings: [String: Any]! { @objc get @objc (setAudioSettings:) set }
	@objc var sampleBufferCallbackQueue: DispatchQueue? { @objc get }
	@objc var sampleBufferDelegate: AVCaptureAudioDataOutputSampleBufferDelegate? { @objc get }

	// Constructors
}

extension AVCaptureAudioDataOutput: AVCaptureAudioDataOutputExports {
}
