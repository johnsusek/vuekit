import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSOrderedCollectionDifferenceExports: JSExport {
	// , NSFastEnumerationExports
	// Static Methods

	// Instance Methods
	// 	@objc (differenceByTransformingChangesWithBlock:) func transformingChanges(_: JSValue) -> NSOrderedCollectionDifference<Any>
	@objc (inverseDifference) @available(OSX 10.15, *) func inverse() -> NSOrderedCollectionDifference

	// Own Instance Properties
	@objc var hasChanges: Bool { @objc get }
	@objc @available(OSX 10.15, *) var insertions: [NSOrderedCollectionChange] { @objc get }
	@objc @available(OSX 10.15, *) var removals: [NSOrderedCollectionChange] { @objc get }
}

extension NSOrderedCollectionDifference: NSOrderedCollectionDifferenceExports {}
