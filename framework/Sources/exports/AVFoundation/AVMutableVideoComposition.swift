import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMutableVideoCompositionExports: JSExport, AVVideoCompositionExports {
	// Static Methods
	// 	@objc static func create() -> AVMutableVideoComposition
	// 	@objc @available(OSX 10.15, *) static func create(propertiesOf: AVAsset, prototypeInstruction: AVVideoCompositionInstruction) -> AVMutableVideoComposition

	// Own Instance Properties
	@objc var animationTool: AVVideoCompositionCoreAnimationTool? { @objc get @objc (setAnimationTool:) set }
	@objc @available(OSX 10.12, *) var colorPrimaries: String? { @objc get @objc (setColorPrimaries:) set }
	@objc @available(OSX 10.12, *) var colorTransferFunction: String? { @objc get @objc (setColorTransferFunction:) set }
	@objc @available(OSX 10.12, *) var colorYCbCrMatrix: String? { @objc get @objc (setColorYCbCrMatrix:) set }
	@objc @available(OSX 10.9, *) var customVideoCompositorClass: AVVideoCompositing.Type? { @objc get @objc (setCustomVideoCompositorClass:) set }
	@objc var frameDuration: CMTime { @objc get @objc (setFrameDuration:) set }
	@objc var instructions: [AVVideoCompositionInstructionProtocol] { @objc get @objc (setInstructions:) set }
	@objc @available(OSX 10.14, *) var renderScale: Float { @objc get @objc (setRenderScale:) set }
	@objc var renderSize: NSSize { @objc get @objc (setRenderSize:) set }
	@objc @available(OSX 10.13, *) var sourceTrackIDForFrameTiming: CMPersistentTrackID { @objc get @objc (setSourceTrackIDForFrameTiming:) set }
}

extension AVMutableVideoComposition: AVMutableVideoCompositionExports {}
