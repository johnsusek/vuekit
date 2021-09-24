import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioMixingDestinationExports: JSExport {
	// , AVAudioMixingExports
	// Static Methods

	// Own Instance Properties
	@objc var connectionPoint: AVAudioConnectionPoint { @objc get }

	// Constructors
}

extension AVAudioMixingDestination: AVAudioMixingDestinationExports {
}
