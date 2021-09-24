import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSSortDescriptorExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc @available(OSX 10.9, *) func allowEvaluation()
	@objc (compareObject:toObject:) func compare(_: Any, to: Any) -> ComparisonResult

	// Own Instance Properties
	@objc var ascending: Bool { @objc get }
	@objc @available(OSX 10.6, *) var comparator: Comparator { get }
	@objc var key: String? { @objc get }
	@objc var reversedSortDescriptor: Any { @objc get }
	@objc var selector: Selector? { @objc get }

	// Constructors
	@objc static func create(key: String?, ascending: Bool) -> NSSortDescriptor
// 	@objc @available(OSX 10.6, *) static func create(key: String?, ascending: Bool, comparator: JSValue) -> NSSortDescriptor
	@objc static func create(key: String?, ascending: Bool, selector: Selector?) -> NSSortDescriptor
}

extension NSSortDescriptor: NSSortDescriptorExports {
	@objc class func create(key: String?, ascending: Bool) -> NSSortDescriptor {
		return NSSortDescriptor(key: key, ascending: ascending)
	}

	@objc class func create(key: String?, ascending: Bool, selector: Selector?) -> NSSortDescriptor {
		return NSSortDescriptor(key: key, ascending: ascending, selector: selector)
	}

}
