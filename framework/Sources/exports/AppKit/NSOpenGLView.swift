import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSOpenGLViewExports: JSExport, NSViewExports {
	// Static Methods
	@objc static func defaultPixelFormat() -> NSOpenGLPixelFormat

	// Instance Methods
	@objc func clearGLContext()
	@objc func prepareOpenGL()
	@objc func reshape()
	@objc func update()

	// Own Instance Properties
	@objc var openGLContext: NSOpenGLContext? { @objc get @objc (setOpenGLContext:) set }
	@objc var pixelFormat: NSOpenGLPixelFormat? { @objc get @objc (setPixelFormat:) set }
}

@objc protocol OpenGLViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> OpenGLView
	@objc static func create(frame: NSRect, pixelFormat: NSOpenGLPixelFormat?) -> OpenGLView?
}

class OpenGLView: NSOpenGLView, OpenGLViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> OpenGLView {
		return OpenGLView()
	}

	@objc class func create(frame: NSRect, pixelFormat: NSOpenGLPixelFormat?) -> OpenGLView? {
		return OpenGLView(frame: frame, pixelFormat: pixelFormat)
	}

}

extension NSOpenGLView: NSOpenGLViewExports {}
