import AppKit
import JavaScriptCore

@objc protocol NSPopoverExports: JSExport {
	@objc var animates: Bool { @objc get @objc (setAnimates:) set }
	@objc var behavior: NSPopover.Behavior { @objc get @objc (setBehavior:) set }
	@objc var contentSize: NSSize { @objc get @objc (setContentSize:) set }
	@objc var contentViewController: NSViewController? { @objc get @objc (setContentViewController:) set }
	@objc var delegate: NSPopoverDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.10, *) var isDetached: Bool { @objc get }
	@objc var positioningRect: NSRect { @objc get @objc (setPositioningRect:) set }
	@objc var isShown: Bool { @objc get }
	@objc func close()
	@objc func performClose(_: Any?)
	@objc (showRelativeToRect:ofView:preferredEdge:) func show(relativeTo: NSRect, of: NSView, preferredEdge: NSRectEdge)
}

extension NSPopover: NSPopoverExports {
	@objc override class func create() -> NSPopover {
		return NSPopover()
	}
}
