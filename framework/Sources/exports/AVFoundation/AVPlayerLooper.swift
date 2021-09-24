import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerLooperExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func disableLooping()

	// Own Instance Properties
	@objc var error: Error? { @objc get }
	@objc var loopCount: Int { @objc get }
	@objc var loopingPlayerItems: [AVPlayerItem] { @objc get }
	@objc var status: AVPlayerLooper.Status { @objc get }

	// Constructors
	@objc static func create(player: AVQueuePlayer, templateItem: AVPlayerItem, timeRange: CMTimeRange) -> AVPlayerLooper
}

extension AVPlayerLooper: AVPlayerLooperExports {
	@objc class func create(player: AVQueuePlayer, templateItem: AVPlayerItem, timeRange: CMTimeRange) -> AVPlayerLooper {
		return AVPlayerLooper(player: player, templateItem: templateItem, timeRange: timeRange)
	}

}
