import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIAztecCodeDescriptorExports: JSExport, CIBarcodeDescriptorExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var dataCodewordCount: Int { @objc get }
	@objc var errorCorrectedPayload: Data { @objc get }
	@objc var isCompact: Bool { @objc get }
	@objc var layerCount: Int { @objc get }
}

extension CIAztecCodeDescriptor: CIAztecCodeDescriptorExports {}
