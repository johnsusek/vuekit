import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSMediaLibraryBrowserControllerExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc (sharedMediaLibraryBrowserController) static var shared: NSMediaLibraryBrowserController { @objc (sharedMediaLibraryBrowserController) get }

	// Instance Methods
	@objc func togglePanel(_: Any?)

	// Own Instance Properties
	@objc var frame: NSRect { @objc get @objc (setFrame:) set }
	@objc var mediaLibraries: NSMediaLibraryBrowserController.Library { @objc get @objc (setMediaLibraries:) set }
	@objc var isVisible: Bool { @objc get @objc (setVisible:) set }

	// Constructors
}

extension NSMediaLibraryBrowserController: NSMediaLibraryBrowserControllerExports {
}
