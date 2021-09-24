import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioSequencerExports: JSExport {
	// Static Methods

	// Instance Methods
	// last error param - @objc (beatsForHostTime:error:) func beats(_: UInt64) -> AVMusicTimeStamp
	@objc (beatsForSeconds:) func beats(forSeconds: TimeInterval) -> AVMusicTimeStamp
	// last error param - @objc (dataWithSMPTEResolution:error:) func data(_: Int) -> Data
	// last error param - @objc (hostTimeForBeats:error:) func hostTime(_: AVMusicTimeStamp) -> UInt64
	// throws - @objc func loadFromData(options: Data, error: AVMusicSequenceLoadOptions) -> Bool
	// throws - @objc func loadFromURL(options: NSURL, error: AVMusicSequenceLoadOptions) -> Bool
	@objc func prepareToPlay()
	@objc (secondsForBeats:) func seconds(forBeats: AVMusicTimeStamp) -> TimeInterval
	// throws - @objc func startAndReturnError() -> Bool
	@objc func stop()
	// throws - @objc func writeToURL(SMPTEResolution: NSURL, replaceExisting: Int, error: Bool) -> Bool

	// Own Instance Properties
	@objc var currentPositionInBeats: TimeInterval { @objc get @objc (setCurrentPositionInBeats:) set }
	@objc var currentPositionInSeconds: TimeInterval { @objc get @objc (setCurrentPositionInSeconds:) set }
	@objc var isPlaying: Bool { @objc get }
	@objc var rate: Float { @objc get @objc (setRate:) set }
	@objc var tempoTrack: AVMusicTrack { @objc get }
	@objc var tracks: [AVMusicTrack] { @objc get }
	@objc var userInfo: [String: Any] { @objc get }

	// Constructors
	@objc static func create(audioEngine: AVAudioEngine) -> AVAudioSequencer
}

extension AVAudioSequencer: AVAudioSequencerExports {
	@objc class func create(audioEngine: AVAudioEngine) -> AVAudioSequencer {
		return AVAudioSequencer(audioEngine: audioEngine)
	}

}
