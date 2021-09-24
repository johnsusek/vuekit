import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSAlertExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (addButtonWithTitle:) func addButton(withTitle: String) -> NSButton
	// jsvalue - @objc (beginSheetModalForWindow:completionHandler:) @available(OSX 10.9, *) func beginSheetModal(`for`: NSWindow, completionHandler: JSValue)
	@objc @available(OSX 10.5, *) func layout()
	@objc func runModal() -> NSApplication.ModalResponse

	// Own Instance Properties
	@objc @available(OSX 10.5, *) var accessoryView: NSView? { @objc get @objc (setAccessoryView:) set }
	@objc var alertStyle: NSAlert.Style { @objc get @objc (setAlertStyle:) set }
	@objc var buttons: [NSButton] { @objc get }
	@objc var delegate: NSAlertDelegate? { @objc get @objc (setDelegate:) set }
	@objc var helpAnchor: NSHelpManager.AnchorName? { @objc get @objc (setHelpAnchor:) set }
	@objc var icon: NSImage! { @objc get @objc (setIcon:) set }
	@objc var informativeText: String { @objc get @objc (setInformativeText:) set }
	@objc var messageText: String { @objc get @objc (setMessageText:) set }
	@objc var showsHelp: Bool { @objc get @objc (setShowsHelp:) set }
	@objc @available(OSX 10.5, *) var showsSuppressionButton: Bool { @objc get @objc (setShowsSuppressionButton:) set }
	@objc @available(OSX 10.5, *) var suppressionButton: NSButton? { @objc get }
	@objc var window: NSWindow { @objc get }

	// Constructors
}

extension NSAlert: NSAlertExports {
}
