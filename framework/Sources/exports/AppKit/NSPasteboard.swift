import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPasteboardExports: JSExport {
	// Static Methods
	@objc (pasteboardWithUniqueName) static func withUniqueName() -> NSPasteboard
	@objc (typesFilterableTo:) static func types(filterableTo type: NSPasteboard.PasteboardType) -> [NSPasteboard.PasteboardType]

	// Own Static Properties
	@objc (generalPasteboard) static var general: NSPasteboard { @objc (generalPasteboard) get }

	// Instance Methods
	@objc func addTypes(_ newTypes: [NSPasteboard.PasteboardType], owner newOwner: Any?) -> Int
	@objc (availableTypeFromArray:) func availableType(from types: [NSPasteboard.PasteboardType]) -> NSPasteboard.PasteboardType?
	@objc (canReadItemWithDataConformingToTypes:) @available(OSX 10.6, *) func canReadItem(withDataConformingToTypes: [String]) -> Bool
	// 	@objc (canReadObjectForClasses:options:) @available(OSX 10.6, *) func canReadObject(forClasses: [NSObject], options: [String: Any]?) -> Bool
	@objc @available(OSX 10.6, *) func clearContents() -> Int
	@objc (dataForType:) func data(forType: NSPasteboard.PasteboardType) -> Data?
	@objc func declareTypes(_ newTypes: [NSPasteboard.PasteboardType], owner newOwner: Any?) -> Int
	@objc (indexOfPasteboardItem:) @available(OSX 10.6, *) func index(of: NSPasteboardItem) -> Int
	@objc (prepareForNewContentsWithOptions:) @available(OSX 10.12, *) func prepareForNewContents(with: NSPasteboard.ContentsOptions) -> Int
	@objc (propertyListForType:) func propertyList(forType: NSPasteboard.PasteboardType) -> Any?
	@objc func readFileContentsType(_: NSPasteboard.PasteboardType?, toFile: String) -> String?
	@objc func readFileWrapper() -> FileWrapper?
	// 	@objc (readObjectsForClasses:options:) @available(OSX 10.6, *) func readObjects(forClasses: [NSObject], options: [String: Any]?) -> [Any]?
	@objc func releaseGlobally()
	@objc func setData(_: Data?, forType: NSPasteboard.PasteboardType) -> Bool
	@objc func setPropertyList(_: Any, forType: NSPasteboard.PasteboardType) -> Bool
	@objc func setString(_: String, forType: NSPasteboard.PasteboardType) -> Bool
	@objc (stringForType:) func string(forType: NSPasteboard.PasteboardType) -> String?
	@objc func writeFileContents(_: String) -> Bool
	@objc (writeFileWrapper:) func write(_: FileWrapper) -> Bool
	@objc @available(OSX 10.6, *) func writeObjects(_: [NSPasteboardWriting]) -> Bool

	// Own Instance Properties
	@objc var changeCount: Int { @objc get }
	@objc var name: NSPasteboard.Name { @objc get }
	@objc @available(OSX 10.6, *) var pasteboardItems: [NSPasteboardItem]? { @objc get }
	@objc var types: [NSPasteboard.PasteboardType]? { get }

	// Constructors
}

extension NSPasteboard: NSPasteboardExports {
}
