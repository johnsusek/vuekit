import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAGradientLayerExports: JSExport, CALayerExports {
	// Static Methods

	// Own Instance Properties
	@objc var colors: [Any]? { @objc get @objc (setColors:) set }
	@objc var endPoint: NSPoint { @objc get @objc (setEndPoint:) set }
	@objc var locations: [NSNumber]? { @objc get @objc (setLocations:) set }
	@objc var startPoint: NSPoint { @objc get @objc (setStartPoint:) set }
	@objc var type: CAGradientLayerType { @objc get @objc (setType:) set }

	// Constructors
}

extension CAGradientLayer: CAGradientLayerExports {
}
