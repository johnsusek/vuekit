import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCaptureDeviceExports: JSExport {
	// Static Methods
	@objc (authorizationStatusForMediaType:) @available(OSX 10.14, *) static func authorizationStatus(`for`: AVMediaType) -> AVAuthorizationStatus
	@objc (defaultDeviceWithDeviceType:mediaType:position:) @available(OSX 10.15, *) static func `default`(_: AVCaptureDevice.DeviceType, `for`: AVMediaType?, position: AVCaptureDevice.Position) -> AVCaptureDevice?
	@objc (defaultDeviceWithMediaType:) static func `default`(`for`: AVMediaType) -> AVCaptureDevice?
	// jsvalue - @objc (requestAccessForMediaType:completionHandler:) @available(OSX 10.14, *) static func requestAccess(`for`: AVMediaType, completionHandler: JSValue)

	// Instance Methods
	@objc func hasMediaType(_: AVMediaType) -> Bool
	@objc func isExposureModeSupported(_: AVCaptureDevice.ExposureMode) -> Bool
	@objc func isFlashModeSupported(_: AVCaptureDevice.FlashMode) -> Bool
	@objc func isFocusModeSupported(_: AVCaptureDevice.FocusMode) -> Bool
	@objc func isTorchModeSupported(_: AVCaptureDevice.TorchMode) -> Bool
	@objc func isWhiteBalanceModeSupported(_: AVCaptureDevice.WhiteBalanceMode) -> Bool
	// throws - @objc func lockForConfiguration() -> Bool
	// last error param - @objc (setTorchModeOnWithLevel:error:) @available(OSX 10.15, *) func setTorchModeOn(level: Float) -> Bool
	@objc func setTransportControlsPlaybackMode(_: AVCaptureDevice.TransportControlsPlaybackMode, speed: AVCaptureDevice.TransportControlsSpeed)
	@objc (supportsAVCaptureSessionPreset:) func supportsSessionPreset(_: AVCaptureSession.Preset) -> Bool
	@objc func unlockForConfiguration()

	// Own Instance Properties
	@objc @available(OSX 10.15, *) var activeColorSpace: AVCaptureColorSpace { @objc get @objc (setActiveColorSpace:) set }
	@objc var activeFormat: AVCaptureDevice.Format { @objc get @objc (setActiveFormat:) set }
	@objc var activeInputSource: AVCaptureDevice.InputSource? { @objc get @objc (setActiveInputSource:) set }
	@objc @available(OSX 10.9, *) var activeVideoMaxFrameDuration: CMTime { @objc get @objc (setActiveVideoMaxFrameDuration:) set }
	@objc var activeVideoMinFrameDuration: CMTime { @objc get @objc (setActiveVideoMinFrameDuration:) set }
	@objc var isAdjustingExposure: Bool { @objc get }
	@objc var isAdjustingFocus: Bool { @objc get }
	@objc var isAdjustingWhiteBalance: Bool { @objc get }
	@objc var isConnected: Bool { @objc get }
	@objc @available(OSX 10.15, *) var deviceType: AVCaptureDevice.DeviceType { @objc get }
	@objc var exposureMode: AVCaptureDevice.ExposureMode { @objc get @objc (setExposureMode:) set }
	@objc var exposurePointOfInterest: NSPoint { @objc get @objc (setExposurePointOfInterest:) set }
	@objc var isExposurePointOfInterestSupported: Bool { @objc get }
	@objc @available(OSX 10.15, *) var isFlashAvailable: Bool { @objc get }
	@objc var flashMode: AVCaptureDevice.FlashMode { @objc get @objc (setFlashMode:) set }
	@objc var focusMode: AVCaptureDevice.FocusMode { @objc get @objc (setFocusMode:) set }
	@objc var focusPointOfInterest: NSPoint { @objc get @objc (setFocusPointOfInterest:) set }
	@objc var isFocusPointOfInterestSupported: Bool { @objc get }
	@objc var formats: [AVCaptureDevice.Format] { @objc get }
	@objc var hasFlash: Bool { @objc get }
	@objc var hasTorch: Bool { @objc get }
	@objc var isInUseByAnotherApplication: Bool { @objc get }
	@objc var inputSources: [AVCaptureDevice.InputSource] { @objc get }
	@objc var linkedDevices: [AVCaptureDevice] { @objc get }
	@objc var localizedName: String { @objc get }
	@objc @available(OSX 10.9, *) var manufacturer: String { @objc get }
	@objc var modelID: String { @objc get }
	@objc var position: AVCaptureDevice.Position { @objc get }
	@objc var isSuspended: Bool { @objc get }
	@objc @available(OSX 10.15, *) var isTorchActive: Bool { @objc get }
	@objc @available(OSX 10.15, *) var isTorchAvailable: Bool { @objc get }
	@objc @available(OSX 10.15, *) var torchLevel: Float { @objc get }
	@objc var torchMode: AVCaptureDevice.TorchMode { @objc get @objc (setTorchMode:) set }
	@objc var transportControlsPlaybackMode: AVCaptureDevice.TransportControlsPlaybackMode { @objc get }
	@objc var transportControlsSpeed: AVCaptureDevice.TransportControlsSpeed { @objc get }
	@objc var transportControlsSupported: Bool { @objc get }
	@objc var transportType: Int32 { @objc get }
	@objc var uniqueID: String { @objc get }
	@objc var whiteBalanceMode: AVCaptureDevice.WhiteBalanceMode { @objc get @objc (setWhiteBalanceMode:) set }

	// Constructors
}

extension AVCaptureDevice: AVCaptureDeviceExports {
}
