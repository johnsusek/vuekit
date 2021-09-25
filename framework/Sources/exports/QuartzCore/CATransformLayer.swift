import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CATransformLayerExports: JSExport, CALayerExports {
	// Static Methods

	// Constructors
	@objc static func create() -> CATransformLayer
}

extension CATransformLayer: CATransformLayerExports {
	@objc override class func create() -> CATransformLayer {
		return CATransformLayer()
	}

}
