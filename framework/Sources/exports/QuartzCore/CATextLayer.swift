import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CATextLayerExports: JSExport, CALayerExports {
	// Static Methods

	// Own Instance Properties
	@objc var alignmentMode: CATextLayerAlignmentMode { @objc get @objc (setAlignmentMode:) set }
	@objc var allowsFontSubpixelQuantization: Bool { @objc get @objc (setAllowsFontSubpixelQuantization:) set }
	@objc var font: CFTypeRef? { @objc get @objc (setFont:) set }
	@objc var fontSize: CGFloat { get set }
	@objc var foregroundColor: CGColor? { @objc get @objc (setForegroundColor:) set }
	@objc var string: Any? { @objc get @objc (setString:) set }
	@objc var truncationMode: CATextLayerTruncationMode { @objc get @objc (setTruncationMode:) set }
	@objc var isWrapped: Bool { @objc get @objc (setWrapped:) set }

	// Constructors
}

extension CATextLayer: CATextLayerExports {
}
