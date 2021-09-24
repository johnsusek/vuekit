import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSMoveCommandExports: JSExport, NSScriptCommandExports {
	// Static Methods

	// Instance Methods
	@objc func setReceiversSpecifier(_: NSScriptObjectSpecifier?)

	// Own Instance Properties
	@objc var keySpecifier: NSScriptObjectSpecifier { @objc get }

	// Constructors
}

extension NSMoveCommand: NSMoveCommandExports {
}
