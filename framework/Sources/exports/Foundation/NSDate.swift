import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSDateExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var distantFuture: Date { @objc get }
	@objc static var distantPast: Date { @objc get }
	@objc @available(OSX 10.15, *) static var now: Date { @objc get }
	@objc static var timeIntervalSinceReferenceDate: TimeInterval { @objc get }

	// Instance Methods
	@objc func compare(_: Date) -> ComparisonResult
	// 	@objc (dateByAddingTimeInterval:) @available(OSX 10.6, *) func addingTimeInterval(_: TimeInterval) -> Date
	@objc (descriptionWithLocale:) func description(with: Any?) -> String
	@objc func earlierDate(_: Date) -> Date
	@objc (isEqualToDate:) func isEqual(to: Date) -> Bool
	@objc func laterDate(_: Date) -> Date
	@objc (timeIntervalSinceDate:) func timeIntervalSince(_: Date) -> TimeInterval

	// Own Instance Properties
	@objc var timeIntervalSince1970: TimeInterval { @objc get }
	@objc var timeIntervalSinceNow: TimeInterval { @objc get }
	@objc var timeIntervalSinceReferenceDate: TimeInterval { @objc get }
}

extension NSDate: NSDateExports {}
