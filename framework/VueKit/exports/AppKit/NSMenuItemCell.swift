import AppKit
import JavaScriptCore

@objc protocol NSMenuItemCellExports: JSExport {
	@objc var imageWidth: CGFloat { @objc get }
	@objc var keyEquivalentWidth: CGFloat { @objc get }
	@objc var menuItem: NSMenuItem? { @objc get @objc (setMenuItem:) set }
	@objc var needsDisplay: Bool { @objc get @objc (setNeedsDisplay:) set }
	@objc var needsSizing: Bool { @objc get @objc (setNeedsSizing:) set }
	@objc var stateImageWidth: CGFloat { @objc get }
	@objc var titleWidth: CGFloat { @objc get }
	@objc func calcSize()
	@objc (drawBorderAndBackgroundWithFrame:inView:) func drawBorderAndBackground(withFrame: NSRect, in: NSView)
	@objc (drawImageWithFrame:inView:) func drawImage(withFrame: NSRect, in: NSView)
	@objc (drawKeyEquivalentWithFrame:inView:) func drawKeyEquivalent(withFrame: NSRect, in: NSView)
	@objc (drawSeparatorItemWithFrame:inView:) func drawSeparatorItem(withFrame: NSRect, in: NSView)
	@objc (drawStateImageWithFrame:inView:) func drawStateImage(withFrame: NSRect, in: NSView)
	@objc (drawTitleWithFrame:inView:) func drawTitle(withFrame: NSRect, in: NSView)
	@objc (keyEquivalentRectForBounds:) func keyEquivalentRect(forBounds: NSRect) -> NSRect
	@objc (stateImageRectForBounds:) func stateImageRect(forBounds: NSRect) -> NSRect
}

extension NSMenuItemCell: NSMenuItemCellExports {
	@objc override class func create() -> NSMenuItemCell {
		return NSMenuItemCell()
	}
}
