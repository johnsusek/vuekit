import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitLengthExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var astronomicalUnits: UnitLength { @objc get }
	@objc static var centimeters: UnitLength { @objc get }
	@objc static var decameters: UnitLength { @objc get }
	@objc static var decimeters: UnitLength { @objc get }
	@objc static var fathoms: UnitLength { @objc get }
	@objc static var feet: UnitLength { @objc get }
	@objc static var furlongs: UnitLength { @objc get }
	@objc static var hectometers: UnitLength { @objc get }
	@objc static var inches: UnitLength { @objc get }
	@objc static var kilometers: UnitLength { @objc get }
	@objc static var lightyears: UnitLength { @objc get }
	@objc static var megameters: UnitLength { @objc get }
	@objc static var meters: UnitLength { @objc get }
	@objc static var micrometers: UnitLength { @objc get }
	@objc static var miles: UnitLength { @objc get }
	@objc static var millimeters: UnitLength { @objc get }
	@objc static var nanometers: UnitLength { @objc get }
	@objc static var nauticalMiles: UnitLength { @objc get }
	@objc static var parsecs: UnitLength { @objc get }
	@objc static var picometers: UnitLength { @objc get }
	@objc static var scandinavianMiles: UnitLength { @objc get }
	@objc static var yards: UnitLength { @objc get }
}

extension UnitLength: UnitLengthExports {}
