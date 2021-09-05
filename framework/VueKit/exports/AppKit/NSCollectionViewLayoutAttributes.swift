import AppKit
import JavaScriptCore

@objc protocol NSCollectionViewLayoutAttributesExports: JSExport {
	@objc var alpha: CGFloat { @objc get @objc (setAlpha:) set }
	@objc var frame: NSRect { @objc get @objc (setFrame:) set }
	@objc var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var indexPath: IndexPath? { @objc get @objc (setIndexPath:) set }
	@objc var representedElementCategory: NSCollectionElementCategory { @objc get }
	@objc var representedElementKind: String? { @objc get }
	@objc var size: NSSize { @objc get @objc (setSize:) set }
	@objc var zIndex: Int { @objc get @objc (setZIndex:) set }
	@objc static func create(forDecorationViewOfKind: NSCollectionView.DecorationElementKind, with: IndexPath) -> NSCollectionViewLayoutAttributes
	@objc static func create(forInterItemGapBefore: IndexPath) -> NSCollectionViewLayoutAttributes
	@objc static func create(forItemWith: IndexPath) -> NSCollectionViewLayoutAttributes
	@objc static func create(forSupplementaryViewOfKind: NSCollectionView.SupplementaryElementKind, with: IndexPath) -> NSCollectionViewLayoutAttributes
}

extension NSCollectionViewLayoutAttributes: NSCollectionViewLayoutAttributesExports {
	@objc class func create(forDecorationViewOfKind: NSCollectionView.DecorationElementKind, with: IndexPath) -> NSCollectionViewLayoutAttributes {
		return NSCollectionViewLayoutAttributes(forDecorationViewOfKind: forDecorationViewOfKind, with: with)
	}

	@objc class func create(forInterItemGapBefore: IndexPath) -> NSCollectionViewLayoutAttributes {
		return NSCollectionViewLayoutAttributes(forInterItemGapBefore: forInterItemGapBefore)
	}

	@objc class func create(forItemWith: IndexPath) -> NSCollectionViewLayoutAttributes {
		return NSCollectionViewLayoutAttributes(forItemWith: forItemWith)
	}

	@objc class func create(forSupplementaryViewOfKind: NSCollectionView.SupplementaryElementKind, with: IndexPath) -> NSCollectionViewLayoutAttributes {
		return NSCollectionViewLayoutAttributes(forSupplementaryViewOfKind: forSupplementaryViewOfKind, with: with)
	}

	@objc override class func create() -> NSCollectionViewLayoutAttributes {
		return NSCollectionViewLayoutAttributes()
	}
}
