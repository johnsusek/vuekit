import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSpeechSynthesizerExports: JSExport {
	// Static Methods
	@objc (attributesForVoice:) static func attributes(forVoice voice: NSSpeechSynthesizer.VoiceName) -> [NSSpeechSynthesizer.VoiceAttributeKey : Any]

	// Own Static Properties
	@objc static var isAnyApplicationSpeaking: Bool { @objc get }
	@objc static var availableVoices: [NSSpeechSynthesizer.VoiceName] { get }
	@objc static var defaultVoice: NSSpeechSynthesizer.VoiceName { @objc get }

	// Instance Methods
	@objc @available(OSX 10.5, *) func addSpeechDictionary(_ speechDictionary: [NSSpeechSynthesizer.DictionaryKey : Any])
	@objc @available(OSX 10.5, *) func continueSpeaking()
	// throws - @objc @available(OSX 10.5, *) func objectForProperty(error: NSSpeechSynthesizer.SpeechPropertyKey) -> Any?
	@objc (pauseSpeakingAtBoundary:) @available(OSX 10.5, *) func pauseSpeaking(at: NSSpeechSynthesizer.Boundary)
	@objc (phonemesFromText:) @available(OSX 10.5, *) func phonemes(from: String) -> String
	// throws - @objc @available(OSX 10.5, *) func setObject(forProperty: Any?, error: NSSpeechSynthesizer.SpeechPropertyKey) -> Bool
	@objc func setVoice(_: NSSpeechSynthesizer.VoiceName?) -> Bool
	@objc (startSpeakingString:) func startSpeaking(_: String) -> Bool
	@objc (startSpeakingString:toURL:) func startSpeaking(_ string: String, to url: URL) -> Bool
	@objc func stopSpeaking()
	@objc (stopSpeakingAtBoundary:) @available(OSX 10.5, *) func stopSpeaking(at: NSSpeechSynthesizer.Boundary)
	@objc func voice() -> NSSpeechSynthesizer.VoiceName?

	// Own Instance Properties
	@objc var delegate: NSSpeechSynthesizerDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.5, *) var rate: Float { @objc get @objc (setRate:) set }
	@objc var isSpeaking: Bool { @objc get }
	@objc var usesFeedbackWindow: Bool { @objc get @objc (setUsesFeedbackWindow:) set }
	@objc @available(OSX 10.5, *) var volume: Float { @objc get @objc (setVolume:) set }

	// Constructors
	@objc static func create() -> NSSpeechSynthesizer
	@objc static func create(voice: NSSpeechSynthesizer.VoiceName?) -> NSSpeechSynthesizer?
}

extension NSSpeechSynthesizer: NSSpeechSynthesizerExports {
	@objc class func create() -> NSSpeechSynthesizer {
		return NSSpeechSynthesizer()
	}

	@objc class func create(voice: NSSpeechSynthesizer.VoiceName?) -> NSSpeechSynthesizer? {
		return NSSpeechSynthesizer(voice: voice)
	}

}
