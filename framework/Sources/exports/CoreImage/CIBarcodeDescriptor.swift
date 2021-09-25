import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIBarcodeDescriptorExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Constructors
	@objc static func create() -> CIBarcodeDescriptor
}

extension CIBarcodeDescriptor: CIBarcodeDescriptorExports {
	@objc class func create() -> CIBarcodeDescriptor {
		return CIBarcodeDescriptor()
	}

}
