import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMetadataObjectExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var bounds: NSRect { @objc get }
	@objc var duration: CMTime { @objc get }
	@objc var time: CMTime { @objc get }
	@objc var type: AVMetadataObject.ObjectType { @objc get }

	// Constructors
}

extension AVMetadataObject: AVMetadataObjectExports {
}
