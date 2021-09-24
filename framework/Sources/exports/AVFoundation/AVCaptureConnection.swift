import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCaptureConnectionExports: JSExport {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var isActive: Bool { @objc get }
	@objc var audioChannels: [AVCaptureAudioChannel] { @objc get }
	@objc var automaticallyAdjustsVideoMirroring: Bool { @objc get @objc (setAutomaticallyAdjustsVideoMirroring:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var inputPorts: [AVCaptureInput.Port] { @objc get }
	@objc var output: AVCaptureOutput? { @objc get }
	@objc var isVideoFieldModeSupported: Bool { @objc get }
	@objc @available(OSX 10.9, *) var isVideoMaxFrameDurationSupported: Bool { @objc get }
	@objc var isVideoMinFrameDurationSupported: Bool { @objc get }
	@objc var isVideoMirroringSupported: Bool { @objc get }
	@objc var isVideoOrientationSupported: Bool { @objc get }
	@objc var videoFieldMode: AVVideoFieldMode { @objc get @objc (setVideoFieldMode:) set }
	@objc @available(OSX 10.9, *) var videoMaxFrameDuration: CMTime { @objc get @objc (setVideoMaxFrameDuration:) set }
	@objc var videoMinFrameDuration: CMTime { @objc get @objc (setVideoMinFrameDuration:) set }
	@objc var isVideoMirrored: Bool { @objc get @objc (setVideoMirrored:) set }
	@objc var videoOrientation: AVCaptureVideoOrientation { @objc get @objc (setVideoOrientation:) set }
	@objc var videoPreviewLayer: AVCaptureVideoPreviewLayer? { @objc get }
}

extension AVCaptureConnection: AVCaptureConnectionExports {}
