import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPrinterExports: JSExport {
	// , NSCodingExports, NSCopyingExports
	// Static Methods

	// Own Static Properties
	@objc static var printerNames: [String] { @objc get }
	@objc static var printerTypes: [NSPrinter.TypeName] { get }

	// Instance Methods
	@objc (pageSizeForPaper:) func pageSize(forPaper: NSPrinter.PaperName) -> NSSize

	// Own Instance Properties
	@objc var deviceDescription: [NSDeviceDescriptionKey : Any] { get }
	@objc var languageLevel: Int { @objc get }
	@objc var name: String { @objc get }
	@objc var type: NSPrinter.TypeName { @objc get }

	// Constructors
	@objc static func create() -> NSPrinter
}

extension NSPrinter: NSPrinterExports {
	@objc class func create() -> NSPrinter {
		return NSPrinter()
	}

}
