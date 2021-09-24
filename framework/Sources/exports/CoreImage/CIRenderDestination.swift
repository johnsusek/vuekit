import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIRenderDestinationExports: JSExport {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var alphaMode: CIRenderDestinationAlphaMode { @objc get @objc (setAlphaMode:) set }
	@objc var blendKernel: CIBlendKernel? { @objc get @objc (setBlendKernel:) set }
	@objc var blendsInDestinationColorSpace: Bool { @objc get @objc (setBlendsInDestinationColorSpace:) set }
	@objc var isClamped: Bool { @objc get @objc (setClamped:) set }
	@objc var colorSpace: CGColorSpace? { @objc get @objc (setColorSpace:) set }
	@objc var isDithered: Bool { @objc get @objc (setDithered:) set }
	@objc var isFlipped: Bool { @objc get @objc (setFlipped:) set }
	@objc var height: Int { @objc get }
	@objc var width: Int { @objc get }
}

extension CIRenderDestination: CIRenderDestinationExports {}
