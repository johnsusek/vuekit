import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol IKImageBrowserCellExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func cellState() -> IKImageBrowserCellState
	@objc func frame() -> NSRect
	@objc func imageAlignment() -> NSImageAlignment
	@objc func imageContainerFrame() -> NSRect
	@objc func imageFrame() -> NSRect
	@objc func indexOfRepresentedItem() -> Int
	@objc func isSelected() -> Bool
	@objc (layerForType:) func layer(forType: String) -> CALayer
	@objc func opacity() -> CGFloat
	@objc func representedItem() -> Any!
	@objc func selectionFrame() -> NSRect
	@objc func subtitleFrame() -> NSRect
	@objc func titleFrame() -> NSRect

	// Constructors
}

extension IKImageBrowserCell: IKImageBrowserCellExports {
}
