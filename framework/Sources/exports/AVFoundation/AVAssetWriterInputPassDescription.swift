import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetWriterInputPassDescriptionExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var sourceTimeRanges: [NSValue] { @objc get }

	// Constructors
}

extension AVAssetWriterInputPassDescription: AVAssetWriterInputPassDescriptionExports {
}
