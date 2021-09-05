import AppKit
import JavaScriptCore

@objc protocol NSATSTypesetterExports: JSExport {
	@objc static var shared: NSATSTypesetter { @objc (sharedTypesetter) get }
}

extension NSATSTypesetter: NSATSTypesetterExports {
	@objc override class func create() -> NSATSTypesetter {
		return NSATSTypesetter()
	}
}
