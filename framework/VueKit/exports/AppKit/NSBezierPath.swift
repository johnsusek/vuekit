import AppKit
import JavaScriptCore

@objc protocol NSBezierPathExports: JSExport {
	@objc static func create() -> NSBezierPath
	@objc static func create(ovalIn: NSRect) -> NSBezierPath
	@objc static func create(rect: NSRect) -> NSBezierPath
	@objc @available(OSX 10.5, *) static func create(roundedRect: NSRect, xRadius: CGFloat, yRadius: CGFloat) -> NSBezierPath
	@objc (clipRect:) static func clip(_: NSRect)
	@objc (drawPackedGlyphs:atPoint:) static func drawPackedGlyphs(_: UnsafePointer<Int8>, at: NSPoint)
	@objc (fillRect:) static func fill(_: NSRect)
	@objc (strokeLineFromPoint:toPoint:) static func strokeLine(from: NSPoint, to: NSPoint)
	@objc (strokeRect:) static func stroke(_: NSRect)
	@objc var flattened: NSBezierPath { @objc (bezierPathByFlatteningPath) get }
	@objc var reversed: NSBezierPath { @objc (bezierPathByReversingPath) get }
	@objc var bounds: NSRect { @objc get }
	@objc var controlPointBounds: NSRect { @objc get }
	@objc var currentPoint: NSPoint { @objc get }
	@objc var elementCount: Int { @objc get }
	@objc var isEmpty: Bool { @objc get }
	@objc var flatness: CGFloat { @objc get @objc (setFlatness:) set }
	@objc var lineCapStyle: NSBezierPath.LineCapStyle { @objc get @objc (setLineCapStyle:) set }
	@objc var lineJoinStyle: NSBezierPath.LineJoinStyle { @objc get @objc (setLineJoinStyle:) set }
	@objc var lineWidth: CGFloat { @objc get @objc (setLineWidth:) set }
	@objc var miterLimit: CGFloat { @objc get @objc (setMiterLimit:) set }
	@objc var windingRule: NSBezierPath.WindingRule { @objc get @objc (setWindingRule:) set }
	@objc static var defaultFlatness: CGFloat { @objc get @objc (setDefaultFlatness:) set }
	@objc static var defaultLineCapStyle: NSBezierPath.LineCapStyle { @objc get @objc (setDefaultLineCapStyle:) set }
	@objc static var defaultLineJoinStyle: NSBezierPath.LineJoinStyle { @objc get @objc (setDefaultLineJoinStyle:) set }
	@objc static var defaultLineWidth: CGFloat { @objc get @objc (setDefaultLineWidth:) set }
	@objc static var defaultMiterLimit: CGFloat { @objc get @objc (setDefaultMiterLimit:) set }
	@objc static var defaultWindingRule: NSBezierPath.WindingRule { @objc get @objc (setDefaultWindingRule:) set }
	@objc func addClip()
	@objc (appendBezierPath:) func append(_: NSBezierPath)
	@objc (appendBezierPathWithArcFromPoint:toPoint:radius:) func appendArc(from: NSPoint, to: NSPoint, radius: CGFloat)
	@objc (appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:) func appendArc(withCenter: NSPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat)
	@objc (appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:clockwise:) func appendArc(withCenter: NSPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat, clockwise: Bool)
	@objc (appendBezierPathWithCGGlyph:inFont:) @available(OSX 10.13, *) func append(withCGGlyph: UInt16, in: NSFont)
	@objc (appendBezierPathWithCGGlyphs:count:inFont:) @available(OSX 10.13, *) func append(withCGGlyphs: UnsafePointer<UInt16>, count: Int, in: NSFont)
	@objc (appendBezierPathWithOvalInRect:) func appendOval(in: NSRect)
	@objc (appendBezierPathWithPoints:count:) func appendPoints(_: UnsafeMutablePointer<NSPoint>, count: Int)
	@objc (appendBezierPathWithRect:) func appendRect(_: NSRect)
	@objc (appendBezierPathWithRoundedRect:xRadius:yRadius:) @available(OSX 10.5, *) func appendRoundedRect(_: NSRect, xRadius: CGFloat, yRadius: CGFloat)
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
	@objc func setLineDash(_: UnsafePointer<CGFloat>?, count: Int, phase: CGFloat)
	@objc func stroke()
	@objc (transformUsingAffineTransform:) func transform(using: AffineTransform)
}

extension NSBezierPath: NSBezierPathExports {
	@objc override class func create() -> NSBezierPath {
		return NSBezierPath()
	}

	@objc class func create(ovalIn: NSRect) -> NSBezierPath {
		return NSBezierPath(ovalIn: ovalIn)
	}

	@objc class func create(rect: NSRect) -> NSBezierPath {
		return NSBezierPath(rect: rect)
	}

	@objc @available(OSX 10.5, *) class func create(roundedRect: NSRect, xRadius: CGFloat, yRadius: CGFloat) -> NSBezierPath {
		return NSBezierPath(roundedRect: roundedRect, xRadius: xRadius, yRadius: yRadius)
	}

}
