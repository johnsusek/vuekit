import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCaptureAudioChannelExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var averagePowerLevel: Float { @objc get }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var peakHoldLevel: Float { @objc get }
	@objc var volume: Float { @objc get @objc (setVolume:) set }

	// Constructors
}

extension AVCaptureAudioChannel: AVCaptureAudioChannelExports {
}
