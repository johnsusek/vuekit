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
}

extension NSHapticFeedbackManager: NSHapticFeedbackManagerExports {
}
