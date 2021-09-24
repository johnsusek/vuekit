import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CISamplerExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var definition: CIFilterShape { @objc get }
	@objc var extent: NSRect { @objc get }
}

extension CISampler: CISamplerExports {}
