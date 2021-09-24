import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSStoryboardExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc (mainStoryboard) @available(OSX 10.13, *) static var main: NSStoryboard? { @objc (mainStoryboard) get }

	// Instance Methods
	@objc (instantiateControllerWithIdentifier:) func instantiateController(withIdentifier: NSStoryboard.SceneIdentifier) -> Any
	// jsvalue - @objc @available(OSX 10.15, *) func instantiateControllerWithIdentifier(_: NSStoryboard.SceneIdentifier, creator: JSValue?) -> Any
	@objc func instantiateInitialController() -> Any?
	// jsvalue - @objc @available(OSX 10.15, *) func instantiateInitialControllerWithCreator(_: JSValue?) -> Any?

	// Constructors
}

extension NSStoryboard: NSStoryboardExports {
}
