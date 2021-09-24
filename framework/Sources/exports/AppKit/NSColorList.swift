import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSColorListExports: JSExport {
	// , NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var availableColorLists: [NSColorList] { @objc get }

	// Instance Methods
	@objc (colorWithKey:) func color(withKey: NSColor.Name) -> NSColor?
	@objc (insertColor:key:atIndex:) func insertColor(_: NSColor, key: NSColor.Name, at: Int)
	@objc (removeColorWithKey:) func removeColor(withKey: NSColor.Name)
	@objc func removeFile()
	@objc func setColor(_: NSColor, forKey: NSColor.Name)
	// 	@objc @available(OSX 10.11, *) func writeToURL(error: NSURL?) -> Bool

	// Own Instance Properties
	@objc var allKeys: [String] { @objc get }
	@objc var isEditable: Bool { @objc get }
	@objc var name: NSColorList.Name? { @objc get }

	// Constructors
	@objc static func create(name: NSColorList.Name) -> NSColorList
	@objc static func create(name: NSColorList.Name, fromFile: String?) -> NSColorList?
}

extension NSColorList: NSColorListExports {
	@objc class func create(name: NSColorList.Name) -> NSColorList {
		return NSColorList(name: name)
	}

	@objc class func create(name: NSColorList.Name, fromFile: String?) -> NSColorList? {
		return NSColorList(name: name, fromFile: fromFile)
	}

}
