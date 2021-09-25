import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIFeatureExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var bounds: NSRect { @objc get }
	@objc var type: String { @objc get }

	// Constructors
	@objc static func create() -> CIFeature
}

extension CIFeature: CIFeatureExports {
	@objc class func create() -> CIFeature {
		return CIFeature()
	}

}
