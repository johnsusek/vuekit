import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVSpeechUtteranceExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc @available(OSX 10.14, *) var attributedSpeechString: NSAttributedString { @objc get }
	@objc var pitchMultiplier: Float { @objc get @objc (setPitchMultiplier:) set }
	@objc var postUtteranceDelay: TimeInterval { @objc get @objc (setPostUtteranceDelay:) set }
	@objc var preUtteranceDelay: TimeInterval { @objc get @objc (setPreUtteranceDelay:) set }
	@objc var rate: Float { @objc get @objc (setRate:) set }
	@objc var speechString: String { @objc get }
	@objc var voice: AVSpeechSynthesisVoice? { @objc get @objc (setVoice:) set }
	@objc var volume: Float { @objc get @objc (setVolume:) set }
}

extension AVSpeechUtterance: AVSpeechUtteranceExports {}
