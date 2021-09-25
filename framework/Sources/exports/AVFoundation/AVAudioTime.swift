import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioTimeExports: JSExport {
	// Static Methods
	@objc (hostTimeForSeconds:) static func hostTime(forSeconds: TimeInterval) -> UInt64
	@objc (secondsForHostTime:) static func seconds(forHostTime: UInt64) -> TimeInterval

	// Instance Methods
	@objc (extrapolateTimeFromAnchor:) func extrapolateTime(fromAnchor: AVAudioTime) -> AVAudioTime?

	// Own Instance Properties
	@objc var audioTimeStamp: AudioTimeStamp { @objc get }
	@objc var hostTime: UInt64 { @objc get }
	@objc var isHostTimeValid: Bool { @objc get }
	@objc var sampleRate: Double { @objc get }
	@objc var sampleTime: AVAudioFramePosition { @objc get }
	@objc var isSampleTimeValid: Bool { @objc get }

	// Constructors
	@objc static func create() -> AVAudioTime
	@objc static func create(audioTimeStamp: UnsafePointer<AudioTimeStamp>, sampleRate: Double) -> AVAudioTime
	@objc static func create(hostTime: UInt64) -> AVAudioTime
	@objc static func create(hostTime: UInt64, sampleTime: AVAudioFramePosition, atRate: Double) -> AVAudioTime
	@objc static func create(sampleTime: AVAudioFramePosition, atRate: Double) -> AVAudioTime
}

extension AVAudioTime: AVAudioTimeExports {
	@objc class func create() -> AVAudioTime {
		return AVAudioTime()
	}

	@objc class func create(audioTimeStamp: UnsafePointer<AudioTimeStamp>, sampleRate: Double) -> AVAudioTime {
		return AVAudioTime(audioTimeStamp: audioTimeStamp, sampleRate: sampleRate)
	}

	@objc class func create(hostTime: UInt64) -> AVAudioTime {
		return AVAudioTime(hostTime: hostTime)
	}

	@objc class func create(hostTime: UInt64, sampleTime: AVAudioFramePosition, atRate: Double) -> AVAudioTime {
		return AVAudioTime(hostTime: hostTime, sampleTime: sampleTime, atRate: atRate)
	}

	@objc class func create(sampleTime: AVAudioFramePosition, atRate: Double) -> AVAudioTime {
		return AVAudioTime(sampleTime: sampleTime, atRate: atRate)
	}

}
