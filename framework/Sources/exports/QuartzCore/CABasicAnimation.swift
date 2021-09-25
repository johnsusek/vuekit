import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CABasicAnimationExports: JSExport, CAPropertyAnimationExports {
	// Static Methods

	// Own Instance Properties
	@objc var byValue: Any? { @objc get @objc (setByValue:) set }
	@objc var fromValue: Any? { @objc get @objc (setFromValue:) set }
	@objc var toValue: Any? { @objc get @objc (setToValue:) set }

	// Constructors
	@objc static func create() -> CABasicAnimation
}

extension CABasicAnimation: CABasicAnimationExports {
	@objc override class func create() -> CABasicAnimation {
		return CABasicAnimation()
	}

}
