import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerItemTrackExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var assetTrack: AVAssetTrack? { @objc get }
	@objc @available(OSX 10.9, *) var currentVideoFrameRate: Float { @objc get }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc @available(OSX 10.10, *) var videoFieldMode: String? { @objc get @objc (setVideoFieldMode:) set }

	// Constructors
	@objc static func create() -> AVPlayerItemTrack
}

extension AVPlayerItemTrack: AVPlayerItemTrackExports {
	@objc class func create() -> AVPlayerItemTrack {
		return AVPlayerItemTrack()
	}

}
