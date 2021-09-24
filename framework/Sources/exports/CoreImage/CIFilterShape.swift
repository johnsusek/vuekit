import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIFilterShapeExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc (insetByX:Y:) func insetBy(x dx: Int32, y dy: Int32) -> CIFilterShape
	@objc (intersectWith:) func intersect(with: CIFilterShape) -> CIFilterShape
	@objc (intersectWithRect:) func intersect(with: NSRect) -> CIFilterShape
	@objc (transformBy:interior:) func transform(by: CGAffineTransform, interior: Bool) -> CIFilterShape
	@objc (unionWith:) func union(with: CIFilterShape) -> CIFilterShape
	@objc (unionWithRect:) func union(with: NSRect) -> CIFilterShape

	// Own Instance Properties
	@objc var extent: NSRect { @objc get }

	// Constructors
	@objc static func create(rect: NSRect) -> CIFilterShape
}

extension CIFilterShape: CIFilterShapeExports {
	@objc class func create(rect: NSRect) -> CIFilterShape {
		return CIFilterShape(rect: rect)
	}

}
