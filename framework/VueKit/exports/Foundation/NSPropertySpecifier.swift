import AppKit
import JavaScriptCore

@objc protocol NSPropertySpecifierExports: JSExport {
}

extension NSPropertySpecifier: NSPropertySpecifierExports {
	@objc override class func create() -> NSPropertySpecifier {
		return NSPropertySpecifier()
	}
}
