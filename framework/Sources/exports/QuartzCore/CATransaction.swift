import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CATransactionExports: JSExport {
	// Static Methods
	@objc static func animationDuration() -> CFTimeInterval
	@objc static func animationTimingFunction() -> CAMediaTimingFunction?
	@objc static func begin()
	@objc static func commit()
	// jsvalue - @objc static func completionBlock() -> JSValue?
	@objc static func disableActions() -> Bool
	@objc static func flush()
	@objc static func lock()
	@objc static func setAnimationDuration(_: CFTimeInterval)
	@objc static func setAnimationTimingFunction(_: CAMediaTimingFunction?)
	// jsvalue - @objc static func setCompletionBlock(_: JSValue)
	@objc static func setDisableActions(_: Bool)
	@objc static func setValue(_: Any?, forKey: String)
	@objc static func unlock()
	@objc (valueForKey:) static func value(forKey: String) -> Any?

	// Constructors
	@objc static func create() -> CATransaction
}

extension CATransaction: CATransactionExports {
	@objc class func create() -> CATransaction {
		return CATransaction()
	}

}
