import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIQRCodeFeatureExports: JSExport, CIFeatureExports {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Own Instance Properties
	@objc var bottomLeft: NSPoint { @objc get }
	@objc var bottomRight: NSPoint { @objc get }
	@objc var messageString: String? { @objc get }
	@objc @available(OSX 10.13, *) var symbolDescriptor: CIQRCodeDescriptor? { @objc get }
	@objc var topLeft: NSPoint { @objc get }
	@objc var topRight: NSPoint { @objc get }

	// Constructors
	@objc static func create() -> CIQRCodeFeature
}

extension CIQRCodeFeature: CIQRCodeFeatureExports {
	@objc override class func create() -> CIQRCodeFeature {
		return CIQRCodeFeature()
	}

}
