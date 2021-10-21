import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol IKFilterUIViewExports: JSExport, NSViewExports {
	// Static Methods
	@objc (viewWithFrame:filter:) static func view(withFrame: NSRect, filter: CIFilter) -> Any!

	// Instance Methods
	@objc func filter() -> CIFilter
	@objc func objectController() -> NSObjectController
}

@objc protocol FilterUIViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> FilterUIView
	@objc static func create(frame: NSRect, filter: CIFilter) -> FilterUIView
}

class FilterUIView: IKFilterUIView, FilterUIViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> FilterUIView {
		return FilterUIView()
	}

	@objc class func create(frame: NSRect, filter: CIFilter) -> FilterUIView {
		return FilterUIView(frame: frame, filter: filter)
	}

}

extension IKFilterUIView: IKFilterUIViewExports {}
