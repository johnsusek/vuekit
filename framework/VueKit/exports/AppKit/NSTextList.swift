import AppKit
import JavaScriptCore

@objc protocol NSTextListExports: JSExport {
	@objc var listOptions: NSTextList.Options { @objc get }
	@objc var markerFormat: NSTextList.MarkerFormat { @objc get }
	@objc @available(OSX 10.6, *) var startingItemNumber: Int { @objc get @objc (setStartingItemNumber:) set }
	@objc (markerForItemNumber:) func marker(forItemNumber: Int) -> String
	@objc static func create(markerFormat: NSTextList.MarkerFormat, options: Int) -> NSTextList
}

extension NSTextList: NSTextListExports {
	@objc class func create(markerFormat: NSTextList.MarkerFormat, options: Int) -> NSTextList {
		return NSTextList(markerFormat: markerFormat, options: options)
	}

	@objc override class func create() -> NSTextList {
		return NSTextList()
	}
}
