import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSLockExports: JSExport {
	// , NSLockingExports
	// Static Methods

	// Instance Methods
	@objc (lockBeforeDate:) func lock(before: Date) -> Bool
	// 	@objc (tryLock) func try() -> Bool

	// Own Instance Properties
	@objc @available(OSX 10.5, *) var name: String? { @objc get @objc (setName:) set }

	// Constructors
}

extension NSLock: NSLockExports {
}
