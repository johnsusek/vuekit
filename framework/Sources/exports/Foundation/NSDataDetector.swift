import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSDataDetectorExports: JSExport, NSRegularExpressionExports {
	// Static Methods
	// 	@objc static func dataDetectorWithTypes(error: UInt64) -> NSDataDetector?

	// Instance Methods

	// Own Instance Properties
	@objc var checkingTypes: UInt64 { @objc get }
}

extension NSDataDetector: NSDataDetectorExports {}
