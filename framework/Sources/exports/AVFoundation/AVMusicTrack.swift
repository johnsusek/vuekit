import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMusicTrackExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var destinationAudioUnit: AVAudioUnit? { @objc get @objc (setDestinationAudioUnit:) set }
	@objc var destinationMIDIEndpoint: MIDIEndpointRef { @objc get @objc (setDestinationMIDIEndpoint:) set }
	@objc var lengthInBeats: AVMusicTimeStamp { @objc get @objc (setLengthInBeats:) set }
	@objc var lengthInSeconds: TimeInterval { @objc get @objc (setLengthInSeconds:) set }
	@objc var loopRange: AVBeatRange { @objc get @objc (setLoopRange:) set }
	@objc var isLoopingEnabled: Bool { @objc get @objc (setLoopingEnabled:) set }
	@objc var isMuted: Bool { @objc get @objc (setMuted:) set }
	@objc var numberOfLoops: Int { @objc get @objc (setNumberOfLoops:) set }
	@objc var offsetTime: AVMusicTimeStamp { @objc get @objc (setOffsetTime:) set }
	@objc var isSoloed: Bool { @objc get @objc (setSoloed:) set }
	@objc var timeResolution: Int { @objc get }

	// Constructors
	@objc static func create() -> AVMusicTrack
}

extension AVMusicTrack: AVMusicTrackExports {
	@objc class func create() -> AVMusicTrack {
		return AVMusicTrack()
	}

}
