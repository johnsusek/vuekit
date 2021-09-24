import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCursorExports: JSExport {
	// , NSCodingExports
	// Static Methods
	@objc static func hide()
	@objc static func pop()
	@objc static func setHiddenUntilMouseMoves(_: Bool)
	@objc static func unhide()

	// Own Static Properties
	@objc (IBeamCursor) static var iBeam: NSCursor { @objc (IBeamCursor) get }
	@objc (IBeamCursorForVerticalLayout) @available(OSX 10.7, *) static var iBeamCursorForVerticalLayout: NSCursor { @objc (IBeamCursorForVerticalLayout) get }
	@objc (arrowCursor) static var arrow: NSCursor { @objc (arrowCursor) get }
	@objc (closedHandCursor) static var closedHand: NSCursor { @objc (closedHandCursor) get }
	@objc (contextualMenuCursor) @available(OSX 10.6, *) static var contextualMenu: NSCursor { @objc (contextualMenuCursor) get }
	@objc (crosshairCursor) static var crosshair: NSCursor { @objc (crosshairCursor) get }
	@objc (currentCursor) static var current: NSCursor { @objc (currentCursor) get }
	@objc (currentSystemCursor) @available(OSX 10.6, *) static var currentSystem: NSCursor? { @objc (currentSystemCursor) get }
	@objc (disappearingItemCursor) static var disappearingItem: NSCursor { @objc (disappearingItemCursor) get }
	@objc (dragCopyCursor) @available(OSX 10.6, *) static var dragCopy: NSCursor { @objc (dragCopyCursor) get }
	@objc (dragLinkCursor) @available(OSX 10.6, *) static var dragLink: NSCursor { @objc (dragLinkCursor) get }
	@objc (openHandCursor) static var openHand: NSCursor { @objc (openHandCursor) get }
	@objc (operationNotAllowedCursor) @available(OSX 10.5, *) static var operationNotAllowed: NSCursor { @objc (operationNotAllowedCursor) get }
	@objc (pointingHandCursor) static var pointingHand: NSCursor { @objc (pointingHandCursor) get }
	@objc (resizeDownCursor) static var resizeDown: NSCursor { @objc (resizeDownCursor) get }
	@objc (resizeLeftCursor) static var resizeLeft: NSCursor { @objc (resizeLeftCursor) get }
	@objc (resizeLeftRightCursor) static var resizeLeftRight: NSCursor { @objc (resizeLeftRightCursor) get }
	@objc (resizeRightCursor) static var resizeRight: NSCursor { @objc (resizeRightCursor) get }
	@objc (resizeUpCursor) static var resizeUp: NSCursor { @objc (resizeUpCursor) get }
	@objc (resizeUpDownCursor) static var resizeUpDown: NSCursor { @objc (resizeUpDownCursor) get }

	// Instance Methods
	@objc func pop()
	@objc func push()
	@objc func set()

	// Own Instance Properties
	@objc var hotSpot: NSPoint { @objc get }
	@objc var image: NSImage { @objc get }

	// Constructors
	@objc static func create(image: NSImage, hotSpot: NSPoint) -> NSCursor
}

extension NSCursor: NSCursorExports {
	@objc class func create(image: NSImage, hotSpot: NSPoint) -> NSCursor {
		return NSCursor(image: image, hotSpot: hotSpot)
	}

}
