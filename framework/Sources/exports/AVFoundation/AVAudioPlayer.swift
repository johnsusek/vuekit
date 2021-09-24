import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioPlayerExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (averagePowerForChannel:) func averagePower(forChannel: Int) -> Float
	@objc func pause()
	@objc (peakPowerForChannel:) func peakPower(forChannel: Int) -> Float
	@objc func play() -> Bool
	@objc (playAtTime:) @available(OSX 10.7, *) func play(atTime: TimeInterval) -> Bool
	@objc func prepareToPlay() -> Bool
	@objc @available(OSX 10.12, *) func setVolume(_: Float, fadeDuration: TimeInterval)
	@objc func stop()
	@objc func updateMeters()

	// Own Instance Properties
	@objc @available(OSX 10.13, *) var currentDevice: String? { @objc get @objc (setCurrentDevice:) set }
	@objc var currentTime: TimeInterval { @objc get @objc (setCurrentTime:) set }
	@objc var data: Data? { @objc get }
	@objc var delegate: AVAudioPlayerDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.7, *) var deviceCurrentTime: TimeInterval { @objc get }
	@objc var duration: TimeInterval { @objc get }
	@objc @available(OSX 10.8, *) var enableRate: Bool { @objc get @objc (setEnableRate:) set }
	@objc @available(OSX 10.12, *) var format: AVAudioFormat { @objc get }
	@objc var isMeteringEnabled: Bool { @objc get @objc (setMeteringEnabled:) set }
	@objc var numberOfChannels: Int { @objc get }
	@objc var numberOfLoops: Int { @objc get @objc (setNumberOfLoops:) set }
	@objc @available(OSX 10.7, *) var pan: Float { @objc get @objc (setPan:) set }
	@objc var isPlaying: Bool { @objc get }
	@objc @available(OSX 10.8, *) var rate: Float { @objc get @objc (setRate:) set }
	@objc @available(OSX 10.7, *) var settings: [String: Any] { @objc get }
	@objc var url: URL? { get }
	@objc var volume: Float { @objc get @objc (setVolume:) set }
}

extension AVAudioPlayer: AVAudioPlayerExports {}
