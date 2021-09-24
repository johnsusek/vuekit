import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMutableVideoCompositionInstructionExports: JSExport, AVVideoCompositionInstructionExports {
	// Static Methods

	// Own Instance Properties
	@objc var backgroundColor: CGColor? { @objc get @objc (setBackgroundColor:) set }
	@objc var enablePostProcessing: Bool { @objc get @objc (setEnablePostProcessing:) set }
	@objc var layerInstructions: [AVVideoCompositionLayerInstruction] { @objc get @objc (setLayerInstructions:) set }
	@objc var timeRange: CMTimeRange { @objc get @objc (setTimeRange:) set }
}

extension AVMutableVideoCompositionInstruction: AVMutableVideoCompositionInstructionExports {}
