import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitVolumeExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var acreFeet: UnitVolume { @objc get }
	@objc static var bushels: UnitVolume { @objc get }
	@objc static var centiliters: UnitVolume { @objc get }
	@objc static var cubicCentimeters: UnitVolume { @objc get }
	@objc static var cubicDecimeters: UnitVolume { @objc get }
	@objc static var cubicFeet: UnitVolume { @objc get }
	@objc static var cubicInches: UnitVolume { @objc get }
	@objc static var cubicKilometers: UnitVolume { @objc get }
	@objc static var cubicMeters: UnitVolume { @objc get }
	@objc static var cubicMiles: UnitVolume { @objc get }
	@objc static var cubicMillimeters: UnitVolume { @objc get }
	@objc static var cubicYards: UnitVolume { @objc get }
	@objc static var cups: UnitVolume { @objc get }
	@objc static var deciliters: UnitVolume { @objc get }
	@objc static var fluidOunces: UnitVolume { @objc get }
	@objc static var gallons: UnitVolume { @objc get }
	@objc static var imperialFluidOunces: UnitVolume { @objc get }
	@objc static var imperialGallons: UnitVolume { @objc get }
	@objc static var imperialPints: UnitVolume { @objc get }
	@objc static var imperialQuarts: UnitVolume { @objc get }
	@objc static var imperialTablespoons: UnitVolume { @objc get }
	@objc static var imperialTeaspoons: UnitVolume { @objc get }
	@objc static var kiloliters: UnitVolume { @objc get }
	@objc static var liters: UnitVolume { @objc get }
	@objc static var megaliters: UnitVolume { @objc get }
	@objc static var metricCups: UnitVolume { @objc get }
	@objc static var milliliters: UnitVolume { @objc get }
	@objc static var pints: UnitVolume { @objc get }
	@objc static var quarts: UnitVolume { @objc get }
	@objc static var tablespoons: UnitVolume { @objc get }
	@objc static var teaspoons: UnitVolume { @objc get }
}

extension UnitVolume: UnitVolumeExports {}
