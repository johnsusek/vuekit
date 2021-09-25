import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAAnimationGroupExports: JSExport, CAAnimationExports {
	// Static Methods

	// Own Instance Properties
	@objc var animations: [CAAnimation]? { @objc get @objc (setAnimations:) set }

	// Constructors
	@objc static func create() -> CAAnimationGroup
}

extension CAAnimationGroup: CAAnimationGroupExports {
	@objc override class func create() -> CAAnimationGroup {
		return CAAnimationGroup()
	}

}
