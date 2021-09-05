import AppKit
import JavaScriptCore

@objc protocol NSCollectionViewFlowLayoutExports: JSExport {
	@objc var estimatedItemSize: NSSize { @objc get @objc (setEstimatedItemSize:) set }
	@objc var footerReferenceSize: NSSize { @objc get @objc (setFooterReferenceSize:) set }
	@objc var headerReferenceSize: NSSize { @objc get @objc (setHeaderReferenceSize:) set }
	@objc var itemSize: NSSize { @objc get @objc (setItemSize:) set }
	@objc var minimumInteritemSpacing: CGFloat { @objc get @objc (setMinimumInteritemSpacing:) set }
	@objc var minimumLineSpacing: CGFloat { @objc get @objc (setMinimumLineSpacing:) set }
	@objc var scrollDirection: NSCollectionView.ScrollDirection { @objc get @objc (setScrollDirection:) set }
	@objc @available(OSX 10.12, *) var sectionFootersPinToVisibleBounds: Bool { @objc get @objc (setSectionFootersPinToVisibleBounds:) set }
	@objc @available(OSX 10.12, *) var sectionHeadersPinToVisibleBounds: Bool { @objc get @objc (setSectionHeadersPinToVisibleBounds:) set }
	@objc var sectionInset: NSEdgeInsets { @objc get @objc (setSectionInset:) set }
	@objc (collapseSectionAtIndex:) @available(OSX 10.12, *) func collapseSection(at: Int)
	@objc (expandSectionAtIndex:) @available(OSX 10.12, *) func expandSection(at: Int)
	@objc (sectionAtIndexIsCollapsed:) @available(OSX 10.12, *) func section(atIndexIsCollapsed: Int) -> Bool
}

extension NSCollectionViewFlowLayout: NSCollectionViewFlowLayoutExports {
	@objc override class func create() -> NSCollectionViewFlowLayout {
		return NSCollectionViewFlowLayout()
	}
}
