import AppKit
import JavaScriptCore

@objc protocol NSStoryboardExports: JSExport {
	@objc @available(OSX 10.13, *) static var main: NSStoryboard? { @objc (mainStoryboard) get }
	@objc (instantiateControllerWithIdentifier:) func instantiateController(withIdentifier: NSStoryboard.SceneIdentifier) -> Any
	// @objc @available(OSX 10.15, *) func instantiateControllerWithIdentifier(_: NSStoryboard.SceneIdentifier, creator: JSManagedValue /* NSCoder: Any */?) -> Any
	@objc func instantiateInitialController() -> Any?
	// @objc @available(OSX 10.15, *) func instantiateInitialControllerWithCreator(_: JSManagedValue /* NSCoder: Any */?) -> Any?
	@objc static func create(name: NSStoryboard.Name, bundle: Bundle?) -> NSStoryboard
}

extension NSStoryboard: NSStoryboardExports {
	@objc class func create(name: NSStoryboard.Name, bundle: Bundle?) -> NSStoryboard {
		return NSStoryboard(name: name, bundle: bundle)
	}

	@objc override class func create() -> NSStoryboard {
		return NSStoryboard()
	}
}
