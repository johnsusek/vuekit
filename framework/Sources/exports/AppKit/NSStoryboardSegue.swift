import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSStoryboardSegueExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func perform()

	// Own Instance Properties
	@objc var destinationController: Any { @objc get }
	@objc var identifier: NSStoryboardSegue.Identifier? { @objc get }
	@objc var sourceController: Any { @objc get }

	// Constructors
	@objc static func create() -> NSStoryboardSegue
	@objc static func create(identifier: NSStoryboardSegue.Identifier, source: Any, destination: Any) -> NSStoryboardSegue
}

extension NSStoryboardSegue: NSStoryboardSegueExports {
	@objc class func create() -> NSStoryboardSegue {
		return NSStoryboardSegue()
	}

	@objc class func create(identifier: NSStoryboardSegue.Identifier, source: Any, destination: Any) -> NSStoryboardSegue {
		return NSStoryboardSegue(identifier: identifier, source: source, destination: destination)
	}

}
