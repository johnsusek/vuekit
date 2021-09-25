import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVSpeechSynthesisVoiceExports: JSExport {
	// , NSSecureCodingExports
	// Static Methods
	@objc static func currentLanguageCode() -> String
	@objc static func speechVoices() -> [AVSpeechSynthesisVoice]
	@objc @available(OSX 10.14, *) static func create(identifier: String) -> AVSpeechSynthesisVoice?
	@objc static func create(language: String?) -> AVSpeechSynthesisVoice?

	// Own Instance Properties
	@objc @available(OSX 10.15, *) var audioFileSettings: [String: Any] { @objc get }
	@objc @available(OSX 10.15, *) var gender: AVSpeechSynthesisVoiceGender { @objc get }
	@objc @available(OSX 10.14, *) var identifier: String { @objc get }
	@objc var language: String { @objc get }
	@objc @available(OSX 10.14, *) var name: String { @objc get }
	@objc @available(OSX 10.14, *) var quality: AVSpeechSynthesisVoiceQuality { @objc get }

	// Constructors
	@objc static func create() -> AVSpeechSynthesisVoice
}

extension AVSpeechSynthesisVoice: AVSpeechSynthesisVoiceExports {
	@objc class func create() -> AVSpeechSynthesisVoice {
		return AVSpeechSynthesisVoice()
	}

	@objc class func create(language: String?) -> AVSpeechSynthesisVoice? {
		return AVSpeechSynthesisVoice(language: language)
	}

	@objc @available(OSX 10.14, *) class func create(identifier: String) -> AVSpeechSynthesisVoice? {
		return AVSpeechSynthesisVoice(identifier: identifier)
	}

}
