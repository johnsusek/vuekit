import AppKit
import JavaScriptCore

@objc protocol NSPageLayoutExports: JSExport {
	@objc static func create() -> NSPageLayout
	@objc @available(OSX 10.5, *) var accessoryControllers: [NSViewController] { @objc get }
	@objc var printInfo: NSPrintInfo? { @objc get }
	@objc @available(OSX 10.5, *) func addAccessoryController(_: NSViewController)
	@objc (beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:) func beginSheet(with: NSPrintInfo, modalFor: NSWindow, delegate: Any?, didEnd: Selector?, contextInfo: UnsafeMutableRawPointer?)
	@objc @available(OSX 10.5, *) func removeAccessoryController(_: NSViewController)
	@objc func runModal() -> Int
	@objc (runModalWithPrintInfo:) func runModal(with: NSPrintInfo) -> Int
}

extension NSPageLayout: NSPageLayoutExports {
	@objc override class func create() -> NSPageLayout {
		return NSPageLayout()
	}

}
