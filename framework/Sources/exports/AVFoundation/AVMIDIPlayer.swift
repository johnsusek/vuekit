import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMIDIPlayerExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func play(_ completionHandler: AVMIDIPlayerCompletionHandler?)
	@objc func prepareToPlay()
	@objc func stop()

	// Own Instance Properties
	@objc var currentPosition: TimeInterval { @objc get @objc (setCurrentPosition:) set }
	@objc var duration: TimeInterval { @objc get }
	@objc var isPlaying: Bool { @objc get }
	@objc var rate: Float { @objc get @objc (setRate:) set }
}

extension AVMIDIPlayer: AVMIDIPlayerExports {}
