import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSLayoutYAxisAnchorExports: JSExport, NSLayoutAnchorExports {
	// Static Methods

	// Instance Methods
	@objc (anchorWithOffsetToAnchor:) @available(OSX 10.12, *) func anchorWithOffset(to: NSLayoutYAxisAnchor) -> NSLayoutDimension

	// Constructors
}

extension NSLayoutYAxisAnchor: NSLayoutYAxisAnchorExports {
}
