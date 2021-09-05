import AppKit
import JavaScriptCore

@objc protocol NSAlertExports: JSExport {
	@objc static func create(error: Error) -> NSAlert
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
	@objc (addButtonWithTitle:) func addButton(withTitle: String) -> NSButton
	// @objc (beginSheetModalForWindow:completionHandler:) @available(OSX 10.9, *) func beginSheetModal(`for`: NSWindow, completionHandler: JSManagedValue /* void (^ _Nullable)(NSModalResponse): Void */?)
	@objc @available(OSX 10.5, *) func layout()
	@objc func runModal() -> NSApplication.ModalResponse
}

extension NSAlert: NSAlertExports {
	@objc class func create(error: Error) -> NSAlert {
		return NSAlert(error: error)
	}

	@objc override class func create() -> NSAlert {
		return NSAlert()
	}
}
