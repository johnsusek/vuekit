import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAShapeLayerExports: JSExport, CALayerExports {
	// Static Methods

	// Own Instance Properties
	@objc var fillColor: CGColor? { @objc get @objc (setFillColor:) set }
	@objc var fillRule: CAShapeLayerFillRule { @objc get @objc (setFillRule:) set }
	@objc var lineCap: CAShapeLayerLineCap { @objc get @objc (setLineCap:) set }
	@objc var lineDashPattern: [NSNumber]? { @objc get @objc (setLineDashPattern:) set }
	@objc var lineDashPhase: CGFloat { get set }
	@objc var lineJoin: CAShapeLayerLineJoin { @objc get @objc (setLineJoin:) set }
	@objc var lineWidth: CGFloat { get set }
	@objc var miterLimit: CGFloat { get set }
	@objc var path: CGPath? { @objc get @objc (setPath:) set }
	@objc var strokeColor: CGColor? { @objc get @objc (setStrokeColor:) set }
	@objc var strokeEnd: CGFloat { get set }
	@objc var strokeStart: CGFloat { get set }

	// Constructors
	@objc static func create() -> CAShapeLayer
}

extension CAShapeLayer: CAShapeLayerExports {
	@objc override class func create() -> CAShapeLayer {
		return CAShapeLayer()
	}

}
