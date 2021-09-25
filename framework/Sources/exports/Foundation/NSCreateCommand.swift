import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSCreateCommandExports: JSExport, NSScriptCommandExports {
	// Static Methods

	// Own Instance Properties
	@objc var createClassDescription: NSScriptClassDescription { @objc get }
	@objc var resolvedKeyDictionary: [String: Any] { @objc get }

	// Constructors
	@objc static func create() -> NSCreateCommand
}

extension NSCreateCommand: NSCreateCommandExports {
	@objc override class func create() -> NSCreateCommand {
		return NSCreateCommand()
	}

}
