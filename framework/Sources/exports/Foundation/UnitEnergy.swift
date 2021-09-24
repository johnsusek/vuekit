import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitEnergyExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var calories: UnitEnergy { @objc get }
	@objc static var joules: UnitEnergy { @objc get }
	@objc static var kilocalories: UnitEnergy { @objc get }
	@objc static var kilojoules: UnitEnergy { @objc get }
	@objc static var kilowattHours: UnitEnergy { @objc get }
}

extension UnitEnergy: UnitEnergyExports {}
