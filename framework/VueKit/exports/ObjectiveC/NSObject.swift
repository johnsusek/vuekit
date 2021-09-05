import AppKit
import JavaScriptCore

@objc protocol NSObjectExports: JSExport {
	@objc static func create() -> NSObject
}

extension NSObject: NSObjectExports {
	@objc class func create() -> NSObject {
		return NSObject()
	}
}
