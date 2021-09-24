import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSIndexPathExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods
	// 	@objc @available(OSX 10.11, *) static func create(forItem: Int, inSection: Int) -> IndexPath

	// Instance Methods
	@objc func compare(_: IndexPath) -> ComparisonResult
	@objc @available(OSX 10.9, *) func getIndexes(_: UnsafeMutablePointer<Int>, range: NSRange)
	@objc (indexAtPosition:) func index(atPosition: Int) -> Int
	@objc (indexPathByAddingIndex:) func adding(_: Int) -> IndexPath
	@objc (indexPathByRemovingLastIndex) func removingLastIndex() -> IndexPath

	// Own Instance Properties
	@objc @available(OSX 10.11, *) var item: Int { @objc get }
	@objc var length: Int { @objc get }
	@objc @available(OSX 10.11, *) var section: Int { @objc get }
}

extension NSIndexPath: NSIndexPathExports {}
