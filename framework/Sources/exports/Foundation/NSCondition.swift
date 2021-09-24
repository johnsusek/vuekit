import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSConditionExports: JSExport {
	// , NSLockingExports
	// Static Methods

	// Instance Methods
	@objc func broadcast()
	@objc func signal()
	@objc func wait()
	@objc (waitUntilDate:) func wait(until: Date) -> Bool

	// Own Instance Properties
	@objc @available(OSX 10.5, *) var name: String? { @objc get @objc (setName:) set }

	// Constructors
}

extension NSCondition: NSConditionExports {
}
