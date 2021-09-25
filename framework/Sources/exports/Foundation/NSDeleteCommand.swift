import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSDeleteCommandExports: JSExport, NSScriptCommandExports {
	// Static Methods

	// Instance Methods
	@objc func setReceiversSpecifier(_: NSScriptObjectSpecifier?)

	// Own Instance Properties
	@objc var keySpecifier: NSScriptObjectSpecifier { @objc get }

	// Constructors
	@objc static func create() -> NSDeleteCommand
}

extension NSDeleteCommand: NSDeleteCommandExports {
	@objc override class func create() -> NSDeleteCommand {
		return NSDeleteCommand()
	}

}
