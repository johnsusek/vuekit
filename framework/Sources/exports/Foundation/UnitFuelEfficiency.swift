import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitFuelEfficiencyExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var litersPer100Kilometers: UnitFuelEfficiency { @objc get }
	@objc static var milesPerGallon: UnitFuelEfficiency { @objc get }
	@objc static var milesPerImperialGallon: UnitFuelEfficiency { @objc get }
}

extension UnitFuelEfficiency: UnitFuelEfficiencyExports {}
