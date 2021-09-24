import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAScrollLayerExports: JSExport, CALayerExports {
	// Static Methods

	// Instance Methods
	@objc (scrollToPoint:) func scroll(to: NSPoint)
	@objc (scrollToRect:) func scroll(to: NSRect)

	// Own Instance Properties
	@objc var scrollMode: CAScrollLayerScrollMode { @objc get @objc (setScrollMode:) set }

	// Constructors
}

extension CAScrollLayer: CAScrollLayerExports {
}
