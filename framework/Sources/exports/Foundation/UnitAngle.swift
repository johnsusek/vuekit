import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitAngleExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var arcMinutes: UnitAngle { @objc get }
	@objc static var arcSeconds: UnitAngle { @objc get }
	@objc static var degrees: UnitAngle { @objc get }
	@objc static var gradians: UnitAngle { @objc get }
	@objc static var radians: UnitAngle { @objc get }
	@objc static var revolutions: UnitAngle { @objc get }
}

extension UnitAngle: UnitAngleExports {}
