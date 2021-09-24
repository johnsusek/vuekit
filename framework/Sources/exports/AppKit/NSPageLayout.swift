import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPageLayoutExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc @available(OSX 10.5, *) func addAccessoryController(_: NSViewController)
	@objc (beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:) func beginSheet(with: NSPrintInfo, modalFor: NSWindow, delegate: Any?, didEnd: Selector?, contextInfo: UnsafeMutableRawPointer?)
	@objc @available(OSX 10.5, *) func removeAccessoryController(_: NSViewController)
	@objc func runModal() -> Int
	@objc (runModalWithPrintInfo:) func runModal(with: NSPrintInfo) -> Int

	// Own Instance Properties
	@objc @available(OSX 10.5, *) var accessoryControllers: [NSViewController] { @objc get }
	@objc var printInfo: NSPrintInfo? { @objc get }

	// Constructors
}

extension NSPageLayout: NSPageLayoutExports {
}
