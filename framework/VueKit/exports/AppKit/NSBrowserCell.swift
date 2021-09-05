import AppKit
import JavaScriptCore

@objc protocol NSBrowserCellExports: JSExport {
	@objc var alternateImage: NSImage? { @objc get @objc (setAlternateImage:) set }
	@objc var isLeaf: Bool { @objc get @objc (setLeaf:) set }
	@objc var isLoaded: Bool { @objc get @objc (setLoaded:) set }
	@objc static var branchImage: NSImage? { @objc get }
	@objc static var highlightedBranchImage: NSImage? { @objc get }
	@objc (highlightColorInView:) func highlightColor(in: NSView) -> NSColor?
	@objc func reset()
	@objc func set()
}

extension NSBrowserCell: NSBrowserCellExports {
	@objc override class func create() -> NSBrowserCell {
		return NSBrowserCell()
	}
}
