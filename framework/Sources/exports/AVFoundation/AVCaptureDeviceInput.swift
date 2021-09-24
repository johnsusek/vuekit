import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCaptureDeviceInputExports: JSExport, AVCaptureInputExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var device: AVCaptureDevice { @objc get }
}

extension AVCaptureDeviceInput: AVCaptureDeviceInputExports {}
