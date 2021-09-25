import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSCloseCommandExports: JSExport, NSScriptCommandExports {
	// Static Methods

	// Own Instance Properties
	@objc var saveOptions: NSSaveOptions { @objc get }

	// Constructors
	@objc static func create() -> NSCloseCommand
}

extension NSCloseCommand: NSCloseCommandExports {
	@objc override class func create() -> NSCloseCommand {
		return NSCloseCommand()
	}

}
