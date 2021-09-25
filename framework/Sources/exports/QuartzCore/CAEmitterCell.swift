import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAEmitterCellExports: JSExport {
	// , CAMediaTimingExports, NSSecureCodingExports
	// Static Methods
	@objc (defaultValueForKey:) static func defaultValue(forKey: String) -> Any?

	// Instance Methods
	@objc (shouldArchiveValueForKey:) func shouldArchiveValue(forKey: String) -> Bool

	// Own Instance Properties
	@objc var alphaRange: Float { @objc get @objc (setAlphaRange:) set }
	@objc var alphaSpeed: Float { @objc get @objc (setAlphaSpeed:) set }
	@objc var birthRate: Float { @objc get @objc (setBirthRate:) set }
	@objc var blueRange: Float { @objc get @objc (setBlueRange:) set }
	@objc var blueSpeed: Float { @objc get @objc (setBlueSpeed:) set }
	@objc var color: CGColor? { @objc get @objc (setColor:) set }
	@objc var contents: Any? { @objc get @objc (setContents:) set }
	@objc var contentsRect: NSRect { @objc get @objc (setContentsRect:) set }
	@objc var contentsScale: CGFloat { get set }
	@objc var emissionLatitude: CGFloat { get set }
	@objc var emissionLongitude: CGFloat { get set }
	@objc var emissionRange: CGFloat { get set }
	@objc var emitterCells: [CAEmitterCell]? { @objc get @objc (setEmitterCells:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var greenRange: Float { @objc get @objc (setGreenRange:) set }
	@objc var greenSpeed: Float { @objc get @objc (setGreenSpeed:) set }
	@objc var lifetime: Float { @objc get @objc (setLifetime:) set }
	@objc var lifetimeRange: Float { @objc get @objc (setLifetimeRange:) set }
	@objc var magnificationFilter: String { @objc get @objc (setMagnificationFilter:) set }
	@objc var minificationFilter: String { @objc get @objc (setMinificationFilter:) set }
	@objc var minificationFilterBias: Float { @objc get @objc (setMinificationFilterBias:) set }
	@objc var name: String? { @objc get @objc (setName:) set }
	@objc var redRange: Float { @objc get @objc (setRedRange:) set }
	@objc var redSpeed: Float { @objc get @objc (setRedSpeed:) set }
	@objc var scale: CGFloat { get set }
	@objc var scaleRange: CGFloat { get set }
	@objc var scaleSpeed: CGFloat { get set }
	@objc var spin: CGFloat { get set }
	@objc var spinRange: CGFloat { get set }
	@objc var style: [AnyHashable: Any]? { @objc get @objc (setStyle:) set }
	@objc var velocity: CGFloat { get set }
	@objc var velocityRange: CGFloat { get set }
	@objc var xAcceleration: CGFloat { get set }
	@objc var yAcceleration: CGFloat { get set }
	@objc var zAcceleration: CGFloat { get set }

	// Constructors
	@objc static func create() -> CAEmitterCell
}

extension CAEmitterCell: CAEmitterCellExports {
	@objc class func create() -> CAEmitterCell {
		return CAEmitterCell()
	}

}
