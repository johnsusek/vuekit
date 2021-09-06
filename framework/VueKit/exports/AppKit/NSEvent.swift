import AppKit
import JavaScriptCore

@objc protocol NSEventExports: JSExport {
	@objc var modifierFlags: NSEvent.ModifierFlags { @objc get }
	@objc var timestamp: TimeInterval { @objc get }
	@objc var type: NSEvent.EventType { @objc get }
	@objc var window: NSWindow? { @objc get }
	@objc var windowNumber: Int { @objc get }
}

extension NSEvent: NSEventExports {
}
