import AppKit
import JavaScriptCore

@objc protocol NSURLHandleExports: JSExport {
}

extension NSURLHandle: NSURLHandleExports {
	@objc override class func create() -> NSURLHandle {
		return NSURLHandle()
	}
}
