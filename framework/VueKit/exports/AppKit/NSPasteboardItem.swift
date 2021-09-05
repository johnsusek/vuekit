import AppKit
import JavaScriptCore

@objc protocol NSPasteboardItemExports: JSExport {
	@objc var types: [NSPasteboard.PasteboardType] { @objc get }
	@objc (availableTypeFromArray:) func availableType(from: [NSPasteboard.PasteboardType]) -> NSPasteboard.PasteboardType?
	@objc (dataForType:) func data(forType: NSPasteboard.PasteboardType) -> Data?
	@objc (propertyListForType:) func propertyList(forType: NSPasteboard.PasteboardType) -> Any?
	@objc func setData(_: Data, forType: NSPasteboard.PasteboardType) -> Bool
	@objc func setDataProvider(_: NSPasteboardItemDataProvider, forTypes: [NSPasteboard.PasteboardType]) -> Bool
	@objc func setPropertyList(_: Any, forType: NSPasteboard.PasteboardType) -> Bool
	@objc func setString(_: String, forType: NSPasteboard.PasteboardType) -> Bool
	@objc (stringForType:) func string(forType: NSPasteboard.PasteboardType) -> String?
}

extension NSPasteboardItem: NSPasteboardItemExports {
	@objc override class func create() -> NSPasteboardItem {
		return NSPasteboardItem()
	}
}
