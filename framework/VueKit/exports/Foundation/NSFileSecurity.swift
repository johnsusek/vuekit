import AppKit
import JavaScriptCore

@objc protocol NSFileSecurityExports: JSExport {
}

extension NSFileSecurity: NSFileSecurityExports {
	@objc override class func create() -> NSFileSecurity {
		return NSFileSecurity()
	}
}
