import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSScriptWhoseTestExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Instance Methods
	@objc func isTrue() -> Bool

	// Constructors
}

extension NSScriptWhoseTest: NSScriptWhoseTestExports {
}
