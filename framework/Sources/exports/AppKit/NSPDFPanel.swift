import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPDFPanelExports: JSExport {
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (beginSheetWithPDFInfo:modalForWindow:completionHandler:) func beginSheet(with: NSPDFInfo, modalFor: NSWindow?, completionHandler: JSValue)

	// Own Instance Properties
	@objc var accessoryController: NSViewController? { @objc get @objc (setAccessoryController:) set }
	@objc var defaultFileName: String { @objc get @objc (setDefaultFileName:) set }
	@objc var options: NSPDFPanel.Options { @objc get @objc (setOptions:) set }

	// Constructors
	@objc static func create() -> NSPDFPanel
}

extension NSPDFPanel: NSPDFPanelExports {
	@objc class func create() -> NSPDFPanel {
		return NSPDFPanel()
	}

}
