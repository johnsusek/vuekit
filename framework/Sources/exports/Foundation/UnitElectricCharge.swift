import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitElectricChargeExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var ampereHours: UnitElectricCharge { @objc get }
	@objc static var coulombs: UnitElectricCharge { @objc get }
	@objc static var kiloampereHours: UnitElectricCharge { @objc get }
	@objc static var megaampereHours: UnitElectricCharge { @objc get }
	@objc static var microampereHours: UnitElectricCharge { @objc get }
	@objc static var milliampereHours: UnitElectricCharge { @objc get }
}

extension UnitElectricCharge: UnitElectricChargeExports {}
