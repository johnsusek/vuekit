import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMetadataFaceObjectExports: JSExport, AVMetadataObjectExports {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var faceID: Int { @objc get }
	@objc var hasRollAngle: Bool { @objc get }
	@objc var hasYawAngle: Bool { @objc get }
	@objc var rollAngle: CGFloat { get }
	@objc var yawAngle: CGFloat { get }

	// Constructors
}

extension AVMetadataFaceObject: AVMetadataFaceObjectExports {
}
