import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol QuartzFilterExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (applyToContext:) func apply(to: CGContext) -> Bool
	@objc func localizedName() -> String
	@objc func properties() -> [AnyHashable: Any]
	@objc (removeFromContext:) func remove(from: CGContext)
	// 	@objc func url() -> NSURL

	// Constructors
}

extension QuartzFilter: QuartzFilterExports {
}
