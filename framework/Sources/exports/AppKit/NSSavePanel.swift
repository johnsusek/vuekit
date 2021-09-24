import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSavePanelExports: JSExport, NSPanelExports {
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (beginSheetModalForWindow:completionHandler:) @available(OSX 10.6, *) func beginSheetModal(`for`: NSWindow, completionHandler: JSValue)
	// jsvalue - @objc (beginWithCompletionHandler:) @available(OSX 10.6, *) func begin(completionHandler: JSValue)
	@objc func cancel(_: Any?)
	@objc func ok(_: Any?)
	@objc func runModal() -> NSApplication.ModalResponse
	@objc func validateVisibleColumns()

	// Own Instance Properties
	@objc (URL) var url: URL? { get }
	@objc var accessoryView: NSView? { @objc get @objc (setAccessoryView:) set }
	@objc var allowsOtherFileTypes: Bool { @objc get @objc (setAllowsOtherFileTypes:) set }
	@objc var canCreateDirectories: Bool { @objc get @objc (setCanCreateDirectories:) set }
	@objc var canSelectHiddenExtension: Bool { @objc get @objc (setCanSelectHiddenExtension:) set }
	@objc var delegate: NSOpenSavePanelDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.6, *) var directoryURL: URL? { get set }
	@objc var isExpanded: Bool { @objc get }
	@objc var isExtensionHidden: Bool { @objc get @objc (setExtensionHidden:) set }
	@objc var message: String! { @objc get @objc (setMessage:) set }
	@objc var nameFieldLabel: String! { @objc get @objc (setNameFieldLabel:) set }
	@objc @available(OSX 10.6, *) var nameFieldStringValue: String { @objc get @objc (setNameFieldStringValue:) set }
	@objc var prompt: String! { @objc get @objc (setPrompt:) set }
	@objc var showsHiddenFiles: Bool { @objc get @objc (setShowsHiddenFiles:) set }
	@objc @available(OSX 10.9, *) var showsTagField: Bool { @objc get @objc (setShowsTagField:) set }
	@objc @available(OSX 10.9, *) var tagNames: [String]? { @objc get @objc (setTagNames:) set }
	@objc var treatsFilePackagesAsDirectories: Bool { @objc get @objc (setTreatsFilePackagesAsDirectories:) set }

	// Constructors
}

extension NSSavePanel: NSSavePanelExports {
}
