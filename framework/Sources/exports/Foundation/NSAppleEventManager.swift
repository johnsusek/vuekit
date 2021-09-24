import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSAppleEventManagerExports: JSExport {
	// Static Methods
	@objc (sharedAppleEventManager) static func shared() -> NSAppleEventManager

	// Instance Methods
	@objc (appleEventForSuspensionID:) func appleEvent(forSuspensionID suspensionID: NSAppleEventManager.SuspensionID) -> NSAppleEventDescriptor
	// 	@objc func dispatchRawAppleEvent(_: UnsafePointer<AEDesc>, withRawReply: UnsafeMutablePointer<AEDesc>, handlerRefCon: UnsafeMutableRawPointer) -> UInt16
	@objc (removeEventHandlerForEventClass:andEventID:) func removeEventHandler(forEventClass: AEEventClass, andEventID: AEEventID)
	@objc (replyAppleEventForSuspensionID:) func replyAppleEvent(forSuspensionID suspensionID: NSAppleEventManager.SuspensionID) -> NSAppleEventDescriptor
	@objc (resumeWithSuspensionID:) func resume(withSuspensionID suspensionID: NSAppleEventManager.SuspensionID)
	@objc func setCurrentAppleEventAndReplyEventWithSuspensionID(_ suspensionID: NSAppleEventManager.SuspensionID)
	@objc func setEventHandler(_: Any, andSelector: Selector, forEventClass: AEEventClass, andEventID: AEEventID)
	// 	@objc func suspendCurrentAppleEvent() -> UnsafeMutableRawPointer?

	// Own Instance Properties
	@objc var currentAppleEvent: NSAppleEventDescriptor? { @objc get }
	@objc var currentReplyAppleEvent: NSAppleEventDescriptor? { @objc get }

	// Constructors
}

extension NSAppleEventManager: NSAppleEventManagerExports {
}
