import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSDistributedLockExports: JSExport {
	// Static Methods

	// Instance Methods
	// 	@objc (breakLock) func break()
	// 	@objc (tryLock) func try() -> Bool
	@objc func unlock()

	// Own Instance Properties
	@objc var lockDate: Date { @objc get }

	// Constructors
	@objc static func create(path: String) -> NSDistributedLock?
}

extension NSDistributedLock: NSDistributedLockExports {
	@objc class func create(path: String) -> NSDistributedLock? {
		return NSDistributedLock(path: path)
	}

}
