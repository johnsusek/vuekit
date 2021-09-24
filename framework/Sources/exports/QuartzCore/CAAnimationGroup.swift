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
}

extension CAAnimationGroup: CAAnimationGroupExports {
}
