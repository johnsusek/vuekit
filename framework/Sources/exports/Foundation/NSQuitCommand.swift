import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSQuitCommandExports: JSExport, NSScriptCommandExports {
	// Static Methods

	// Own Instance Properties
	@objc var saveOptions: NSSaveOptions { @objc get }

	// Constructors
	@objc static func create() -> NSQuitCommand
}

extension NSQuitCommand: NSQuitCommandExports {
	@objc override class func create() -> NSQuitCommand {
		return NSQuitCommand()
	}

}
