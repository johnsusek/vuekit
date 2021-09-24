import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSIndexSetExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (containsIndex:) func contains(_: Int) -> Bool
	@objc (containsIndexes:) func contains(_: IndexSet) -> Bool
	@objc (containsIndexesInRange:) func contains(in: NSRange) -> Bool
	@objc (countOfIndexesInRange:) @available(OSX 10.5, *) func countOfIndexes(in: NSRange) -> Int
	@objc (enumerateIndexesInRange:options:usingBlock:) @available(OSX 10.6, *) func enumerate(in range: NSRange, options opts: NSEnumerationOptions, using block: (Int, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc (enumerateIndexesUsingBlock:) @available(OSX 10.6, *) func enumerate(_ block: (Int, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc (enumerateIndexesWithOptions:usingBlock:) @available(OSX 10.6, *) func enumerate(options opts: NSEnumerationOptions, using block: (Int, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc (enumerateRangesInRange:options:usingBlock:) @available(OSX 10.7, *) func enumerateRanges(in range: NSRange, options opts: NSEnumerationOptions, using block: (NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc (enumerateRangesUsingBlock:) @available(OSX 10.7, *) func enumerateRanges(_ block: (NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc (enumerateRangesWithOptions:usingBlock:) @available(OSX 10.7, *) func enumerateRanges(options opts: NSEnumerationOptions, using block: (NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc func getIndexes(_: UnsafeMutablePointer<Int>, maxCount: Int, inIndexRange: UnsafeMutablePointer<NSRange>?) -> Int
	@objc func indexGreaterThanIndex(_: Int) -> Int
	@objc (indexGreaterThanOrEqualToIndex:) func indexGreaterThanOrEqual(to: Int) -> Int
	@objc (indexInRange:options:passingTest:) @available(OSX 10.6, *) func index(in range: NSRange, options opts: NSEnumerationOptions, passingTest predicate: (Int, UnsafeMutablePointer<ObjCBool>) -> Bool) -> Int
	@objc func indexLessThanIndex(_: Int) -> Int
	@objc (indexLessThanOrEqualToIndex:) func indexLessThanOrEqual(to: Int) -> Int
	@objc (indexPassingTest:) @available(OSX 10.6, *) func index(passingTest predicate: (Int, UnsafeMutablePointer<ObjCBool>) -> Bool) -> Int
	@objc (indexWithOptions:passingTest:) @available(OSX 10.6, *) func index(options opts: NSEnumerationOptions, passingTest predicate: (Int, UnsafeMutablePointer<ObjCBool>) -> Bool) -> Int
	@objc (indexesInRange:options:passingTest:) @available(OSX 10.6, *) func indexes(in range: NSRange, options opts: NSEnumerationOptions, passingTest predicate: (Int, UnsafeMutablePointer<ObjCBool>) -> Bool) -> IndexSet
	@objc (indexesPassingTest:) @available(OSX 10.6, *) func indexes(passingTest predicate: (Int, UnsafeMutablePointer<ObjCBool>) -> Bool) -> IndexSet
	@objc (indexesWithOptions:passingTest:) @available(OSX 10.6, *) func indexes(options opts: NSEnumerationOptions, passingTest predicate: (Int, UnsafeMutablePointer<ObjCBool>) -> Bool) -> IndexSet
	@objc (intersectsIndexesInRange:) func intersects(in: NSRange) -> Bool
	@objc (isEqualToIndexSet:) func isEqual(to: IndexSet) -> Bool

	// Own Instance Properties
	@objc var count: Int { @objc get }
	@objc var firstIndex: Int { @objc get }
	@objc var lastIndex: Int { @objc get }
}

extension NSIndexSet: NSIndexSetExports {}
