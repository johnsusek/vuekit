import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSConditionLockExports: JSExport {
	// , NSLockingExports
	// Static Methods

	// Instance Methods
	@objc (lockBeforeDate:) func lock(before: Date) -> Bool
	@objc (lockWhenCondition:) func lock(whenCondition: Int)
	@objc (lockWhenCondition:beforeDate:) func lock(whenCondition: Int, before: Date) -> Bool
	// 	@objc (tryLock) func try() -> Bool
	@objc (tryLockWhenCondition:) func tryLock(whenCondition: Int) -> Bool
	@objc (unlockWithCondition:) func unlock(withCondition: Int)

	// Own Instance Properties
	@objc var condition: Int { @objc get }
	@objc @available(OSX 10.5, *) var name: String? { @objc get @objc (setName:) set }

	// Constructors
	@objc static func create(condition: Int) -> NSConditionLock
}

extension NSConditionLock: NSConditionLockExports {
	@objc class func create(condition: Int) -> NSConditionLock {
		return NSConditionLock(condition: condition)
	}

}
