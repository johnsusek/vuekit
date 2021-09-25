import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSGetCommandExports: JSExport, NSScriptCommandExports {
	// Static Methods

	// Constructors
	@objc static func create() -> NSGetCommand
}

extension NSGetCommand: NSGetCommandExports {
	@objc override class func create() -> NSGetCommand {
		return NSGetCommand()
	}

}
