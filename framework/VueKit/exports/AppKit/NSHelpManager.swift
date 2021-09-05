import AppKit
import JavaScriptCore

@objc protocol NSHelpManagerExports: JSExport {
	@objc static var isContextHelpModeActive: Bool { @objc get @objc (setContextHelpModeActive:) set }
	@objc static var shared: NSHelpManager { @objc (sharedHelpManager) get }
	@objc (contextHelpForObject:) func contextHelp(`for`: Any) -> NSAttributedString?
	@objc (findString:inBook:) func find(_: String, inBook: NSHelpManager.BookName?)
	@objc func openHelpAnchor(_: NSHelpManager.AnchorName, inBook: NSHelpManager.BookName?)
	@objc (registerBooksInBundle:) @available(OSX 10.6, *) func registerBooks(in: Bundle) -> Bool
	@objc (removeContextHelpForObject:) func removeContextHelp(`for`: Any)
	@objc (setContextHelp:forObject:) func setContextHelp(_: NSAttributedString, `for`: Any)
	@objc (showContextHelpForObject:locationHint:) func showContextHelp(`for`: Any, locationHint: NSPoint) -> Bool
}

extension NSHelpManager: NSHelpManagerExports {
	@objc override class func create() -> NSHelpManager {
		return NSHelpManager()
	}
}
