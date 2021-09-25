import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSDateComponentsExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (isValidDateInCalendar:) @available(OSX 10.9, *) func isValidDate(in calendar: Calendar) -> Bool
	@objc @available(OSX 10.9, *) func setValue(_: Int, forComponent: NSCalendar.Unit)
	@objc (valueForComponent:) @available(OSX 10.9, *) func value(forComponent: NSCalendar.Unit) -> Int

	// Own Instance Properties
	@objc @available(OSX 10.7, *) var calendar: Calendar? { get set }
	@objc @available(OSX 10.7, *) var date: Date? { @objc get }
	@objc var day: Int { @objc get @objc (setDay:) set }
	@objc var era: Int { @objc get @objc (setEra:) set }
	@objc var hour: Int { @objc get @objc (setHour:) set }
	@objc @available(OSX 10.8, *) var isLeapMonth: Bool { @objc get @objc (setLeapMonth:) set }
	@objc var minute: Int { @objc get @objc (setMinute:) set }
	@objc var month: Int { @objc get @objc (setMonth:) set }
	@objc @available(OSX 10.7, *) var nanosecond: Int { @objc get @objc (setNanosecond:) set }
	@objc @available(OSX 10.6, *) var quarter: Int { @objc get @objc (setQuarter:) set }
	@objc var second: Int { @objc get @objc (setSecond:) set }
	@objc @available(OSX 10.7, *) var timeZone: TimeZone? { get set }
	@objc @available(OSX 10.9, *) var isValidDate: Bool { @objc get }
	@objc @available(OSX 10.7, *) var weekOfMonth: Int { @objc get @objc (setWeekOfMonth:) set }
	@objc @available(OSX 10.7, *) var weekOfYear: Int { @objc get @objc (setWeekOfYear:) set }
	@objc var weekday: Int { @objc get @objc (setWeekday:) set }
	@objc var weekdayOrdinal: Int { @objc get @objc (setWeekdayOrdinal:) set }
	@objc var year: Int { @objc get @objc (setYear:) set }
	@objc @available(OSX 10.7, *) var yearForWeekOfYear: Int { @objc get @objc (setYearForWeekOfYear:) set }

	// Constructors
	@objc static func create() -> NSDateComponents
}

extension NSDateComponents: NSDateComponentsExports {
	@objc class func create() -> NSDateComponents {
		return NSDateComponents()
	}

}
