import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSBrowserCellExports: JSExport, NSCellExports {
	// Static Methods

	// Own Static Properties
	@objc static var branchImage: NSImage? { @objc get }
	@objc static var highlightedBranchImage: NSImage? { @objc get }

	// Instance Methods
	@objc (highlightColorInView:) func highlightColor(in: NSView) -> NSColor?
	@objc func reset()
	@objc func set()

	// Own Instance Properties
	@objc var alternateImage: NSImage? { @objc get @objc (setAlternateImage:) set }
	@objc var isLeaf: Bool { @objc get @objc (setLeaf:) set }
	@objc var isLoaded: Bool { @objc get @objc (setLoaded:) set }

	// Constructors
}

extension NSBrowserCell: NSBrowserCellExports {
}
