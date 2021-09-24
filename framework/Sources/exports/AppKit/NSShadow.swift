import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSShadowExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc func set()

	// Own Instance Properties
	@objc var shadowBlurRadius: CGFloat { get set }
	@objc var shadowColor: NSColor? { @objc get @objc (setShadowColor:) set }
	@objc var shadowOffset: NSSize { @objc get @objc (setShadowOffset:) set }

	// Constructors
}

extension NSShadow: NSShadowExports {
}
