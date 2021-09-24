import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitFrequencyExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc @available(OSX 10.15, *) static var framesPerSecond: UnitFrequency { @objc get }
	@objc static var gigahertz: UnitFrequency { @objc get }
	@objc static var hertz: UnitFrequency { @objc get }
	@objc static var kilohertz: UnitFrequency { @objc get }
	@objc static var megahertz: UnitFrequency { @objc get }
	@objc static var microhertz: UnitFrequency { @objc get }
	@objc static var millihertz: UnitFrequency { @objc get }
	@objc static var nanohertz: UnitFrequency { @objc get }
	@objc static var terahertz: UnitFrequency { @objc get }
}

extension UnitFrequency: UnitFrequencyExports {}
