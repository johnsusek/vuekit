import AppKit
import JavaScriptCore

@objc protocol NSMediaLibraryBrowserControllerExports: JSExport {
	@objc var frame: NSRect { @objc get @objc (setFrame:) set }
	@objc var mediaLibraries: NSMediaLibraryBrowserController.Library { @objc get @objc (setMediaLibraries:) set }
	@objc var isVisible: Bool { @objc get @objc (setVisible:) set }
	@objc static var shared: NSMediaLibraryBrowserController { @objc (sharedMediaLibraryBrowserController) get }
	@objc func togglePanel(_: Any?)
}

extension NSMediaLibraryBrowserController: NSMediaLibraryBrowserControllerExports {
	@objc override class func create() -> NSMediaLibraryBrowserController {
		return NSMediaLibraryBrowserController()
	}
}
