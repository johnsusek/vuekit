import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTouchExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc (locationInView:) @available(OSX 10.12.2, *) func location(in: NSView?) -> NSPoint
	@objc (previousLocationInView:) @available(OSX 10.12.2, *) func previousLocation(in: NSView?) -> NSPoint

	// Own Instance Properties
	@objc var device: Any? { @objc get }
	@objc var deviceSize: NSSize { @objc get }
	@objc var identity: NSCopying & NSObjectProtocol { get }
	@objc var normalizedPosition: NSPoint { @objc get }
	@objc var phase: NSTouch.Phase { @objc get }
	@objc var isResting: Bool { @objc get }
	@objc @available(OSX 10.12.2, *) var type: NSTouch.TouchType { @objc get }

	// Constructors
	@objc static func create() -> NSTouch
}

extension NSTouch: NSTouchExports {
	@objc class func create() -> NSTouch {
		return NSTouch()
	}

}
