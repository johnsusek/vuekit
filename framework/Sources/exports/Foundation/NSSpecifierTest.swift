import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSSpecifierTestExports: JSExport, NSScriptWhoseTestExports {
	// Static Methods

	// Instance Methods
}

extension NSSpecifierTest: NSSpecifierTestExports {}
