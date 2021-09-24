import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSRulerMarkerExports: JSExport {
	// , NSCodingExports, NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc (drawRect:) func draw(_: NSRect)
	@objc (trackMouse:adding:) func trackMouse(with: NSEvent, adding: Bool) -> Bool

	// Own Instance Properties
	@objc var isDragging: Bool { @objc get }
	@objc var image: NSImage { @objc get @objc (setImage:) set }
	@objc var imageOrigin: NSPoint { @objc get @objc (setImageOrigin:) set }
	@objc var imageRectInRuler: NSRect { @objc get }
	@objc var markerLocation: CGFloat { get set }
	@objc var isMovable: Bool { @objc get @objc (setMovable:) set }
	@objc var isRemovable: Bool { @objc get @objc (setRemovable:) set }
	@objc var representedObject: NSCopying? { get set }
	@objc var ruler: NSRulerView? { @objc get }
	@objc var thicknessRequiredInRuler: CGFloat { get }
}

extension NSRulerMarker: NSRulerMarkerExports {}
