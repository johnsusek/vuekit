import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAPropertyAnimationExports: JSExport, CAAnimationExports {
	// Static Methods

	// Own Instance Properties
	@objc var isAdditive: Bool { @objc get @objc (setAdditive:) set }
	@objc var isCumulative: Bool { @objc get @objc (setCumulative:) set }
	@objc var keyPath: String? { @objc get @objc (setKeyPath:) set }
	@objc var valueFunction: CAValueFunction? { @objc get @objc (setValueFunction:) set }

	// Constructors
	@objc static func create(keyPath: String?) -> CAPropertyAnimation
}

extension CAPropertyAnimation: CAPropertyAnimationExports {
	@objc class func create(keyPath: String?) -> CAPropertyAnimation {
		return CAPropertyAnimation(keyPath: keyPath)
	}

}
