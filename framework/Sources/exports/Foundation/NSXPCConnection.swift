import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSXPCConnectionExports: JSExport {
	// , NSXPCProxyCreatingExports
	// Static Methods
	@objc (currentConnection) @available(OSX 10.8, *) static func current() -> NSXPCConnection?

	// Instance Methods
	@objc func invalidate()
	@objc func resume()
	// jsvalue - @objc @available(OSX 10.15, *) func scheduleSendBarrierBlock(_: JSValue)
	@objc func suspend()

	// Own Instance Properties
	@objc var auditSessionIdentifier: au_asid_t { @objc get }
	@objc var effectiveGroupIdentifier: gid_t { @objc get }
	@objc var effectiveUserIdentifier: uid_t { @objc get }
	@objc var endpoint: NSXPCListenerEndpoint { @objc get }
	@objc var exportedInterface: NSXPCInterface? { @objc get @objc (setExportedInterface:) set }
	@objc var exportedObject: Any? { @objc get @objc (setExportedObject:) set }
	@objc var interruptionHandler: (() -> Void)? { get set }
	@objc var invalidationHandler: (() -> Void)? { get set }
	@objc var processIdentifier: pid_t { @objc get }
	@objc var remoteObjectInterface: NSXPCInterface? { @objc get @objc (setRemoteObjectInterface:) set }
	@objc var remoteObjectProxy: Any { @objc get }
	@objc var serviceName: String? { @objc get }

	// Constructors
	@objc static func create() -> NSXPCConnection
	@objc static func create(listenerEndpoint: NSXPCListenerEndpoint) -> NSXPCConnection
	@objc static func create(machServiceName: String, options: NSXPCConnection.Options) -> NSXPCConnection
	@objc static func create(serviceName: String) -> NSXPCConnection
}

extension NSXPCConnection: NSXPCConnectionExports {
	@objc class func create() -> NSXPCConnection {
		return NSXPCConnection()
	}

	@objc class func create(listenerEndpoint: NSXPCListenerEndpoint) -> NSXPCConnection {
		return NSXPCConnection(listenerEndpoint: listenerEndpoint)
	}

	@objc class func create(machServiceName: String, options: NSXPCConnection.Options) -> NSXPCConnection {
		return NSXPCConnection(machServiceName: machServiceName, options: options)
	}

	@objc class func create(serviceName: String) -> NSXPCConnection {
		return NSXPCConnection(serviceName: serviceName)
	}

}
