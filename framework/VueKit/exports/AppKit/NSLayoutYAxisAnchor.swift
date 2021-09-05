import AppKit
import JavaScriptCore

@objc protocol NSLayoutYAxisAnchorExports: JSExport {
	@objc (anchorWithOffsetToAnchor:) @available(OSX 10.12, *) func anchorWithOffset(to: NSLayoutYAxisAnchor) -> NSLayoutDimension
}

extension NSLayoutYAxisAnchor: NSLayoutYAxisAnchorExports {
	@objc override class func create() -> NSLayoutYAxisAnchor {
		return NSLayoutYAxisAnchor()
	}
}
