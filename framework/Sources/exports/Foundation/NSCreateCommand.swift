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
}

extension NSCreateCommand: NSCreateCommandExports {
}
