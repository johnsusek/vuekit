import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSWindowControllerExports: JSExport, NSResponderExports {
	// , NSSeguePerformingExports
	// Static Methods

	// Instance Methods
	@objc func close()
	@objc (dismissController:) @available(OSX 10.10, *) func dismissController(_: Any?)
	@objc func loadWindow()
	@objc func setDocumentEdited(_: Bool)
	@objc func showWindow(_: Any?)
	@objc func synchronizeWindowTitleWithDocumentName()
	@objc func windowDidLoad()
	@objc (windowTitleForDocumentDisplayName:) func windowTitle(forDocumentDisplayName: String) -> String
	@objc func windowWillLoad()

	// Own Instance Properties
	@objc @available(OSX 10.10, *) var contentViewController: NSViewController? { @objc get @objc (setContentViewController:) set }
	@objc var document: AnyObject? { get set }
	@objc var owner: AnyObject? { get }
	@objc var shouldCascadeWindows: Bool { @objc get @objc (setShouldCascadeWindows:) set }
	@objc var shouldCloseDocument: Bool { @objc get @objc (setShouldCloseDocument:) set }
	@objc @available(OSX 10.10, *) var storyboard: NSStoryboard? { @objc get }
	@objc var window: NSWindow? { @objc get @objc (setWindow:) set }
	@objc var windowFrameAutosaveName: NSWindow.FrameAutosaveName { @objc get @objc (setWindowFrameAutosaveName:) set }
	@objc var isWindowLoaded: Bool { @objc get }
	@objc var windowNibName: NSNib.Name? { @objc get }
	@objc var windowNibPath: String? { @objc get }

	// Constructors
	@objc static func create(window: NSWindow?) -> NSWindowController
	@objc static func create(windowNibName: NSNib.Name) -> NSWindowController
	@objc static func create(windowNibName: NSNib.Name, owner: Any) -> NSWindowController
	@objc static func create(windowNibPath: String, owner: Any) -> NSWindowController
}

extension NSWindowController: NSWindowControllerExports {
	@objc class func create(window: NSWindow?) -> NSWindowController {
		return NSWindowController(window: window)
	}

	@objc class func create(windowNibName: NSNib.Name) -> NSWindowController {
		return NSWindowController(windowNibName: windowNibName)
	}

	@objc class func create(windowNibName: NSNib.Name, owner: Any) -> NSWindowController {
		return NSWindowController(windowNibName: windowNibName, owner: owner)
	}

	@objc class func create(windowNibPath: String, owner: Any) -> NSWindowController {
		return NSWindowController(windowNibPath: windowNibPath, owner: owner)
	}

}
