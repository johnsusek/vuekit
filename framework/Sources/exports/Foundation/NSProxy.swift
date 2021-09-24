import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSProxyExports: JSExport {
	// , NSObjectExports
	// Static Methods
	@objc (respondsToSelector:) static func responds(to: Selector) -> Bool

	// Instance Methods
	@objc func dealloc()
	@objc func finalize()

	// Constructors
}

extension NSProxy: NSProxyExports {
}
