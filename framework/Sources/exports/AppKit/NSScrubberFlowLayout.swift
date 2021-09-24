import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrubberFlowLayoutExports: JSExport, NSScrubberLayoutExports {
	// Static Methods

	// Instance Methods
	@objc (invalidateLayoutForItemsAtIndexes:) func invalidateLayoutForItems(at: IndexSet)

	// Own Instance Properties
	@objc var itemSize: NSSize { @objc get @objc (setItemSize:) set }
	@objc var itemSpacing: CGFloat { get set }

	// Constructors
}

extension NSScrubberFlowLayout: NSScrubberFlowLayoutExports {
}
