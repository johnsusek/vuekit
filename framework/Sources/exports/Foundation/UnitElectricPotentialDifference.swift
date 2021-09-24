import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitElectricPotentialDifferenceExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var kilovolts: UnitElectricPotentialDifference { @objc get }
	@objc static var megavolts: UnitElectricPotentialDifference { @objc get }
	@objc static var microvolts: UnitElectricPotentialDifference { @objc get }
	@objc static var millivolts: UnitElectricPotentialDifference { @objc get }
	@objc static var volts: UnitElectricPotentialDifference { @objc get }
}

extension UnitElectricPotentialDifference: UnitElectricPotentialDifferenceExports {}
