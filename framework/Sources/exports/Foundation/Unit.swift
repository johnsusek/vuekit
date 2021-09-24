import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol UnitExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var symbol: String { @objc get }

	// Constructors
	@objc static func create(symbol: String) -> Unit
}

extension Unit: UnitExports {
	@objc class func create(symbol: String) -> Unit {
		return Unit(symbol: symbol)
	}

}
