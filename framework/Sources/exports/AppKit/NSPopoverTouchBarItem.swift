import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPopoverTouchBarItemExports: JSExport, NSTouchBarItemExports {
	// Static Methods

	// Instance Methods
	@objc func dismissPopover(_: Any?)
	@objc func makeStandardActivatePopoverGestureRecognizer() -> NSGestureRecognizer
	@objc func showPopover(_: Any?)

	// Own Instance Properties
	@objc var collapsedRepresentation: NSView { @objc get @objc (setCollapsedRepresentation:) set }
	@objc var collapsedRepresentationImage: NSImage? { @objc get @objc (setCollapsedRepresentationImage:) set }
	@objc var collapsedRepresentationLabel: String { @objc get @objc (setCollapsedRepresentationLabel:) set }
	@objc var customizationLabel: String! { @objc get @objc (setCustomizationLabel:) set }
	@objc var popoverTouchBar: NSTouchBar { @objc get @objc (setPopoverTouchBar:) set }
	@objc var pressAndHoldTouchBar: NSTouchBar? { @objc get @objc (setPressAndHoldTouchBar:) set }
	@objc var showsCloseButton: Bool { @objc get @objc (setShowsCloseButton:) set }

	// Constructors
}

extension NSPopoverTouchBarItem: NSPopoverTouchBarItemExports {
}
