import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSEventExports: JSExport {
	// , NSCodingExports, NSCopyingExports
	// Static Methods
	// jsvalue - @objc (addGlobalMonitorForEventsMatchingMask:handler:) @available(OSX 10.6, *) static func addGlobalMonitorForEvents(matching: NSEvent.EventTypeMask, handler: JSValue) -> Any?
	// jsvalue - @objc (addLocalMonitorForEventsMatchingMask:handler:) @available(OSX 10.6, *) static func addLocalMonitorForEvents(matching: NSEvent.EventTypeMask, handler: JSValue) -> Any?
	// @objc (enterExitEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:) static func enterExitEvent(with: NSEvent.EventType, location: NSPoint, modifierFlags: NSEvent.ModifierFlags, timestamp: TimeInterval, windowNumber: Int, context: NSGraphicsContext?, eventNumber: Int, trackingNumber: Int, userData: UnsafeMutableRawPointer?) -> NSEvent?
	// @objc (keyEventWithType:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:) static func keyEvent(with: NSEvent.EventType, location: NSPoint, modifierFlags: NSEvent.ModifierFlags, timestamp: TimeInterval, windowNumber: Int, context: NSGraphicsContext?, characters: String, charactersIgnoringModifiers: String, isARepeat: Bool, keyCode: UInt16) -> NSEvent?
	// @objc (mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:) static func mouseEvent(with: NSEvent.EventType, location: NSPoint, modifierFlags: NSEvent.ModifierFlags, timestamp: TimeInterval, windowNumber: Int, context: NSGraphicsContext?, eventNumber: Int, clickCount: Int, pressure: Float) -> NSEvent?
	// @objc (otherEventWithType:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:) static func otherEvent(with type: NSEvent.EventType, location: NSPoint, modifierFlags flags: NSEvent.ModifierFlags, timestamp time: TimeInterval, windowNumber wNum: Int, context unusedPassNil: NSGraphicsContext?, subtype: Int16, data1 d1: Int, data2 d2: Int) -> NSEvent?
	// @objc @available(OSX 10.6, *) static func removeMonitor(_: Any)
	// @objc (startPeriodicEventsAfterDelay:withPeriod:) static func startPeriodicEvents(afterDelay: TimeInterval, withPeriod: TimeInterval)
	// @objc static func stopPeriodicEvents()

	// Own Static Properties
	// @objc @available(OSX 10.6, *) static var doubleClickInterval: TimeInterval { @objc get }
	// @objc @available(OSX 10.6, *) static var keyRepeatDelay: TimeInterval { @objc get }
	// @objc @available(OSX 10.6, *) static var keyRepeatInterval: TimeInterval { @objc get }
	// @objc @available(OSX 10.6, *) static var modifierFlags: NSEvent.ModifierFlags { @objc get }
	// @objc @available(OSX 10.5, *) static var isMouseCoalescingEnabled: Bool { @objc get @objc (setMouseCoalescingEnabled:) set }
	// @objc static var mouseLocation: NSPoint { @objc get }
	// @objc @available(OSX 10.6, *) static var pressedMouseButtons: Int { @objc get }
	// @objc @available(OSX 10.7, *) static var isSwipeTrackingFromScrollEventsEnabled: Bool { @objc get }

	// Instance Methods
	// @objc @available(OSX 10.12, *) func allTouches() -> Set<NSTouch>
	// @objc (charactersByApplyingModifiers:) @available(OSX 10.15, *) func characters(byApplyingModifiers: NSEvent.ModifierFlags) -> String?
	// @objc (coalescedTouchesForTouch:) @available(OSX 10.12.2, *) func coalescedTouches(`for`: NSTouch) -> [NSTouch]
	// @objc (touchesForView:) @available(OSX 10.12, *) func touches(`for`: NSView) -> Set<NSTouch>
	// @objc (touchesMatchingPhase:inView:) @available(OSX 10.6, *) func touches(matching: NSTouch.Phase, in: NSView?) -> Set<NSTouch>
	// jsvalue - @objc (trackSwipeEventWithOptions:dampenAmountThresholdMin:max:usingHandler:) @available(OSX 10.7, *) func trackSwipeEvent(options: NSEvent.SwipeTrackingOptions, dampenAmountThresholdMin: Float, max: Float, usingHandler: JSValue)

	// Own Instance Properties
	// @objc var isARepeat: Bool { @objc get }
	// @objc var absoluteX: Int { @objc get }
	// @objc var absoluteY: Int { @objc get }
	// @objc var absoluteZ: Int { @objc get }
	// @objc @available(OSX 10.10.3, *) var associatedEventsMask: NSEvent.EventTypeMask { @objc get }
	// @objc var buttonMask: NSEvent.ButtonMask { @objc get }
	// @objc var buttonNumber: Int { @objc get }
	// @objc var capabilityMask: Int { @objc get }
	// @objc var characters: String? { @objc get }
	// @objc var charactersIgnoringModifiers: String? { @objc get }
	// @objc var clickCount: Int { @objc get }
	// @objc var data1: Int { @objc get }
	// @objc var data2: Int { @objc get }
	// @objc var deltaX: CGFloat { get }
	// @objc var deltaY: CGFloat { get }
	// @objc var deltaZ: CGFloat { get }
	// @objc var deviceID: Int { @objc get }
	// @objc @available(OSX 10.7, *) var isDirectionInvertedFromDevice: Bool { @objc get }
	// @objc var isEnteringProximity: Bool { @objc get }
	// @objc var eventNumber: Int { @objc get }
	// @objc @available(OSX 10.5, *) var eventRef: UnsafeRawPointer? { @objc get }
	// @objc @available(OSX 10.7, *) var hasPreciseScrollingDeltas: Bool { @objc get }
	// @objc var keyCode: UInt16 { @objc get }
	// @objc var locationInWindow: NSPoint { @objc get }
	// @objc @available(OSX 10.5, *) var magnification: CGFloat { get }
	// @objc var modifierFlags: NSEvent.ModifierFlags { @objc get }
	// @objc @available(OSX 10.7, *) var momentumPhase: NSEvent.Phase { @objc get }
	// @objc @available(OSX 10.7, *) var phase: NSEvent.Phase { @objc get }
	// @objc var pointingDeviceID: Int { @objc get }
	// @objc var pointingDeviceSerialNumber: Int { @objc get }
	// @objc var pointingDeviceType: NSEvent.PointingDeviceType { @objc get }
	// @objc var pressure: Float { @objc get }
	// @objc @available(OSX 10.11, *) var pressureBehavior: NSEvent.PressureBehavior { @objc get }
	// @objc var rotation: Float { @objc get }
	// @objc @available(OSX 10.7, *) var scrollingDeltaX: CGFloat { get }
	// @objc @available(OSX 10.7, *) var scrollingDeltaY: CGFloat { get }
	// @objc @available(OSX 10.10.3, *) var stage: Int { @objc get }
	// @objc @available(OSX 10.10.3, *) var stageTransition: CGFloat { get }
	// @objc var subtype: NSEvent.EventSubtype { @objc get }
	// @objc var systemTabletID: Int { @objc get }
	// @objc var tabletID: Int { @objc get }
	// @objc var tangentialPressure: Float { @objc get }
	// @objc var tilt: NSPoint { @objc get }
	@objc var timestamp: TimeInterval { @objc get }
	// @objc @available(OSX 10.5, *) var trackingArea: NSTrackingArea? { @objc get }
	// @objc var trackingNumber: Int { @objc get }
	@objc var type: NSEvent.EventType { @objc get }
	// @objc var uniqueID: UInt64 { @objc get }
	// @objc var userData: UnsafeMutableRawPointer? { @objc get }
	// @objc var vendorDefined: Any { @objc get }
	// @objc var vendorID: Int { @objc get }
	// @objc var vendorPointingDeviceType: Int { @objc get }
	@objc var window: NSWindow? { @objc get }
	// @objc var windowNumber: Int { @objc get }
}

extension NSEvent: NSEventExports {
}
