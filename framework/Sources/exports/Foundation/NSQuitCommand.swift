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
}

extension NSQuitCommand: NSQuitCommandExports {
}
