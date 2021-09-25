import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSDraggingSessionExports: JSExport {
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:) func enumerateDraggingItems(options: NSDraggingItemEnumerationOptions, `for`: NSView?, classes: [NSObject], searchOptions: [String: Any], using: JSValue)

	// Own Instance Properties
	@objc var animatesToStartingPositionsOnCancelOrFail: Bool { @objc get @objc (setAnimatesToStartingPositionsOnCancelOrFail:) set }
	@objc var draggingFormation: NSDraggingFormation { @objc get @objc (setDraggingFormation:) set }
	@objc var draggingLeaderIndex: Int { @objc get @objc (setDraggingLeaderIndex:) set }
	@objc var draggingLocation: NSPoint { @objc get }
	@objc var draggingPasteboard: NSPasteboard { @objc get }
	@objc var draggingSequenceNumber: Int { @objc get }

	// Constructors
	@objc static func create() -> NSDraggingSession
}

extension NSDraggingSession: NSDraggingSessionExports {
	@objc class func create() -> NSDraggingSession {
		return NSDraggingSession()
	}

}
