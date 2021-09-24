import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIFaceFeatureExports: JSExport, CIFeatureExports {
	// Static Methods

	// Own Instance Properties
	@objc var faceAngle: Float { @objc get }
	@objc var hasFaceAngle: Bool { @objc get }
	@objc var hasLeftEyePosition: Bool { @objc get }
	@objc var hasMouthPosition: Bool { @objc get }
	@objc var hasRightEyePosition: Bool { @objc get }
	@objc var hasSmile: Bool { @objc get }
	@objc var hasTrackingFrameCount: Bool { @objc get }
	@objc var hasTrackingID: Bool { @objc get }
	@objc var leftEyeClosed: Bool { @objc get }
	@objc var leftEyePosition: NSPoint { @objc get }
	@objc var mouthPosition: NSPoint { @objc get }
	@objc var rightEyeClosed: Bool { @objc get }
	@objc var rightEyePosition: NSPoint { @objc get }
	@objc var trackingFrameCount: Int32 { get }
	@objc var trackingID: Int32 { get }

	// Constructors
}

extension CIFaceFeature: CIFaceFeatureExports {
}
