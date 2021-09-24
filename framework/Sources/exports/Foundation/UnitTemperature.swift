import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitTemperatureExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var celsius: UnitTemperature { @objc get }
	@objc static var fahrenheit: UnitTemperature { @objc get }
	@objc static var kelvin: UnitTemperature { @objc get }
}

extension UnitTemperature: UnitTemperatureExports {}
