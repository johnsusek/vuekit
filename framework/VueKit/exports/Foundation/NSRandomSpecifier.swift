import AppKit
import JavaScriptCore

@objc protocol NSRandomSpecifierExports: JSExport {
}

extension NSRandomSpecifier: NSRandomSpecifierExports {
	@objc override class func create() -> NSRandomSpecifier {
		return NSRandomSpecifier()
	}
}
