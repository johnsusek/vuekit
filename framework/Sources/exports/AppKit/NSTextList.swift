import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextListExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (markerForItemNumber:) func marker(forItemNumber: Int) -> String

	// Own Instance Properties
	@objc var listOptions: NSTextList.Options { @objc get }
	@objc var markerFormat: NSTextList.MarkerFormat { @objc get }
	@objc @available(OSX 10.6, *) var startingItemNumber: Int { @objc get @objc (setStartingItemNumber:) set }

	// Constructors
	@objc static func create() -> NSTextList
	@objc static func create(markerFormat: NSTextList.MarkerFormat, options: Int) -> NSTextList
}

extension NSTextList: NSTextListExports {
	@objc class func create() -> NSTextList {
		return NSTextList()
	}

	@objc class func create(markerFormat: NSTextList.MarkerFormat, options: Int) -> NSTextList {
		return NSTextList(markerFormat: markerFormat, options: options)
	}

}
