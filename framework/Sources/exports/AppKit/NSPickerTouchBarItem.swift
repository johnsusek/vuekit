import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPickerTouchBarItemExports: JSExport, NSTouchBarItemExports {
	// Static Methods

	// Instance Methods
	@objc (imageAtIndex:) func image(at: Int) -> NSImage?
	@objc (isEnabledAtIndex:) func isEnabled(at: Int) -> Bool
	@objc (labelAtIndex:) func label(at: Int) -> String?
	@objc (setEnabled:atIndex:) func setEnabled(_: Bool, at: Int)
	@objc (setImage:atIndex:) func setImage(_: NSImage?, at: Int)
	@objc (setLabel:atIndex:) func setLabel(_: String, at: Int)

	// Own Instance Properties
	@objc var action: Selector? { @objc get @objc (setAction:) set }
	@objc var collapsedRepresentationImage: NSImage? { @objc get @objc (setCollapsedRepresentationImage:) set }
	@objc var collapsedRepresentationLabel: String { @objc get @objc (setCollapsedRepresentationLabel:) set }
	@objc var controlRepresentation: NSPickerTouchBarItem.ControlRepresentation { @objc get @objc (setControlRepresentation:) set }
	@objc var customizationLabel: String! { @objc get @objc (setCustomizationLabel:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var numberOfOptions: Int { @objc get @objc (setNumberOfOptions:) set }
	@objc var selectedIndex: Int { @objc get @objc (setSelectedIndex:) set }
	@objc var selectionColor: NSColor? { @objc get @objc (setSelectionColor:) set }
	@objc var selectionMode: NSPickerTouchBarItem.SelectionMode { @objc get @objc (setSelectionMode:) set }
	@objc var target: AnyObject? { @objc get @objc (setTarget:) set }

	// Constructors
}

extension NSPickerTouchBarItem: NSPickerTouchBarItemExports {
}
