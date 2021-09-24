import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioChannelLayoutExports: JSExport {
	// , NSSecureCodingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var channelCount: AVAudioChannelCount { @objc get }
	@objc var layout: UnsafePointer<AudioChannelLayout> { @objc get }
	@objc var layoutTag: AudioChannelLayoutTag { @objc get }

	// Constructors
	@objc static func create(layout: UnsafePointer<AudioChannelLayout>) -> AVAudioChannelLayout
	@objc static func create(layoutTag: AudioChannelLayoutTag) -> AVAudioChannelLayout?
}

extension AVAudioChannelLayout: AVAudioChannelLayoutExports {
	@objc class func create(layout: UnsafePointer<AudioChannelLayout>) -> AVAudioChannelLayout {
		return AVAudioChannelLayout(layout: layout)
	}

	@objc class func create(layoutTag: AudioChannelLayoutTag) -> AVAudioChannelLayout? {
		return AVAudioChannelLayout(layoutTag: layoutTag)
	}

}
