import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSAffineTransformExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (appendTransform:) func append(_: AffineTransform)
	@objc func concat()
	@objc func invert()
	@objc (prependTransform:) func prepend(_: AffineTransform)
	@objc (rotateByDegrees:) func rotate(byDegrees angle: CGFloat)
	@objc (rotateByRadians:) func rotate(byRadians angle: CGFloat)
	@objc (scaleBy:) func scale(by scale: CGFloat)
	@objc (scaleXBy:yBy:) func scaleX(by scaleX: CGFloat, yBy scaleY: CGFloat)
	@objc func set()
	@objc (transformBezierPath:) func transform(_: NSBezierPath) -> NSBezierPath
	@objc (transformPoint:) func transform(_: NSPoint) -> NSPoint
	@objc (transformSize:) func transform(_: NSSize) -> NSSize
	@objc (translateXBy:yBy:) func translateX(by deltaX: CGFloat, yBy deltaY: CGFloat)

	// Own Instance Properties
	@objc var transformStruct: NSAffineTransformStruct { @objc get @objc (setTransformStruct:) set }
}

extension NSAffineTransform: NSAffineTransformExports {}
