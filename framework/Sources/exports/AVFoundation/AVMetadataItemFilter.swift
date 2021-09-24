import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMetadataItemFilterExports: JSExport {
	// Static Methods
	@objc (metadataItemFilterForSharing) static func forSharing() -> AVMetadataItemFilter

	// Constructors
}

extension AVMetadataItemFilter: AVMetadataItemFilterExports {
}
