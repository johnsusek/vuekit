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
}

extension AVAudioMix: AVAudioMixExports {
}
