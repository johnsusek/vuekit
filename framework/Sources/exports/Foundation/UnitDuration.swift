import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitDurationExports: JSExport, DimensionExports {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var hours: UnitDuration { @objc get }
	@objc @available(OSX 10.15, *) static var microseconds: UnitDuration { @objc get }
	@objc @available(OSX 10.15, *) static var milliseconds: UnitDuration { @objc get }
	@objc static var minutes: UnitDuration { @objc get }
	@objc @available(OSX 10.15, *) static var nanoseconds: UnitDuration { @objc get }
	@objc @available(OSX 10.15, *) static var picoseconds: UnitDuration { @objc get }
	@objc static var seconds: UnitDuration { @objc get }
}

extension UnitDuration: UnitDurationExports {}
