import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioConnectionPointExports: JSExport {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var bus: AVAudioNodeBus { @objc get }
	@objc var node: AVAudioNode? { @objc get }

	// Constructors
	@objc static func create(node: AVAudioNode, bus: AVAudioNodeBus) -> AVAudioConnectionPoint
}

extension AVAudioConnectionPoint: AVAudioConnectionPointExports {
	@objc class func create(node: AVAudioNode, bus: AVAudioNodeBus) -> AVAudioConnectionPoint {
		return AVAudioConnectionPoint(node: node, bus: bus)
	}

}
