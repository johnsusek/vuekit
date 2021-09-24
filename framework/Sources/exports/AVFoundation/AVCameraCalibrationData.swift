import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCameraCalibrationDataExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var extrinsicMatrix: simd_float4x3 { @objc get }
	@objc var intrinsicMatrix: simd_float3x3 { @objc get }
	@objc var intrinsicMatrixReferenceDimensions: NSSize { @objc get }
	@objc var inverseLensDistortionLookupTable: Data? { @objc get }
	@objc var lensDistortionCenter: NSPoint { @objc get }
	@objc var lensDistortionLookupTable: Data? { @objc get }
	@objc var pixelSize: Float { @objc get }

	// Constructors
}

extension AVCameraCalibrationData: AVCameraCalibrationDataExports {
}
