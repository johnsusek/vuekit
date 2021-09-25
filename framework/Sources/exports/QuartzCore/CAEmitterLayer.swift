import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAEmitterLayerExports: JSExport, CALayerExports {
	// Static Methods

	// Own Instance Properties
	@objc var birthRate: Float { @objc get @objc (setBirthRate:) set }
	@objc var emitterCells: [CAEmitterCell]? { @objc get @objc (setEmitterCells:) set }
	@objc var emitterDepth: CGFloat { get set }
	@objc var emitterMode: CAEmitterLayerEmitterMode { @objc get @objc (setEmitterMode:) set }
	@objc var emitterPosition: NSPoint { @objc get @objc (setEmitterPosition:) set }
	@objc var emitterShape: CAEmitterLayerEmitterShape { @objc get @objc (setEmitterShape:) set }
	@objc var emitterSize: NSSize { @objc get @objc (setEmitterSize:) set }
	@objc var emitterZPosition: CGFloat { get set }
	@objc var lifetime: Float { @objc get @objc (setLifetime:) set }
	@objc var preservesDepth: Bool { @objc get @objc (setPreservesDepth:) set }
	@objc var renderMode: CAEmitterLayerRenderMode { @objc get @objc (setRenderMode:) set }
	@objc var scale: Float { @objc get @objc (setScale:) set }
	@objc var seed: UInt32 { get set }
	@objc var spin: Float { @objc get @objc (setSpin:) set }
	@objc var velocity: Float { @objc get @objc (setVelocity:) set }

	// Constructors
	@objc static func create() -> CAEmitterLayer
}

extension CAEmitterLayer: CAEmitterLayerExports {
	@objc override class func create() -> CAEmitterLayer {
		return CAEmitterLayer()
	}

}
