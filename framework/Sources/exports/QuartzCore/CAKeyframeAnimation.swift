import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAKeyframeAnimationExports: JSExport, CAPropertyAnimationExports {
	// Static Methods

	// Own Instance Properties
	@objc var biasValues: [NSNumber]? { @objc get @objc (setBiasValues:) set }
	@objc var calculationMode: CAAnimationCalculationMode { @objc get @objc (setCalculationMode:) set }
	@objc var continuityValues: [NSNumber]? { @objc get @objc (setContinuityValues:) set }
	@objc var keyTimes: [NSNumber]? { @objc get @objc (setKeyTimes:) set }
	@objc var path: CGPath? { @objc get @objc (setPath:) set }
	@objc var rotationMode: CAAnimationRotationMode? { @objc get @objc (setRotationMode:) set }
	@objc var tensionValues: [NSNumber]? { @objc get @objc (setTensionValues:) set }
	@objc var timingFunctions: [CAMediaTimingFunction]? { @objc get @objc (setTimingFunctions:) set }
	@objc var values: [Any]? { @objc get @objc (setValues:) set }

	// Constructors
	@objc static func create() -> CAKeyframeAnimation
}

extension CAKeyframeAnimation: CAKeyframeAnimationExports {
	@objc override class func create() -> CAKeyframeAnimation {
		return CAKeyframeAnimation()
	}

}
