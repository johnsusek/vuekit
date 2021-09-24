import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAEDRMetadataExports: JSExport {
	// Static Methods
	@objc (HDR10MetadataWithDisplayInfo:contentInfo:opticalOutputScale:) static func hdr10(displayInfo: Data?, contentInfo: Data?, opticalOutputScale: Float) -> CAEDRMetadata
	@objc (HDR10MetadataWithMinLuminance:maxLuminance:opticalOutputScale:) static func hdr10(minLuminance: Float, maxLuminance: Float, opticalOutputScale: Float) -> CAEDRMetadata

	// Own Static Properties
	@objc (HLGMetadata) static var hlg: CAEDRMetadata { @objc (HLGMetadata) get }

	// Constructors
}

extension CAEDRMetadata: CAEDRMetadataExports {
}
