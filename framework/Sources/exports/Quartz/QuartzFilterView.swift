import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol QuartzFilterViewExports: JSExport, NSViewExports {
	// Static Methods

	// Instance Methods
	@objc func sizeToFit()
}

@objc protocol artzFilterViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> artzFilterView
}

class artzFilterView: QuartzFilterView, artzFilterViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> artzFilterView {
		return artzFilterView()
	}

}

extension QuartzFilterView: QuartzFilterViewExports {}
