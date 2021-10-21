import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSStatusBarButtonExports: JSExport, NSButtonExports {
	// Static Methods

	// Own Instance Properties
	@objc var appearsDisabled: Bool { @objc get @objc (setAppearsDisabled:) set }
}

@objc protocol StatusBarButtonExports: JSExport, NSButtonExports {
	// Constructors
	@objc static func create() -> StatusBarButton
}

class StatusBarButton: NSStatusBarButton, StatusBarButtonExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> StatusBarButton {
		return StatusBarButton()
	}

}

extension NSStatusBarButton: NSStatusBarButtonExports {}
