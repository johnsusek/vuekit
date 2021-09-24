import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitPowerExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var femtowatts: UnitPower { @objc get }
	@objc static var gigawatts: UnitPower { @objc get }
	@objc static var horsepower: UnitPower { @objc get }
	@objc static var kilowatts: UnitPower { @objc get }
	@objc static var megawatts: UnitPower { @objc get }
	@objc static var microwatts: UnitPower { @objc get }
	@objc static var milliwatts: UnitPower { @objc get }
	@objc static var nanowatts: UnitPower { @objc get }
	@objc static var picowatts: UnitPower { @objc get }
	@objc static var terawatts: UnitPower { @objc get }
	@objc static var watts: UnitPower { @objc get }
}

extension UnitPower: UnitPowerExports {}
