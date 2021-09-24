import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol DimensionExports: JSExport, UnitExports {
	// , NSSecureCodingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var converter: UnitConverter { @objc get }
}

extension Dimension: DimensionExports {}
