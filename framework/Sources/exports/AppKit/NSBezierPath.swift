import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSBezierPathExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods
	@objc (clipRect:) static func clip(_: NSRect)
	@objc (drawPackedGlyphs:atPoint:) static func drawPackedGlyphs(_: UnsafePointer<Int8>, at: NSPoint)
	@objc (fillRect:) static func fill(_: NSRect)
	@objc (strokeLineFromPoint:toPoint:) static func strokeLine(from: NSPoint, to: NSPoint)
	@objc (strokeRect:) static func stroke(_: NSRect)

	// Own Static Properties
	@objc static var defaultFlatness: CGFloat { get set }
	@objc static var defaultLineCapStyle: NSBezierPath.LineCapStyle { @objc get @objc (setDefaultLineCapStyle:) set }
	@objc static var defaultLineJoinStyle: NSBezierPath.LineJoinStyle { @objc get @objc (setDefaultLineJoinStyle:) set }
	@objc static var defaultLineWidth: CGFloat { get set }
	@objc static var defaultMiterLimit: CGFloat { get set }
	@objc static var defaultWindingRule: NSBezierPath.WindingRule { @objc get @objc (setDefaultWindingRule:) set }

	// Instance Methods
	@objc func addClip()
	@objc (appendBezierPath:) func append(_: NSBezierPath)
	@objc (appendBezierPathWithArcFromPoint:toPoint:radius:) func appendArc(from point1: NSPoint, to point2: NSPoint, radius: CGFloat)
	@objc (appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:) func appendArc(withCenter center: NSPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat)
	@objc (appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:clockwise:) func appendArc(withCenter center: NSPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat, clockwise: Bool)
	@objc (appendBezierPathWithCGGlyph:inFont:) @available(OSX 10.13, *) func append(withCGGlyph: UInt16, in: NSFont)
	@objc (appendBezierPathWithCGGlyphs:count:inFont:) @available(OSX 10.13, *) func append(withCGGlyphs: UnsafePointer<UInt16>, count: Int, in: NSFont)
	@objc (appendBezierPathWithOvalInRect:) func appendOval(in: NSRect)
	@objc (appendBezierPathWithPoints:count:) func appendPoints(_: UnsafeMutablePointer<NSPoint>, count: Int)
	@objc (appendBezierPathWithRect:) func appendRect(_: NSRect)
	@objc (appendBezierPathWithRoundedRect:xRadius:yRadius:) @available(OSX 10.5, *) func appendRoundedRect(_ rect: NSRect, xRadius: CGFloat, yRadius: CGFloat)
	@objc (closePath) func close()
	@objc (containsPoint:) func contains(_: NSPoint) -> Bool
	@objc (curveToPoint:controlPoint1:controlPoint2:) func curve(to: NSPoint, controlPoint1: NSPoint, controlPoint2: NSPoint)
	@objc (elementAtIndex:) func element(at: Int) -> NSBezierPath.ElementType
	@objc (elementAtIndex:associatedPoints:) func element(at: Int, associatedPoints: UnsafeMutablePointer<NSPoint>?) -> NSBezierPath.ElementType
	@objc func fill()
	@objc func getLineDash(_: UnsafeMutablePointer<CGFloat>?, count: UnsafeMutablePointer<Int>?, phase: UnsafeMutablePointer<CGFloat>?)
	@objc (lineToPoint:) func line(to: NSPoint)
	@objc (moveToPoint:) func move(to: NSPoint)
	@objc (relativeCurveToPoint:controlPoint1:controlPoint2:) func relativeCurve(to: NSPoint, controlPoint1: NSPoint, controlPoint2: NSPoint)
	@objc (relativeLineToPoint:) func relativeLine(to: NSPoint)
	@objc (relativeMoveToPoint:) func relativeMove(to: NSPoint)
	@objc func removeAllPoints()
	@objc (setAssociatedPoints:atIndex:) func setAssociatedPoints(_: UnsafeMutablePointer<NSPoint>?, at: Int)
	@objc func setClip()
	@objc func setLineDash(_ pattern: UnsafePointer<CGFloat>?, count: Int, phase: CGFloat)
	@objc func stroke()
	@objc (transformUsingAffineTransform:) func transform(using: AffineTransform)

	// Own Instance Properties
	@objc (bezierPathByFlatteningPath) var flattened: NSBezierPath { @objc (bezierPathByFlatteningPath) get }
	@objc (bezierPathByReversingPath) var reversed: NSBezierPath { @objc (bezierPathByReversingPath) get }
	@objc var bounds: NSRect { @objc get }
	@objc var controlPointBounds: NSRect { @objc get }
	@objc var currentPoint: NSPoint { @objc get }
	@objc var elementCount: Int { @objc get }
	@objc var isEmpty: Bool { @objc get }
	@objc var flatness: CGFloat { get set }
	@objc var lineCapStyle: NSBezierPath.LineCapStyle { @objc get @objc (setLineCapStyle:) set }
	@objc var lineJoinStyle: NSBezierPath.LineJoinStyle { @objc get @objc (setLineJoinStyle:) set }
	@objc var lineWidth: CGFloat { get set }
	@objc var miterLimit: CGFloat { get set }
	@objc var windingRule: NSBezierPath.WindingRule { @objc get @objc (setWindingRule:) set }

	// Constructors
}

extension NSBezierPath: NSBezierPathExports {
}
