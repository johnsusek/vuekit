import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCaptureAudioPreviewOutputExports: JSExport, AVCaptureOutputExports {
	// Static Methods

	// Own Instance Properties
	@objc var outputDeviceUniqueID: String? { @objc get @objc (setOutputDeviceUniqueID:) set }
	@objc var volume: Float { @objc get @objc (setVolume:) set }

	// Constructors
}

extension AVCaptureAudioPreviewOutput: AVCaptureAudioPreviewOutputExports {
}
