import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioUnitEQFilterParametersExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var bandwidth: Float { @objc get @objc (setBandwidth:) set }
	@objc var bypass: Bool { @objc get @objc (setBypass:) set }
	@objc var filterType: AVAudioUnitEQFilterType { @objc get @objc (setFilterType:) set }
	@objc var frequency: Float { @objc get @objc (setFrequency:) set }
	@objc var gain: Float { @objc get @objc (setGain:) set }

	// Constructors
}

extension AVAudioUnitEQFilterParameters: AVAudioUnitEQFilterParametersExports {
}
