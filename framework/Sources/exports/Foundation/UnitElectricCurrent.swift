import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitElectricCurrentExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var amperes: UnitElectricCurrent { @objc get }
	@objc static var kiloamperes: UnitElectricCurrent { @objc get }
	@objc static var megaamperes: UnitElectricCurrent { @objc get }
	@objc static var microamperes: UnitElectricCurrent { @objc get }
	@objc static var milliamperes: UnitElectricCurrent { @objc get }
}

extension UnitElectricCurrent: UnitElectricCurrentExports {}
