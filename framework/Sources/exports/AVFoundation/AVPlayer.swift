import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc @available(OSX 10.15, *) static var eligibleForHDRPlayback: Bool { @objc get }

	// Instance Methods
	// jsvalue - @objc (addBoundaryTimeObserverForTimes:queue:usingBlock:) func addBoundaryTimeObserver(forTimes: [NSValue], queue: DispatchQueue?, using: JSValue) -> Any
	// jsvalue - @objc (addPeriodicTimeObserverForInterval:queue:usingBlock:) func addPeriodicTimeObserver(forInterval: CMTime, queue: DispatchQueue?, using: JSValue) -> Any
	@objc @available(OSX 10.8, *) func cancelPendingPrerolls()
	@objc func currentTime() -> CMTime
	@objc (mediaSelectionCriteriaForMediaCharacteristic:) @available(OSX 10.9, *) func mediaSelectionCriteria(forMediaCharacteristic: AVMediaCharacteristic) -> AVPlayerMediaSelectionCriteria?
	@objc func pause()
	@objc func play()
	@objc (playImmediatelyAtRate:) @available(OSX 10.12, *) func playImmediately(atRate: Float)
	// jsvalue - @objc (prerollAtRate:completionHandler:) @available(OSX 10.8, *) func preroll(atRate: Float, completionHandler: JSValue)
	@objc func removeTimeObserver(_: Any)
	@objc (replaceCurrentItemWithPlayerItem:) func replaceCurrentItem(with: AVPlayerItem?)
	@objc (seekToDate:) func seek(to: Date)
	// jsvalue - @objc (seekToDate:completionHandler:) @available(OSX 10.7, *) func seek(to: Date, completionHandler: JSValue)
	@objc (seekToTime:) func seek(to: CMTime)
	// jsvalue - @objc (seekToTime:completionHandler:) @available(OSX 10.7, *) func seek(to: CMTime, completionHandler: JSValue)
	@objc (seekToTime:toleranceBefore:toleranceAfter:) func seek(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime)
	// jsvalue - @objc (seekToTime:toleranceBefore:toleranceAfter:completionHandler:) @available(OSX 10.7, *) func seek(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: JSValue)
	@objc @available(OSX 10.9, *) func setMediaSelectionCriteria(_: AVPlayerMediaSelectionCriteria?, forMediaCharacteristic: AVMediaCharacteristic)
	@objc @available(OSX 10.8, *) func setRate(_: Float, time: CMTime, atHostTime: CMTime)

	// Own Instance Properties
	@objc var actionAtItemEnd: AVPlayer.ActionAtItemEnd { @objc get @objc (setActionAtItemEnd:) set }
	@objc @available(OSX 10.11, *) var allowsExternalPlayback: Bool { @objc get @objc (setAllowsExternalPlayback:) set }
	@objc @available(OSX 10.9, *) var appliesMediaSelectionCriteriaAutomatically: Bool { @objc get @objc (setAppliesMediaSelectionCriteriaAutomatically:) set }
	@objc @available(OSX 10.9, *) var audioOutputDeviceUniqueID: String? { @objc get @objc (setAudioOutputDeviceUniqueID:) set }
	@objc @available(OSX 10.12, *) var automaticallyWaitsToMinimizeStalling: Bool { @objc get @objc (setAutomaticallyWaitsToMinimizeStalling:) set }
	@objc var currentItem: AVPlayerItem? { @objc get }
	@objc var error: Error? { @objc get }
	@objc @available(OSX 10.11, *) var isExternalPlaybackActive: Bool { @objc get }
	@objc @available(OSX 10.8, *) var masterClock: CMClock? { @objc get @objc (setMasterClock:) set }
	@objc @available(OSX 10.7, *) var isMuted: Bool { @objc get @objc (setMuted:) set }
	@objc @available(OSX 10.12, *) var isOutputObscuredDueToInsufficientExternalProtection: Bool { @objc (outputObscuredDueToInsufficientExternalProtection) get }
	@objc @available(OSX 10.13, *) var preferredVideoDecoderGPURegistryID: UInt64 { @objc get @objc (setPreferredVideoDecoderGPURegistryID:) set }
	@objc @available(OSX 10.14, *) var preventsDisplaySleepDuringVideoPlayback: Bool { @objc get @objc (setPreventsDisplaySleepDuringVideoPlayback:) set }
	@objc var rate: Float { @objc get @objc (setRate:) set }
	@objc @available(OSX 10.12, *) var reasonForWaitingToPlay: AVPlayer.WaitingReason? { @objc get }
	@objc var status: AVPlayer.Status { @objc get }
	@objc @available(OSX 10.12, *) var timeControlStatus: AVPlayer.TimeControlStatus { @objc get }
	@objc @available(OSX 10.7, *) var volume: Float { @objc get @objc (setVolume:) set }

	// Constructors
	@objc static func create(playerItem: AVPlayerItem?) -> AVPlayer
	@objc static func create(url: URL) -> AVPlayer
}

extension AVPlayer: AVPlayerExports {
	@objc class func create(playerItem: AVPlayerItem?) -> AVPlayer {
		return AVPlayer(playerItem: playerItem)
	}

	@objc class func create(url: URL) -> AVPlayer {
		return AVPlayer(url: url)
	}

}
