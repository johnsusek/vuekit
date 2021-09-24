import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSNullExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports, CAActionExports
	// Static Methods

	// Constructors
}

extension NSNull: NSNullExports {
}
