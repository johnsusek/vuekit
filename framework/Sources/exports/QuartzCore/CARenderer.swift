import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CARendererExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (addUpdateRect:) func addUpdate(_: NSRect)
	@objc (beginFrameAtTime:timeStamp:) func beginFrame(atTime: CFTimeInterval, timeStamp: UnsafeMutablePointer<CVTimeStamp>?)
	@objc func endFrame()
	@objc func nextFrameTime() -> CFTimeInterval
	@objc func render()
	@objc func setDestination(_: MTLTexture)
	@objc func updateBounds() -> NSRect

	// Own Instance Properties
	@objc var bounds: NSRect { @objc get @objc (setBounds:) set }
	@objc var layer: CALayer? { @objc get @objc (setLayer:) set }

	// Constructors
	@objc static func create() -> CARenderer
}

extension CARenderer: CARendererExports {
	@objc class func create() -> CARenderer {
		return CARenderer()
	}

}
