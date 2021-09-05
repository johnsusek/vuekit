import AppKit
import JavaScriptCore

@objc protocol NSCursorExports: JSExport {
	@objc static func hide()
	@objc static func pop()
	@objc static func setHiddenUntilMouseMoves(_: Bool)
	@objc static func unhide()
	@objc var hotSpot: NSPoint { @objc get }
	@objc var image: NSImage { @objc get }
	@objc static var iBeam: NSCursor { @objc (IBeamCursor) get }
	@objc @available(OSX 10.7, *) static var iBeamCursorForVerticalLayout: NSCursor { @objc (IBeamCursorForVerticalLayout) get }
	@objc static var arrow: NSCursor { @objc (arrowCursor) get }
	@objc static var closedHand: NSCursor { @objc (closedHandCursor) get }
	@objc @available(OSX 10.6, *) static var contextualMenu: NSCursor { @objc (contextualMenuCursor) get }
	@objc static var crosshair: NSCursor { @objc (crosshairCursor) get }
	@objc static var current: NSCursor { @objc (currentCursor) get }
	@objc @available(OSX 10.6, *) static var currentSystem: NSCursor? { @objc (currentSystemCursor) get }
	@objc static var disappearingItem: NSCursor { @objc (disappearingItemCursor) get }
	@objc @available(OSX 10.6, *) static var dragCopy: NSCursor { @objc (dragCopyCursor) get }
	@objc @available(OSX 10.6, *) static var dragLink: NSCursor { @objc (dragLinkCursor) get }
	@objc static var openHand: NSCursor { @objc (openHandCursor) get }
	@objc @available(OSX 10.5, *) static var operationNotAllowed: NSCursor { @objc (operationNotAllowedCursor) get }
	@objc static var pointingHand: NSCursor { @objc (pointingHandCursor) get }
	@objc static var resizeDown: NSCursor { @objc (resizeDownCursor) get }
	@objc static var resizeLeft: NSCursor { @objc (resizeLeftCursor) get }
	@objc static var resizeLeftRight: NSCursor { @objc (resizeLeftRightCursor) get }
	@objc static var resizeRight: NSCursor { @objc (resizeRightCursor) get }
	@objc static var resizeUp: NSCursor { @objc (resizeUpCursor) get }
	@objc static var resizeUpDown: NSCursor { @objc (resizeUpDownCursor) get }
	@objc func pop()
	@objc func push()
	@objc func set()
	@objc static func create(image: NSImage, hotSpot: NSPoint) -> NSCursor
}

extension NSCursor: NSCursorExports {
	@objc class func create(image: NSImage, hotSpot: NSPoint) -> NSCursor {
		return NSCursor(image: image, hotSpot: hotSpot)
	}

	@objc override class func create() -> NSCursor {
		return NSCursor()
	}
}
