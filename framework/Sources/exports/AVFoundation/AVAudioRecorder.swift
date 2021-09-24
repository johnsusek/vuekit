import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioRecorderExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (averagePowerForChannel:) func averagePower(forChannel: Int) -> Float
	@objc func deleteRecording() -> Bool
	@objc func pause()
	@objc (peakPowerForChannel:) func peakPower(forChannel: Int) -> Float
	@objc func prepareToRecord() -> Bool
	@objc func record() -> Bool
	@objc (recordAtTime:) @available(OSX 10.9, *) func record(atTime: TimeInterval) -> Bool
	@objc (recordAtTime:forDuration:) @available(OSX 10.9, *) func record(atTime: TimeInterval, forDuration: TimeInterval) -> Bool
	@objc (recordForDuration:) func record(forDuration: TimeInterval) -> Bool
	@objc func stop()
	@objc func updateMeters()

	// Own Instance Properties
	@objc var currentTime: TimeInterval { @objc get }
	@objc var delegate: AVAudioRecorderDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.9, *) var deviceCurrentTime: TimeInterval { @objc get }
	@objc @available(OSX 10.12, *) var format: AVAudioFormat { @objc get }
	@objc var isMeteringEnabled: Bool { @objc get @objc (setMeteringEnabled:) set }
	@objc var isRecording: Bool { @objc get }
	@objc var settings: [String: Any] { @objc get }
	@objc var url: URL { get }
}

extension AVAudioRecorder: AVAudioRecorderExports {}
