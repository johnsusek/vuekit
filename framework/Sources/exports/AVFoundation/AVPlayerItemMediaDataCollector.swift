import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerItemMediaDataCollectorExports: JSExport {
	// Static Methods

	// Constructors
	@objc static func create() -> AVPlayerItemMediaDataCollector
}

extension AVPlayerItemMediaDataCollector: AVPlayerItemMediaDataCollectorExports {
	@objc class func create() -> AVPlayerItemMediaDataCollector {
		return AVPlayerItemMediaDataCollector()
	}

}
