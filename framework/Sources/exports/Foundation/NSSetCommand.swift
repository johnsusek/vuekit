import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSSetCommandExports: JSExport, NSScriptCommandExports {
	// Static Methods

	// Instance Methods
	@objc func setReceiversSpecifier(_: NSScriptObjectSpecifier?)

	// Own Instance Properties
	@objc var keySpecifier: NSScriptObjectSpecifier { @objc get }

	// Constructors
	@objc static func create() -> NSSetCommand
}

extension NSSetCommand: NSSetCommandExports {
	@objc override class func create() -> NSSetCommand {
		return NSSetCommand()
	}

}
