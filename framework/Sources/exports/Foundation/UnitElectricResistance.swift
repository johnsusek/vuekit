import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitElectricResistanceExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var kiloohms: UnitElectricResistance { @objc get }
	@objc static var megaohms: UnitElectricResistance { @objc get }
	@objc static var microohms: UnitElectricResistance { @objc get }
	@objc static var milliohms: UnitElectricResistance { @objc get }
	@objc static var ohms: UnitElectricResistance { @objc get }
}

extension UnitElectricResistance: UnitElectricResistanceExports {}
