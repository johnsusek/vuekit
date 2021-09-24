import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCaptureInputExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var ports: [AVCaptureInput.Port] { @objc get }

	// Constructors
}

extension AVCaptureInput: AVCaptureInputExports {
}
