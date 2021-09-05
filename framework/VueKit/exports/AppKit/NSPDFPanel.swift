import AppKit
import JavaScriptCore

@objc protocol NSPDFPanelExports: JSExport {
	@objc static func create() -> NSPDFPanel
	@objc var accessoryController: NSViewController? { @objc get @objc (setAccessoryController:) set }
	@objc var defaultFileName: String { @objc get @objc (setDefaultFileName:) set }
	@objc var options: NSPDFPanel.Options { @objc get @objc (setOptions:) set }
	// @objc (beginSheetWithPDFInfo:modalForWindow:completionHandler:) func beginSheet(with: NSPDFInfo, modalFor: NSWindow?, completionHandler: JSManagedValue /* void (^ _Nonnull)(NSInteger): Void */)
}

extension NSPDFPanel: NSPDFPanelExports {
	@objc override class func create() -> NSPDFPanel {
		return NSPDFPanel()
	}

}
