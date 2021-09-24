import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSFileSecurityExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Constructors
}

extension NSFileSecurity: NSFileSecurityExports {
}
