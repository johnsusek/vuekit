import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSHapticFeedbackManagerExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc static var defaultPerformer: NSHapticFeedbackPerformer { @objc get }

	// Constructors
	@objc static func create() -> NSHapticFeedbackManager
}

extension NSHapticFeedbackManager: NSHapticFeedbackManagerExports {
	@objc class func create() -> NSHapticFeedbackManager {
		return NSHapticFeedbackManager()
	}

}
