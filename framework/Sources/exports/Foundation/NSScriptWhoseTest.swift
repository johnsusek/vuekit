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
	@objc static func create() -> NSScriptWhoseTest
}

extension NSScriptWhoseTest: NSScriptWhoseTestExports {
	@objc class func create() -> NSScriptWhoseTest {
		return NSScriptWhoseTest()
	}

}
