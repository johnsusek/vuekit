import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIPDF417CodeDescriptorExports: JSExport, CIBarcodeDescriptorExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var columnCount: Int { @objc get }
	@objc var errorCorrectedPayload: Data { @objc get }
	@objc var isCompact: Bool { @objc get }
	@objc var rowCount: Int { @objc get }
}

extension CIPDF417CodeDescriptor: CIPDF417CodeDescriptorExports {}
