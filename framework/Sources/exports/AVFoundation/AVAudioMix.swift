import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioMixExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var inputParameters: [AVAudioMixInputParameters] { @objc get }

	// Constructors
	@objc static func create() -> AVAudioMix
}

extension AVAudioMix: AVAudioMixExports {
	@objc class func create() -> AVAudioMix {
		return AVAudioMix()
	}

}
