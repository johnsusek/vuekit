import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSHelpManagerExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc static var isContextHelpModeActive: Bool { @objc get @objc (setContextHelpModeActive:) set }
	@objc (sharedHelpManager) static var shared: NSHelpManager { @objc (sharedHelpManager) get }

	// Instance Methods
	@objc (contextHelpForObject:) func contextHelp(`for`: Any) -> NSAttributedString?
	@objc (findString:inBook:) func find(_: String, inBook: NSHelpManager.BookName?)
	@objc func openHelpAnchor(_: NSHelpManager.AnchorName, inBook: NSHelpManager.BookName?)
	@objc (registerBooksInBundle:) @available(OSX 10.6, *) func registerBooks(in: Bundle) -> Bool
	@objc (removeContextHelpForObject:) func removeContextHelp(`for`: Any)
	@objc (setContextHelp:forObject:) func setContextHelp(_: NSAttributedString, `for`: Any)
	@objc (showContextHelpForObject:locationHint:) func showContextHelp(`for`: Any, locationHint: NSPoint) -> Bool

	// Constructors
}

extension NSHelpManager: NSHelpManagerExports {
}
