import AppKit
import JavaScriptCore

@objc protocol NSPrintOperationExports: JSExport {
	@objc (EPSOperationWithView:insideRect:toData:) static func epsOperation(with: NSView, inside: NSRect, to: NSMutableData?) -> NSPrintOperation
	@objc (EPSOperationWithView:insideRect:toData:printInfo:) static func epsOperation(with: NSView, inside: NSRect, to: NSMutableData, printInfo: NSPrintInfo) -> NSPrintOperation
	@objc (EPSOperationWithView:insideRect:toPath:printInfo:) static func epsOperation(with: NSView, inside: NSRect, toPath: String, printInfo: NSPrintInfo) -> NSPrintOperation
	@objc (PDFOperationWithView:insideRect:toData:) static func pdfOperation(with: NSView, inside: NSRect, to: NSMutableData) -> NSPrintOperation
	@objc (PDFOperationWithView:insideRect:toData:printInfo:) static func pdfOperation(with: NSView, inside: NSRect, to: NSMutableData, printInfo: NSPrintInfo) -> NSPrintOperation
	@objc (PDFOperationWithView:insideRect:toPath:printInfo:) static func pdfOperation(with: NSView, inside: NSRect, toPath: String, printInfo: NSPrintInfo) -> NSPrintOperation
	@objc static func create(view: NSView) -> NSPrintOperation
	@objc static func create(view: NSView, printInfo: NSPrintInfo) -> NSPrintOperation
	@objc @available(OSX 10.9, *) var pdfPanel: NSPDFPanel { @objc (PDFPanel) get @objc (setPDFPanel:) set }
	@objc var canSpawnSeparateThread: Bool { @objc get @objc (setCanSpawnSeparateThread:) set }
	@objc var context: NSGraphicsContext? { @objc get }
	@objc var isCopyingOperation: Bool { @objc get }
	@objc var currentPage: Int { @objc get }
	@objc @available(OSX 10.5, *) var jobTitle: String? { @objc get @objc (setJobTitle:) set }
	@objc var pageOrder: NSPrintOperation.PageOrder { @objc get @objc (setPageOrder:) set }
	@objc @available(OSX 10.5, *) var pageRange: NSRange { @objc get }
	@objc @available(OSX 10.7, *) var preferredRenderingQuality: NSPrintOperation.RenderingQuality { @objc get }
	@objc var printInfo: NSPrintInfo { @objc get @objc (setPrintInfo:) set }
	@objc var printPanel: NSPrintPanel { @objc get @objc (setPrintPanel:) set }
	@objc var showsPrintPanel: Bool { @objc get @objc (setShowsPrintPanel:) set }
	@objc var showsProgressPanel: Bool { @objc get @objc (setShowsProgressPanel:) set }
	@objc var view: NSView? { @objc get }
	@objc static var current: NSPrintOperation? { @objc (currentOperation) get @objc (setCurrentOperation:) set }
	@objc (cleanUpOperation) func cleanUp()
	@objc func createContext() -> NSGraphicsContext?
	@objc func deliverResult() -> Bool
	@objc func destroyContext()
	@objc (runOperation) func run() -> Bool
	@objc (runOperationModalForWindow:delegate:didRunSelector:contextInfo:) func runModal(`for`: NSWindow, delegate: Any?, didRun: Selector?, contextInfo: UnsafeMutableRawPointer?)
}

extension NSPrintOperation: NSPrintOperationExports {
	@objc class func create(view: NSView) -> NSPrintOperation {
		return NSPrintOperation(view: view)
	}

	@objc class func create(view: NSView, printInfo: NSPrintInfo) -> NSPrintOperation {
		return NSPrintOperation(view: view, printInfo: printInfo)
	}

	@objc override class func create() -> NSPrintOperation {
		return NSPrintOperation()
	}
}
