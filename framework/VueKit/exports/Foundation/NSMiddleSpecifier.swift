import AppKit
import JavaScriptCore

@objc protocol NSMiddleSpecifierExports: JSExport {
}

extension NSMiddleSpecifier: NSMiddleSpecifierExports {
	@objc override class func create() -> NSMiddleSpecifier {
		return NSMiddleSpecifier()
	}
}
