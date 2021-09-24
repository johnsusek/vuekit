import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAConstraintExports: JSExport {
	// , NSSecureCodingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var attribute: CAConstraintAttribute { @objc get }
	@objc var offset: CGFloat { get }
	@objc var scale: CGFloat { get }
	@objc var sourceAttribute: CAConstraintAttribute { @objc get }
	@objc var sourceName: String { @objc get }
}

extension CAConstraint: CAConstraintExports {}
