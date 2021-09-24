import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionViewFlowLayoutExports: JSExport, NSCollectionViewLayoutExports {
	// Static Methods

	// Instance Methods
	@objc (collapseSectionAtIndex:) @available(OSX 10.12, *) func collapseSection(at: Int)
	@objc (expandSectionAtIndex:) @available(OSX 10.12, *) func expandSection(at: Int)
	@objc (sectionAtIndexIsCollapsed:) @available(OSX 10.12, *) func section(atIndexIsCollapsed: Int) -> Bool

	// Own Instance Properties
	@objc var estimatedItemSize: NSSize { @objc get @objc (setEstimatedItemSize:) set }
	@objc var footerReferenceSize: NSSize { @objc get @objc (setFooterReferenceSize:) set }
	@objc var headerReferenceSize: NSSize { @objc get @objc (setHeaderReferenceSize:) set }
	@objc var itemSize: NSSize { @objc get @objc (setItemSize:) set }
	@objc var minimumInteritemSpacing: CGFloat { get set }
	@objc var minimumLineSpacing: CGFloat { get set }
	@objc var scrollDirection: NSCollectionView.ScrollDirection { @objc get @objc (setScrollDirection:) set }
	@objc @available(OSX 10.12, *) var sectionFootersPinToVisibleBounds: Bool { @objc get @objc (setSectionFootersPinToVisibleBounds:) set }
	@objc @available(OSX 10.12, *) var sectionHeadersPinToVisibleBounds: Bool { @objc get @objc (setSectionHeadersPinToVisibleBounds:) set }
	@objc var sectionInset: NSEdgeInsets { @objc get @objc (setSectionInset:) set }

	// Constructors
}

extension NSCollectionViewFlowLayout: NSCollectionViewFlowLayoutExports {
}
