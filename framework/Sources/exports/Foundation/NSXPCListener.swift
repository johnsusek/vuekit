import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSXPCListenerExports: JSExport {
	// Static Methods
	@objc (anonymousListener) static func anonymous() -> NSXPCListener
	@objc (serviceListener) static func service() -> NSXPCListener

	// Instance Methods
	@objc func invalidate()
	@objc func resume()
	@objc func suspend()

	// Own Instance Properties
	@objc var delegate: NSXPCListenerDelegate? { @objc get @objc (setDelegate:) set }
	@objc var endpoint: NSXPCListenerEndpoint { @objc get }

	// Constructors
	@objc static func create() -> NSXPCListener
	@objc static func create(machServiceName: String) -> NSXPCListener
}

extension NSXPCListener: NSXPCListenerExports {
	@objc class func create() -> NSXPCListener {
		return NSXPCListener()
	}

	@objc class func create(machServiceName: String) -> NSXPCListener {
		return NSXPCListener(machServiceName: machServiceName)
	}

}
