import AppKit
import JavaScriptCore

@objc protocol NSSecureUnarchiveFromDataTransformerExports: JSExport {
	@objc static var allowedTopLevelClasses: [AnyClass] { @objc get }
}

extension NSSecureUnarchiveFromDataTransformer: NSSecureUnarchiveFromDataTransformerExports {
	@objc override class func create() -> NSSecureUnarchiveFromDataTransformer {
		return NSSecureUnarchiveFromDataTransformer()
	}
}
