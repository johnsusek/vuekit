import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionViewLayoutExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Own Static Properties
	@objc static var invalidationContextClass: AnyClass { @objc get }
	@objc static var layoutAttributesClass: AnyClass { @objc get }

	// Instance Methods
	@objc (finalLayoutAttributesForDisappearingDecorationElementOfKind:atIndexPath:) func finalLayoutAttributesForDisappearingDecorationElement(ofKind: NSCollectionView.DecorationElementKind, at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc (finalLayoutAttributesForDisappearingItemAtIndexPath:) func finalLayoutAttributesForDisappearingItem(at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc (finalLayoutAttributesForDisappearingSupplementaryElementOfKind:atIndexPath:) func finalLayoutAttributesForDisappearingSupplementaryElement(ofKind: NSCollectionView.SupplementaryElementKind, at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc func finalizeAnimatedBoundsChange()
	@objc func finalizeCollectionViewUpdates()
	@objc func finalizeLayoutTransition()
	@objc (indexPathsToDeleteForDecorationViewOfKind:) func indexPathsToDeleteForDecorationView(ofKind: NSCollectionView.DecorationElementKind) -> Set<IndexPath>
	@objc (indexPathsToDeleteForSupplementaryViewOfKind:) func indexPathsToDeleteForSupplementaryView(ofKind: NSCollectionView.SupplementaryElementKind) -> Set<IndexPath>
	@objc (indexPathsToInsertForDecorationViewOfKind:) func indexPathsToInsertForDecorationView(ofKind: NSCollectionView.DecorationElementKind) -> Set<IndexPath>
	@objc (indexPathsToInsertForSupplementaryViewOfKind:) func indexPathsToInsertForSupplementaryView(ofKind: NSCollectionView.SupplementaryElementKind) -> Set<IndexPath>
	@objc (initialLayoutAttributesForAppearingDecorationElementOfKind:atIndexPath:) func initialLayoutAttributesForAppearingDecorationElement(ofKind: NSCollectionView.DecorationElementKind, at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc (initialLayoutAttributesForAppearingItemAtIndexPath:) func initialLayoutAttributesForAppearingItem(at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc (initialLayoutAttributesForAppearingSupplementaryElementOfKind:atIndexPath:) func initialLayoutAttributesForAppearingSupplementaryElement(ofKind: NSCollectionView.SupplementaryElementKind, at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc func invalidateLayout()
	@objc (invalidateLayoutWithContext:) func invalidateLayout(with: NSCollectionViewLayoutInvalidationContext)
	@objc (invalidationContextForBoundsChange:) func invalidationContext(forBoundsChange: NSRect) -> NSCollectionViewLayoutInvalidationContext
	@objc (invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:) func invalidationContext(forPreferredLayoutAttributes: NSCollectionViewLayoutAttributes, withOriginalAttributes: NSCollectionViewLayoutAttributes) -> NSCollectionViewLayoutInvalidationContext
	@objc (layoutAttributesForDecorationViewOfKind:atIndexPath:) func layoutAttributesForDecorationView(ofKind: NSCollectionView.DecorationElementKind, at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc (layoutAttributesForDropTargetAtPoint:) func layoutAttributesForDropTarget(at: NSPoint) -> NSCollectionViewLayoutAttributes?
	@objc (layoutAttributesForElementsInRect:) func layoutAttributesForElements(in: NSRect) -> [NSCollectionViewLayoutAttributes]
	@objc (layoutAttributesForInterItemGapBeforeIndexPath:) func layoutAttributesForInterItemGap(before: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc (layoutAttributesForItemAtIndexPath:) func layoutAttributesForItem(at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc (layoutAttributesForSupplementaryViewOfKind:atIndexPath:) func layoutAttributesForSupplementaryView(ofKind: NSCollectionView.SupplementaryElementKind, at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc (prepareForAnimatedBoundsChange:) func prepare(forAnimatedBoundsChange: NSRect)
	@objc (prepareForCollectionViewUpdates:) func prepare(forCollectionViewUpdates: [NSCollectionViewUpdateItem])
	@objc (prepareForTransitionFromLayout:) func prepareForTransition(from: NSCollectionViewLayout)
	@objc (prepareForTransitionToLayout:) func prepareForTransition(to: NSCollectionViewLayout)
	@objc (prepareLayout) func prepare()
	@objc (registerClass:forDecorationViewOfKind:) func register(_: AnyClass?, forDecorationViewOfKind: NSCollectionView.DecorationElementKind)
	@objc (registerNib:forDecorationViewOfKind:) func register(_: NSNib?, forDecorationViewOfKind: NSCollectionView.DecorationElementKind)
	@objc (shouldInvalidateLayoutForBoundsChange:) func shouldInvalidateLayout(forBoundsChange: NSRect) -> Bool
	@objc (shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:) func shouldInvalidateLayout(forPreferredLayoutAttributes: NSCollectionViewLayoutAttributes, withOriginalAttributes: NSCollectionViewLayoutAttributes) -> Bool
	@objc (targetContentOffsetForProposedContentOffset:) func targetContentOffset(forProposedContentOffset: NSPoint) -> NSPoint
	@objc (targetContentOffsetForProposedContentOffset:withScrollingVelocity:) func targetContentOffset(forProposedContentOffset: NSPoint, withScrollingVelocity: NSPoint) -> NSPoint

	// Own Instance Properties
	@objc var collectionView: NSCollectionView? { @objc get }
	@objc var collectionViewContentSize: NSSize { @objc get }

	// Constructors
}

extension NSCollectionViewLayout: NSCollectionViewLayoutExports {
}
