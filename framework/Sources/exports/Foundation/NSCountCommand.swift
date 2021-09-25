import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSCountCommandExports: JSExport, NSScriptCommandExports {
	// Static Methods

	// Constructors
	@objc static func create() -> NSCountCommand
}

extension NSCountCommand: NSCountCommandExports {
	@objc override class func create() -> NSCountCommand {
		return NSCountCommand()
	}

}
