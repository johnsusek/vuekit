import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CASpringAnimationExports: JSExport, CABasicAnimationExports {
	// Static Methods

	// Own Instance Properties
	@objc var damping: CGFloat { get set }
	@objc var initialVelocity: CGFloat { get set }
	@objc var mass: CGFloat { get set }
	@objc var settlingDuration: CFTimeInterval { @objc get }
	@objc var stiffness: CGFloat { get set }

	// Constructors
}

extension CASpringAnimation: CASpringAnimationExports {
}
