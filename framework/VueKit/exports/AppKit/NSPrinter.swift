import AppKit
import JavaScriptCore

@objc protocol NSPrinterExports: JSExport {
	@objc static func create(name: String) -> NSPrinter?
	@objc static func create(type: NSPrinter.TypeName) -> NSPrinter?
	@objc var deviceDescription: [NSDeviceDescriptionKey: Any] { @objc get }
	@objc var languageLevel: Int { @objc get }
	@objc var name: String { @objc get }
	@objc var type: NSPrinter.TypeName { @objc get }
	@objc static var printerNames: [String] { @objc get }
	@objc static var printerTypes: [NSPrinter.TypeName] { @objc get }
	@objc (pageSizeForPaper:) func pageSize(forPaper: NSPrinter.PaperName) -> NSSize
}

extension NSPrinter: NSPrinterExports {
	@objc class func create(name: String) -> NSPrinter? {
		return NSPrinter(name: name)
	}

	@objc class func create(type: NSPrinter.TypeName) -> NSPrinter? {
		return NSPrinter(type: type)
	}

	@objc override class func create() -> NSPrinter {
		return NSPrinter()
	}
}
