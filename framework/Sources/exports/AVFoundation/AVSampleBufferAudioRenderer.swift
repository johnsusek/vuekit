import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVSampleBufferAudioRendererExports: JSExport {
	// , AVQueuedSampleBufferRenderingExports
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (flushFromSourceTime:completionHandler:) func flush(fromSourceTime: CMTime, completionHandler: JSValue)

	// Own Instance Properties
	@objc @available(OSX 10.13, *) var audioOutputDeviceUniqueID: String? { @objc get @objc (setAudioOutputDeviceUniqueID:) set }
	@objc var audioTimePitchAlgorithm: AVAudioTimePitchAlgorithm { @objc get @objc (setAudioTimePitchAlgorithm:) set }
	@objc var error: Error? { @objc get }
	@objc var isMuted: Bool { @objc get @objc (setMuted:) set }
	@objc var status: AVQueuedSampleBufferRenderingStatus { @objc get }
	@objc var volume: Float { @objc get @objc (setVolume:) set }

	// Constructors
	@objc static func create() -> AVSampleBufferAudioRenderer
}

extension AVSampleBufferAudioRenderer: AVSampleBufferAudioRendererExports {
	@objc class func create() -> AVSampleBufferAudioRenderer {
		return AVSampleBufferAudioRenderer()
	}

}
