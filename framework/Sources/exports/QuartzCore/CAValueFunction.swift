import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAValueFunctionExports: JSExport {
	// , NSSecureCodingExports
	// Static Methods

	// Own Instance Properties
	@objc var name: CAValueFunctionName { @objc get }

	// Constructors
}

extension CAValueFunction: CAValueFunctionExports {
}
