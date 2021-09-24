import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSAnimationContextExports: JSExport {
	// Static Methods
	@objc static func beginGrouping()
	@objc static func endGrouping()
	// jsvalue - @objc @available(OSX 10.12, *) static func runAnimationGroup(_: JSValue)
	// jsvalue - @objc @available(OSX 10.7, *) static func runAnimationGroup(_: JSValue, completionHandler: JSValue)

	// Own Static Properties
	@objc (currentContext) static var current: NSAnimationContext { @objc (currentContext) get }

	// Own Instance Properties
	@objc @available(OSX 10.8, *) var allowsImplicitAnimation: Bool { @objc get @objc (setAllowsImplicitAnimation:) set }
	@objc @available(OSX 10.7, *) var completionHandler: (() -> Void)? { get set }
	@objc var duration: TimeInterval { @objc get @objc (setDuration:) set }
	@objc @available(OSX 10.7, *) var timingFunction: CAMediaTimingFunction? { @objc get @objc (setTimingFunction:) set }

	// Constructors
}

extension NSAnimationContext: NSAnimationContextExports {
}
