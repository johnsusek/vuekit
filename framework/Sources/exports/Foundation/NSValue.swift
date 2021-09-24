import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSValueExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods
	@objc static func create(caTransform3D: CATransform3D) -> NSValue
	@objc @available(OSX 10.7, *) static func create(time: CMTime) -> NSValue
	@objc @available(OSX 10.7, *) static func create(timeMapping: CMTimeMapping) -> NSValue
	@objc @available(OSX 10.7, *) static func create(timeRange: CMTimeRange) -> NSValue
	@objc @available(OSX 10.10, *) static func create(edgeInsets: NSEdgeInsets) -> NSValue
	@objc static func create(point: NSPoint) -> NSValue
	@objc static func create(range: NSRange) -> NSValue
	@objc static func create(rect: NSRect) -> NSValue
	@objc static func create(size: NSSize) -> NSValue

	// Instance Methods
	@objc @available(OSX 10.13, *) func getValue(_: UnsafeMutableRawPointer, size: Int)
	@objc (isEqualToValue:) func isEqual(to: NSValue) -> Bool

	// Own Instance Properties
	@objc (CATransform3DValue) var caTransform3DValue: CATransform3D { @objc (CATransform3DValue) get }
	@objc (CMTimeMappingValue) @available(OSX 10.7, *) var timeMappingValue: CMTimeMapping { @objc (CMTimeMappingValue) get }
	@objc (CMTimeRangeValue) @available(OSX 10.7, *) var timeRangeValue: CMTimeRange { @objc (CMTimeRangeValue) get }
	@objc (CMTimeValue) @available(OSX 10.7, *) var timeValue: CMTime { @objc (CMTimeValue) get }
	@objc @available(OSX 10.10, *) var edgeInsetsValue: NSEdgeInsets { @objc get }
	@objc var nonretainedObjectValue: Any? { @objc get }
	@objc var objCType: UnsafePointer<Int8> { @objc get }
	@objc var pointValue: NSPoint { @objc get }
	@objc var pointerValue: UnsafeMutableRawPointer? { @objc get }
	@objc var rangeValue: NSRange { @objc get }
	@objc var rectValue: NSRect { @objc get }
	@objc var sizeValue: NSSize { @objc get }

	// Constructors
	@objc static func create(bytes: UnsafeRawPointer, objCType: UnsafePointer<Int8>) -> NSValue
}

extension NSValue: NSValueExports {
	@objc class func create(range: NSRange) -> NSValue {
		return NSValue(range: range)
	}

	@objc class func create(point: NSPoint) -> NSValue {
		return NSValue(point: point)
	}

	@objc class func create(size: NSSize) -> NSValue {
		return NSValue(size: size)
	}

	@objc class func create(rect: NSRect) -> NSValue {
		return NSValue(rect: rect)
	}

	@objc @available(OSX 10.10, *) class func create(edgeInsets: NSEdgeInsets) -> NSValue {
		return NSValue(edgeInsets: edgeInsets)
	}

	@objc class func create(caTransform3D: CATransform3D) -> NSValue {
		return NSValue(caTransform3D: caTransform3D)
	}

	@objc @available(OSX 10.7, *) class func create(time: CMTime) -> NSValue {
		return NSValue(time: time)
	}

	@objc @available(OSX 10.7, *) class func create(timeRange: CMTimeRange) -> NSValue {
		return NSValue(timeRange: timeRange)
	}

	@objc @available(OSX 10.7, *) class func create(timeMapping: CMTimeMapping) -> NSValue {
		return NSValue(timeMapping: timeMapping)
	}

	@objc class func create(bytes: UnsafeRawPointer, objCType: UnsafePointer<Int8>) -> NSValue {
		return NSValue(bytes: bytes, objCType: objCType)
	}

}
