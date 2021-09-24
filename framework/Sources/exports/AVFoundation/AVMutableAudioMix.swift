import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMutableAudioMixExports: JSExport, AVAudioMixExports {
	// Static Methods

	// Own Instance Properties
	@objc var inputParameters: [AVAudioMixInputParameters] { @objc get @objc (setInputParameters:) set }
}

extension AVMutableAudioMix: AVMutableAudioMixExports {}
