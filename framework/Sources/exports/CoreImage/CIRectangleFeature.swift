import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIRectangleFeatureExports: JSExport, CIFeatureExports {
	// Static Methods

	// Own Instance Properties
	@objc var bottomLeft: NSPoint { @objc get }
	@objc var bottomRight: NSPoint { @objc get }
	@objc var topLeft: NSPoint { @objc get }
	@objc var topRight: NSPoint { @objc get }

	// Constructors
	@objc static func create() -> CIRectangleFeature
}

extension CIRectangleFeature: CIRectangleFeatureExports {
	@objc override class func create() -> CIRectangleFeature {
		return CIRectangleFeature()
	}

}
