import AppKit
import JavaScriptCore

@objc protocol NSXPCListenerEndpointExports: JSExport {
}

extension NSXPCListenerEndpoint: NSXPCListenerEndpointExports {
	@objc override class func create() -> NSXPCListenerEndpoint {
		return NSXPCListenerEndpoint()
	}
}
