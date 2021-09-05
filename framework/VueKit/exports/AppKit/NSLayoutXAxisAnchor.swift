import AppKit
import JavaScriptCore

@objc protocol NSLayoutXAxisAnchorExports: JSExport {
	@objc (anchorWithOffsetToAnchor:) @available(OSX 10.12, *) func anchorWithOffset(to: NSLayoutXAxisAnchor) -> NSLayoutDimension
}

extension NSLayoutXAxisAnchor: NSLayoutXAxisAnchorExports {
	@objc override class func create() -> NSLayoutXAxisAnchor {
		return NSLayoutXAxisAnchor()
	}
}
