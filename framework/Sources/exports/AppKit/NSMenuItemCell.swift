import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSMenuItemCellExports: JSExport, NSButtonCellExports {
	// Static Methods

	// Instance Methods
	@objc func calcSize()
	@objc (drawBorderAndBackgroundWithFrame:inView:) func drawBorderAndBackground(withFrame: NSRect, in: NSView)
	@objc (drawImageWithFrame:inView:) func drawImage(withFrame: NSRect, in: NSView)
	@objc (drawKeyEquivalentWithFrame:inView:) func drawKeyEquivalent(withFrame: NSRect, in: NSView)
	@objc (drawSeparatorItemWithFrame:inView:) func drawSeparatorItem(withFrame: NSRect, in: NSView)
	@objc (drawStateImageWithFrame:inView:) func drawStateImage(withFrame: NSRect, in: NSView)
	@objc (drawTitleWithFrame:inView:) func drawTitle(withFrame: NSRect, in: NSView)
	@objc (keyEquivalentRectForBounds:) func keyEquivalentRect(forBounds: NSRect) -> NSRect
	@objc (stateImageRectForBounds:) func stateImageRect(forBounds: NSRect) -> NSRect

	// Own Instance Properties
	@objc var imageWidth: CGFloat { get }
	@objc var keyEquivalentWidth: CGFloat { get }
	@objc var menuItem: NSMenuItem? { @objc get @objc (setMenuItem:) set }
	@objc var needsDisplay: Bool { @objc get @objc (setNeedsDisplay:) set }
	@objc var needsSizing: Bool { @objc get @objc (setNeedsSizing:) set }
	@objc var stateImageWidth: CGFloat { get }
	@objc var titleWidth: CGFloat { get }

	// Constructors
}

extension NSMenuItemCell: NSMenuItemCellExports {
}
