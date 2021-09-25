import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVSpeechSynthesizerExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func continueSpeaking() -> Bool
	@objc (pauseSpeakingAtBoundary:) func pauseSpeaking(at: AVSpeechBoundary) -> Bool
	@objc (speakUtterance:) func speak(_: AVSpeechUtterance)
	@objc (stopSpeakingAtBoundary:) func stopSpeaking(at: AVSpeechBoundary) -> Bool
	// jsvalue - @objc (writeUtterance:toBufferCallback:) @available(OSX 10.15, *) func write(_: AVSpeechUtterance, toBufferCallback: JSValue)

	// Own Instance Properties
	@objc var delegate: AVSpeechSynthesizerDelegate? { @objc get @objc (setDelegate:) set }
	@objc var isPaused: Bool { @objc get }
	@objc var isSpeaking: Bool { @objc get }

	// Constructors
	@objc static func create() -> AVSpeechSynthesizer
}

extension AVSpeechSynthesizer: AVSpeechSynthesizerExports {
	@objc class func create() -> AVSpeechSynthesizer {
		return AVSpeechSynthesizer()
	}

}
