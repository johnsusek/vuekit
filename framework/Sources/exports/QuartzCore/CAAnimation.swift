import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAAnimationExports: JSExport {
	// , CAActionExports, CAMediaTimingExports, NSCopyingExports, NSSecureCodingExports
	// Static Methods
	@objc (defaultValueForKey:) static func defaultValue(forKey: String) -> Any?

	// Instance Methods
	@objc (shouldArchiveValueForKey:) func shouldArchiveValue(forKey: String) -> Bool

	// Own Instance Properties
	@objc var delegate: CAAnimationDelegate? { @objc get @objc (setDelegate:) set }
	@objc var isRemovedOnCompletion: Bool { @objc get @objc (setRemovedOnCompletion:) set }
	@objc var timingFunction: CAMediaTimingFunction? { @objc get @objc (setTimingFunction:) set }

	// Constructors
}

extension CAAnimation: CAAnimationExports {
}
