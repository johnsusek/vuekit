import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMutableMediaSelectionExports: JSExport, AVMediaSelectionExports {
	// Static Methods

	// Instance Methods
	@objc (selectMediaOption:inMediaSelectionGroup:) func select(_: AVMediaSelectionOption?, in: AVMediaSelectionGroup)

	// Constructors
}

extension AVMutableMediaSelection: AVMutableMediaSelectionExports {
}
