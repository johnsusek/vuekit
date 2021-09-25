import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrubberLayoutExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var layoutAttributesClass: AnyClass { @objc get }

	// Instance Methods
	@objc func invalidateLayout()
	@objc (layoutAttributesForItemAtIndex:) func layoutAttributesForItem(at: Int) -> NSScrubberLayoutAttributes?
	@objc (layoutAttributesForItemsInRect:) func layoutAttributesForItems(in: NSRect) -> Set<NSScrubberLayoutAttributes>
	@objc (prepareLayout) func prepare()
	@objc (shouldInvalidateLayoutForChangeFromVisibleRect:toVisibleRect:) func shouldInvalidateLayoutForChange(fromVisibleRect: NSRect, toVisibleRect: NSRect) -> Bool

	// Own Instance Properties
	@objc var automaticallyMirrorsInRightToLeftLayout: Bool { @objc get }
	@objc var scrubber: NSScrubber? { @objc get }
	@objc var scrubberContentSize: NSSize { @objc get }
	@objc var shouldInvalidateLayoutForHighlightChange: Bool { @objc get }
	@objc var shouldInvalidateLayoutForSelectionChange: Bool { @objc get }
	@objc var visibleRect: NSRect { @objc get }

	// Constructors
	@objc static func create() -> NSScrubberLayout
}

extension NSScrubberLayout: NSScrubberLayoutExports {
	@objc class func create() -> NSScrubberLayout {
		return NSScrubberLayout()
	}

}
