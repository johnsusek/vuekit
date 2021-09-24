import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitAreaExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var acres: UnitArea { @objc get }
	@objc static var ares: UnitArea { @objc get }
	@objc static var hectares: UnitArea { @objc get }
	@objc static var squareCentimeters: UnitArea { @objc get }
	@objc static var squareFeet: UnitArea { @objc get }
	@objc static var squareInches: UnitArea { @objc get }
	@objc static var squareKilometers: UnitArea { @objc get }
	@objc static var squareMegameters: UnitArea { @objc get }
	@objc static var squareMeters: UnitArea { @objc get }
	@objc static var squareMicrometers: UnitArea { @objc get }
	@objc static var squareMiles: UnitArea { @objc get }
	@objc static var squareMillimeters: UnitArea { @objc get }
	@objc static var squareNanometers: UnitArea { @objc get }
	@objc static var squareYards: UnitArea { @objc get }
}

extension UnitArea: UnitAreaExports {}
