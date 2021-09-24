import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIImageAccumulatorExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func clear()
	@objc func image() -> CIImage
	@objc func setImage(_: CIImage)
	@objc func setImage(_: CIImage, dirtyRect: NSRect)

	// Own Instance Properties
	@objc var extent: NSRect { @objc get }
	@objc var format: CIFormat { @objc get }

	// Constructors
	@objc static func create(extent: NSRect, format: CIFormat) -> CIImageAccumulator?
	@objc @available(OSX 10.7, *) static func create(extent: NSRect, format: CIFormat, colorSpace: CGColorSpace) -> CIImageAccumulator?
}

extension CIImageAccumulator: CIImageAccumulatorExports {
	@objc class func create(extent: NSRect, format: CIFormat) -> CIImageAccumulator? {
		return CIImageAccumulator(extent: extent, format: format)
	}

	@objc @available(OSX 10.7, *) class func create(extent: NSRect, format: CIFormat, colorSpace: CGColorSpace) -> CIImageAccumulator? {
		return CIImageAccumulator(extent: extent, format: format, colorSpace: colorSpace)
	}

}
