import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitPressureExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var bars: UnitPressure { @objc get }
	@objc static var gigapascals: UnitPressure { @objc get }
	@objc static var hectopascals: UnitPressure { @objc get }
	@objc static var inchesOfMercury: UnitPressure { @objc get }
	@objc static var kilopascals: UnitPressure { @objc get }
	@objc static var megapascals: UnitPressure { @objc get }
	@objc static var millibars: UnitPressure { @objc get }
	@objc static var millimetersOfMercury: UnitPressure { @objc get }
	@objc static var newtonsPerMetersSquared: UnitPressure { @objc get }
	@objc static var poundsForcePerSquareInch: UnitPressure { @objc get }
}

extension UnitPressure: UnitPressureExports {}
