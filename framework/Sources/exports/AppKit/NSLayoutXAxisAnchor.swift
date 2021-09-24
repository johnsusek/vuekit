import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSLayoutXAxisAnchorExports: JSExport, NSLayoutAnchorExports {
	// Static Methods

	// Instance Methods
	@objc (anchorWithOffsetToAnchor:) @available(OSX 10.12, *) func anchorWithOffset(to: NSLayoutXAxisAnchor) -> NSLayoutDimension

	// Constructors
}

extension NSLayoutXAxisAnchor: NSLayoutXAxisAnchorExports {
}
