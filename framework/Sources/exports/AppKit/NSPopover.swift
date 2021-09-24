import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPopoverExports: JSExport, NSResponderExports {
	// , NSAccessibilityExports, NSAccessibilityElementExports, NSAppearanceCustomizationExports
	// Static Methods

	// Instance Methods
	@objc func close()
	@objc func performClose(_: Any?)
	@objc (showRelativeToRect:ofView:preferredEdge:) func show(relativeTo: NSRect, of: NSView, preferredEdge: NSRectEdge)

	// Own Instance Properties
	@objc var animates: Bool { @objc get @objc (setAnimates:) set }
	@objc var behavior: NSPopover.Behavior { @objc get @objc (setBehavior:) set }
	@objc var contentSize: NSSize { @objc get @objc (setContentSize:) set }
	@objc var contentViewController: NSViewController? { @objc get @objc (setContentViewController:) set }
	@objc var delegate: NSPopoverDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.10, *) var isDetached: Bool { @objc get }
	@objc var positioningRect: NSRect { @objc get @objc (setPositioningRect:) set }
	@objc var isShown: Bool { @objc get }

	// Constructors
}

extension NSPopover: NSPopoverExports {
}
