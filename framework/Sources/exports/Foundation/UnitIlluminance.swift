import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitIlluminanceExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var lux: UnitIlluminance { @objc get }
}

extension UnitIlluminance: UnitIlluminanceExports {}
