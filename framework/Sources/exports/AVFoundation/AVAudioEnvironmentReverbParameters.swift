import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioEnvironmentReverbParametersExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func loadFactoryReverbPreset(_: AVAudioUnitReverbPreset)

	// Own Instance Properties
	@objc var enable: Bool { @objc get @objc (setEnable:) set }
	@objc var filterParameters: AVAudioUnitEQFilterParameters { @objc get }
	@objc var level: Float { @objc get @objc (setLevel:) set }

	// Constructors
}

extension AVAudioEnvironmentReverbParameters: AVAudioEnvironmentReverbParametersExports {
}
