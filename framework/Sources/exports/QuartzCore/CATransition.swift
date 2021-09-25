import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CATransitionExports: JSExport, CAAnimationExports {
	// Static Methods

	// Own Instance Properties
	@objc var endProgress: Float { @objc get @objc (setEndProgress:) set }
	@objc var filter: Any? { @objc get @objc (setFilter:) set }
	@objc var startProgress: Float { @objc get @objc (setStartProgress:) set }
	@objc var subtype: CATransitionSubtype? { @objc get @objc (setSubtype:) set }
	@objc var type: CATransitionType { @objc get @objc (setType:) set }

	// Constructors
	@objc static func create() -> CATransition
}

extension CATransition: CATransitionExports {
	@objc override class func create() -> CATransition {
		return CATransition()
	}

}
