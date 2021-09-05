import AppKit
import JavaScriptCore

@objc protocol NSDraggingSessionExports: JSExport {
	@objc var animatesToStartingPositionsOnCancelOrFail: Bool { @objc get @objc (setAnimatesToStartingPositionsOnCancelOrFail:) set }
	@objc var draggingFormation: NSDraggingFormation { @objc get @objc (setDraggingFormation:) set }
	@objc var draggingLeaderIndex: Int { @objc get @objc (setDraggingLeaderIndex:) set }
	@objc var draggingLocation: NSPoint { @objc get }
	@objc var draggingPasteboard: NSPasteboard { @objc get }
	@objc var draggingSequenceNumber: Int { @objc get }
	// @objc (enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:) func enumerateDraggingItems(options: NSDraggingItemEnumerationOptions, `for`: NSView?, classes: [AnyClass], searchOptions: [NSPasteboard.ReadingOptionKey: Any], using: JSManagedValue /* NSDraggingItem, void (^ _Nonnull)(NSDraggingItem * _Nonnull, NSInteger, BOOL * _Nonnull), UnsafeMutablePointer<Bool>: Void */)
}

extension NSDraggingSession: NSDraggingSessionExports {
	@objc override class func create() -> NSDraggingSession {
		return NSDraggingSession()
	}
}
