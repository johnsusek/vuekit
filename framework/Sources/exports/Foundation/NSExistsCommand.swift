import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSExistsCommandExports: JSExport, NSScriptCommandExports {
	// Static Methods

	// Constructors
	@objc static func create() -> NSExistsCommand
}

extension NSExistsCommand: NSExistsCommandExports {
	@objc override class func create() -> NSExistsCommand {
		return NSExistsCommand()
	}

}
