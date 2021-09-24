import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPrintPanelExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc @available(OSX 10.5, *) func addAccessoryController(_ accessoryController: NSViewController & NSPrintPanelAccessorizing)
	@objc (beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:) func beginSheet(with: NSPrintInfo, modalFor: NSWindow, delegate: Any?, didEnd: Selector?, contextInfo: UnsafeMutableRawPointer?)
	@objc @available(OSX 10.5, *) func defaultButtonTitle() -> String?
	@objc @available(OSX 10.5, *) func removeAccessoryController(_ accessoryController: NSViewController & NSPrintPanelAccessorizing)
	@objc func runModal() -> Int
	@objc (runModalWithPrintInfo:) @available(OSX 10.5, *) func runModal(with: NSPrintInfo) -> Int
	@objc @available(OSX 10.5, *) func setDefaultButtonTitle(_: String?)

	// Own Instance Properties
	@objc @available(OSX 10.5, *) var accessoryControllers: [NSViewController] { @objc get }
	@objc @available(OSX 10.5, *) var helpAnchor: NSHelpManager.AnchorName? { @objc get @objc (setHelpAnchor:) set }
	@objc var jobStyleHint: NSPrintPanel.JobStyleHint? { @objc get @objc (setJobStyleHint:) set }
	@objc @available(OSX 10.5, *) var options: NSPrintPanel.Options { @objc get @objc (setOptions:) set }
	@objc @available(OSX 10.5, *) var printInfo: NSPrintInfo { @objc get }

	// Constructors
}

extension NSPrintPanel: NSPrintPanelExports {
}
