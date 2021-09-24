import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCaptureScreenInputExports: JSExport, AVCaptureInputExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc @available(OSX 10.8, *) var capturesCursor: Bool { @objc get @objc (setCapturesCursor:) set }
	@objc var capturesMouseClicks: Bool { @objc get @objc (setCapturesMouseClicks:) set }
	@objc var cropRect: NSRect { @objc get @objc (setCropRect:) set }
	@objc var minFrameDuration: CMTime { @objc get @objc (setMinFrameDuration:) set }
	@objc var scaleFactor: CGFloat { get set }

	// Constructors
	@objc static func create(displayID: CGDirectDisplayID) -> AVCaptureScreenInput?
}

extension AVCaptureScreenInput: AVCaptureScreenInputExports {
	@objc class func create(displayID: CGDirectDisplayID) -> AVCaptureScreenInput? {
		return AVCaptureScreenInput(displayID: displayID)
	}

}
