import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVVideoCompositionRenderHintExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var endCompositionTime: CMTime { @objc get }
	@objc var startCompositionTime: CMTime { @objc get }

	// Constructors
}

extension AVVideoCompositionRenderHint: AVVideoCompositionRenderHintExports {
}
