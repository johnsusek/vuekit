import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CALayerExports: JSExport {
	// , CAMediaTimingExports, NSSecureCodingExports
	// Static Methods
	@objc @available(OSX 10.15, *) static func cornerCurveExpansionFactor(_: CALayerCornerCurve) -> CGFloat
	@objc (defaultActionForKey:) static func defaultAction(forKey: String) -> CAAction?
	@objc (defaultValueForKey:) static func defaultValue(forKey: String) -> Any?
	@objc static func create(remoteClientId: UInt32) -> CALayer
	@objc (needsDisplayForKey:) static func needsDisplay(forKey: String) -> Bool

	// Instance Methods
	@objc (actionForKey:) func action(forKey: String) -> CAAction?
	@objc (addAnimation:forKey:) func add(_: CAAnimation, forKey: String?)
	@objc func addConstraint(_: CAConstraint)
	@objc func addSublayer(_: CALayer)
	@objc func affineTransform() -> CGAffineTransform
	@objc (animationForKey:) func animation(forKey: String) -> CAAnimation?
	@objc func animationKeys() -> [String]?
	@objc (containsPoint:) func contains(_: NSPoint) -> Bool
	@objc func contentsAreFlipped() -> Bool
	@objc (convertPoint:fromLayer:) func convert(_: NSPoint, from: CALayer?) -> NSPoint
	@objc (convertPoint:toLayer:) func convert(_: NSPoint, to: CALayer?) -> NSPoint
	@objc (convertRect:fromLayer:) func convert(_: NSRect, from: CALayer?) -> NSRect
	@objc (convertRect:toLayer:) func convert(_: NSRect, to: CALayer?) -> NSRect
	@objc (convertTime:fromLayer:) func convertTime(_: CFTimeInterval, from: CALayer?) -> CFTimeInterval
	@objc (convertTime:toLayer:) func convertTime(_: CFTimeInterval, to: CALayer?) -> CFTimeInterval
	@objc func display()
	@objc func displayIfNeeded()
	@objc (drawInContext:) func draw(in: CGContext)
	@objc func hitTest(_: NSPoint) -> CALayer?
	@objc func insertSublayer(_: CALayer, above: CALayer?)
	@objc (insertSublayer:atIndex:) func insertSublayer(_ layer: CALayer, at idx: UInt32)
	@objc func insertSublayer(_: CALayer, below: CALayer?)
	@objc func layoutIfNeeded()
	@objc func layoutSublayers()
	@objc (modelLayer) func model() -> CALayer
	@objc func needsDisplay() -> Bool
	@objc func needsLayout() -> Bool
	@objc func preferredFrameSize() -> NSSize
	@objc (presentationLayer) func presentation() -> CALayer?
	@objc func removeAllAnimations()
	@objc (removeAnimationForKey:) func removeAnimation(forKey: String)
	@objc func removeFromSuperlayer()
	@objc (renderInContext:) func render(in: CGContext)
	@objc func replaceSublayer(_: CALayer, with: CALayer)
	@objc (resizeSublayersWithOldSize:) func resizeSublayers(withOldSize: NSSize)
	@objc (resizeWithOldSuperlayerSize:) func resize(withOldSuperlayerSize: NSSize)
	@objc (scrollPoint:) func scroll(_: NSPoint)
	@objc func scrollRectToVisible(_: NSRect)
	@objc func setAffineTransform(_: CGAffineTransform)
	@objc func setNeedsDisplay()
	@objc (setNeedsDisplayInRect:) func setNeedsDisplay(_: NSRect)
	@objc func setNeedsLayout()
	@objc (shouldArchiveValueForKey:) func shouldArchiveValue(forKey: String) -> Bool

	// Own Instance Properties
	@objc var actions: [String: CAAction]? { @objc get @objc (setActions:) set }
	@objc @available(OSX 10.10, *) var allowsEdgeAntialiasing: Bool { @objc get @objc (setAllowsEdgeAntialiasing:) set }
	@objc @available(OSX 10.10, *) var allowsGroupOpacity: Bool { @objc get @objc (setAllowsGroupOpacity:) set }
	@objc var anchorPoint: NSPoint { @objc get @objc (setAnchorPoint:) set }
	@objc var anchorPointZ: CGFloat { get set }
	@objc var autoresizingMask: CAAutoresizingMask { @objc get @objc (setAutoresizingMask:) set }
	@objc var backgroundColor: CGColor? { @objc get @objc (setBackgroundColor:) set }
	@objc var backgroundFilters: [Any]? { @objc get @objc (setBackgroundFilters:) set }
	@objc var borderColor: CGColor? { @objc get @objc (setBorderColor:) set }
	@objc var borderWidth: CGFloat { get set }
	@objc var bounds: NSRect { @objc get @objc (setBounds:) set }
	@objc var compositingFilter: Any? { @objc get @objc (setCompositingFilter:) set }
	@objc var constraints: [CAConstraint]? { @objc get @objc (setConstraints:) set }
	@objc var contents: Any? { @objc get @objc (setContents:) set }
	@objc var contentsCenter: NSRect { @objc get @objc (setContentsCenter:) set }
	@objc @available(OSX 10.12, *) var contentsFormat: CALayerContentsFormat { @objc get @objc (setContentsFormat:) set }
	@objc var contentsGravity: CALayerContentsGravity { @objc get @objc (setContentsGravity:) set }
	@objc var contentsRect: NSRect { @objc get @objc (setContentsRect:) set }
	@objc @available(OSX 10.7, *) var contentsScale: CGFloat { get set }
	@objc @available(OSX 10.15, *) var cornerCurve: CALayerCornerCurve { @objc get @objc (setCornerCurve:) set }
	@objc var cornerRadius: CGFloat { get set }
	@objc var delegate: CALayerDelegate? { @objc get @objc (setDelegate:) set }
	@objc var isDoubleSided: Bool { @objc get @objc (setDoubleSided:) set }
	@objc @available(OSX 10.8, *) var drawsAsynchronously: Bool { @objc get @objc (setDrawsAsynchronously:) set }
	@objc var edgeAntialiasingMask: CAEdgeAntialiasingMask { @objc get @objc (setEdgeAntialiasingMask:) set }
	@objc var filters: [Any]? { @objc get @objc (setFilters:) set }
	@objc var frame: NSRect { @objc get @objc (setFrame:) set }
	@objc var isGeometryFlipped: Bool { @objc get @objc (setGeometryFlipped:) set }
	@objc var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var layoutManager: CALayoutManager? { @objc get @objc (setLayoutManager:) set }
	@objc var magnificationFilter: CALayerContentsFilter { @objc get @objc (setMagnificationFilter:) set }
	@objc var mask: CALayer? { @objc get @objc (setMask:) set }
	@objc @available(OSX 10.13, *) var maskedCorners: CACornerMask { @objc get @objc (setMaskedCorners:) set }
	@objc var masksToBounds: Bool { @objc get @objc (setMasksToBounds:) set }
	@objc var minificationFilter: CALayerContentsFilter { @objc get @objc (setMinificationFilter:) set }
	@objc var minificationFilterBias: Float { @objc get @objc (setMinificationFilterBias:) set }
	@objc var name: String? { @objc get @objc (setName:) set }
	@objc var needsDisplayOnBoundsChange: Bool { @objc get @objc (setNeedsDisplayOnBoundsChange:) set }
	@objc var opacity: Float { @objc get @objc (setOpacity:) set }
	@objc var isOpaque: Bool { @objc get @objc (setOpaque:) set }
	@objc var position: NSPoint { @objc get @objc (setPosition:) set }
	@objc var rasterizationScale: CGFloat { get set }
	@objc var shadowColor: CGColor? { @objc get @objc (setShadowColor:) set }
	@objc var shadowOffset: NSSize { @objc get @objc (setShadowOffset:) set }
	@objc var shadowOpacity: Float { @objc get @objc (setShadowOpacity:) set }
	@objc var shadowPath: CGPath? { @objc get @objc (setShadowPath:) set }
	@objc var shadowRadius: CGFloat { get set }
	@objc var shouldRasterize: Bool { @objc get @objc (setShouldRasterize:) set }
	@objc var style: [AnyHashable: Any]? { @objc get @objc (setStyle:) set }
	@objc var sublayerTransform: CATransform3D { @objc get @objc (setSublayerTransform:) set }
	@objc var sublayers: [CALayer]? { @objc get @objc (setSublayers:) set }
	@objc var superlayer: CALayer? { @objc get }
	@objc var transform: CATransform3D { @objc get @objc (setTransform:) set }
	@objc var visibleRect: NSRect { @objc get }
	@objc var zPosition: CGFloat { get set }

	// Constructors
	@objc static func create() -> CALayer
	@objc static func create(layer: Any) -> CALayer
	@objc (modelLayer) static func model() -> CALayer
	@objc (presentationLayer) static func presentation() -> CALayer?
}

extension CALayer: CALayerExports {
	@objc class func create() -> CALayer {
		return CALayer()
	}

	@objc class func create(remoteClientId: UInt32) -> CALayer {
		return CALayer(remoteClientId: remoteClientId)
	}

	@objc class func create(layer: Any) -> CALayer {
		return CALayer(layer: layer)
	}

	@objc (modelLayer) class func model() -> CALayer {
		return model()
	}

	@objc (presentationLayer) class func presentation() -> CALayer? {
		return presentation()
	}

}
