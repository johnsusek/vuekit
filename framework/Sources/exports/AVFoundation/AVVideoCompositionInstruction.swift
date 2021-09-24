import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVVideoCompositionInstructionExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports, NSSecureCodingExports
	// Static Methods

	// Own Instance Properties
	@objc var backgroundColor: CGColor? { @objc get }
	@objc var layerInstructions: [AVVideoCompositionLayerInstruction] { @objc get }

	// Constructors
}

extension AVVideoCompositionInstruction: AVVideoCompositionInstructionExports {
}
