import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPasteboardItemExports: JSExport {
	// , NSPasteboardReadingExports, NSPasteboardWritingExports
	// Static Methods

	// Instance Methods
	@objc (availableTypeFromArray:) func availableType(from types: [NSPasteboard.PasteboardType]) -> NSPasteboard.PasteboardType?
	@objc (dataForType:) func data(forType: NSPasteboard.PasteboardType) -> Data?
	@objc (propertyListForType:) func propertyList(forType: NSPasteboard.PasteboardType) -> Any?
	@objc func setData(_: Data, forType: NSPasteboard.PasteboardType) -> Bool
	@objc func setDataProvider(_ dataProvider: NSPasteboardItemDataProvider, forTypes types: [NSPasteboard.PasteboardType]) -> Bool
	@objc func setPropertyList(_: Any, forType: NSPasteboard.PasteboardType) -> Bool
	@objc func setString(_: String, forType: NSPasteboard.PasteboardType) -> Bool
	@objc (stringForType:) func string(forType: NSPasteboard.PasteboardType) -> String?

	// Own Instance Properties
	@objc var types: [NSPasteboard.PasteboardType] { get }

	// Constructors
	@objc static func create() -> NSPasteboardItem
}

extension NSPasteboardItem: NSPasteboardItemExports {
	@objc class func create() -> NSPasteboardItem {
		return NSPasteboardItem()
	}

}
