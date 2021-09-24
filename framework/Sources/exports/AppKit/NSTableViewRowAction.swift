import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTableViewRowActionExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var backgroundColor: NSColor! { @objc get @objc (setBackgroundColor:) set }
	@objc @available(OSX 10.12, *) var image: NSImage? { @objc get @objc (setImage:) set }
	@objc var style: NSTableViewRowAction.Style { @objc get }
	@objc var title: String { @objc get @objc (setTitle:) set }

	// Constructors
}

extension NSTableViewRowAction: NSTableViewRowActionExports {
}
