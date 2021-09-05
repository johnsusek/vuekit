import AppKit
import JavaScriptCore

@objc protocol NSFileProviderServiceExports: JSExport {
	@objc var name: NSFileProviderServiceName { @objc get }
	// @objc func getFileProviderConnectionWithCompletionHandler(_: JSManagedValue /* NSXPCConnection, Error: Void */?)
}

extension NSFileProviderService: NSFileProviderServiceExports {
	@objc override class func create() -> NSFileProviderService {
		return NSFileProviderService()
	}
}
