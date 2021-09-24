import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitDispersionExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var partsPerMillion: UnitDispersion { @objc get }
}

extension UnitDispersion: UnitDispersionExports {}
