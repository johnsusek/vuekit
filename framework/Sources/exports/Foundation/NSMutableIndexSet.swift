import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSMutableIndexSetExports: JSExport, NSIndexSetExports {
	// Static Methods

	// Instance Methods
	@objc (addIndex:) func add(_: Int)
	@objc (addIndexes:) func add(_: IndexSet)
	@objc (addIndexesInRange:) func add(in: NSRange)
	@objc func removeAllIndexes()
	@objc (removeIndex:) func remove(_: Int)
	@objc (removeIndexes:) func remove(_: IndexSet)
	@objc (removeIndexesInRange:) func remove(in: NSRange)
	@objc (shiftIndexesStartingAtIndex:by:) func shiftIndexesStarting(at: Int, by: Int)
}

extension NSMutableIndexSet: NSMutableIndexSetExports {}
