import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioEnvironmentDistanceAttenuationParametersExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var distanceAttenuationModel: AVAudioEnvironmentDistanceAttenuationModel { @objc get @objc (setDistanceAttenuationModel:) set }
	@objc var maximumDistance: Float { @objc get @objc (setMaximumDistance:) set }
	@objc var referenceDistance: Float { @objc get @objc (setReferenceDistance:) set }
	@objc var rolloffFactor: Float { @objc get @objc (setRolloffFactor:) set }

	// Constructors
}

extension AVAudioEnvironmentDistanceAttenuationParameters: AVAudioEnvironmentDistanceAttenuationParametersExports {
}
