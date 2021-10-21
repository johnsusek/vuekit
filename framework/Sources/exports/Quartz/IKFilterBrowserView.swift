import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol IKFilterBrowserViewExports: JSExport, NSViewExports {
	// Static Methods

	// Instance Methods
	@objc func filterName() -> String
	@objc func setPreviewState(_: Bool)
}

@objc protocol FilterBrowserViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> FilterBrowserView
}

class FilterBrowserView: IKFilterBrowserView, FilterBrowserViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> FilterBrowserView {
		return FilterBrowserView()
	}

}

extension IKFilterBrowserView: IKFilterBrowserViewExports {}
