import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutSupplementaryItemExports: JSExport, NSCollectionLayoutItemExports {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var containerAnchor: NSCollectionLayoutAnchor { @objc get }
	@objc var elementKind: String { @objc get }
	@objc var itemAnchor: NSCollectionLayoutAnchor? { @objc get }
	@objc var zIndex: Int { @objc get @objc (setZIndex:) set }

	// Constructors
	@objc static func create(layoutSize: NSCollectionLayoutSize, elementKind: String, containerAnchor: NSCollectionLayoutAnchor) -> NSCollectionLayoutSupplementaryItem
	@objc static func create(layoutSize: NSCollectionLayoutSize, elementKind: String, containerAnchor: NSCollectionLayoutAnchor, itemAnchor: NSCollectionLayoutAnchor) -> NSCollectionLayoutSupplementaryItem
}

extension NSCollectionLayoutSupplementaryItem: NSCollectionLayoutSupplementaryItemExports {
	@objc class func create(layoutSize: NSCollectionLayoutSize, elementKind: String, containerAnchor: NSCollectionLayoutAnchor) -> NSCollectionLayoutSupplementaryItem {
		return NSCollectionLayoutSupplementaryItem(layoutSize: layoutSize, elementKind: elementKind, containerAnchor: containerAnchor)
	}

	@objc class func create(layoutSize: NSCollectionLayoutSize, elementKind: String, containerAnchor: NSCollectionLayoutAnchor, itemAnchor: NSCollectionLayoutAnchor) -> NSCollectionLayoutSupplementaryItem {
		return NSCollectionLayoutSupplementaryItem(layoutSize: layoutSize, elementKind: elementKind, containerAnchor: containerAnchor, itemAnchor: itemAnchor)
	}

}
