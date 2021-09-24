import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitAccelerationExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var gravity: UnitAcceleration { @objc get }
	@objc static var metersPerSecondSquared: UnitAcceleration { @objc get }
}

extension UnitAcceleration: UnitAccelerationExports {}
