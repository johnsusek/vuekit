import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitSpeedExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var kilometersPerHour: UnitSpeed { @objc get }
	@objc static var knots: UnitSpeed { @objc get }
	@objc static var metersPerSecond: UnitSpeed { @objc get }
	@objc static var milesPerHour: UnitSpeed { @objc get }
}

extension UnitSpeed: UnitSpeedExports {}
