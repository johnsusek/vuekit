import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutItemExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var contentInsets: NSDirectionalEdgeInsets { @objc get @objc (setContentInsets:) set }
	@objc var edgeSpacing: NSCollectionLayoutEdgeSpacing? { @objc get @objc (setEdgeSpacing:) set }
	@objc var layoutSize: NSCollectionLayoutSize { @objc get }
	@objc var supplementaryItems: [NSCollectionLayoutSupplementaryItem] { @objc get }

	// Constructors
	@objc static func create(layoutSize: NSCollectionLayoutSize) -> NSCollectionLayoutItem
	@objc static func create(layoutSize: NSCollectionLayoutSize, supplementaryItems: [NSCollectionLayoutSupplementaryItem]) -> NSCollectionLayoutItem
}

extension NSCollectionLayoutItem: NSCollectionLayoutItemExports {
	@objc class func create(layoutSize: NSCollectionLayoutSize) -> NSCollectionLayoutItem {
		return NSCollectionLayoutItem(layoutSize: layoutSize)
	}

	@objc class func create(layoutSize: NSCollectionLayoutSize, supplementaryItems: [NSCollectionLayoutSupplementaryItem]) -> NSCollectionLayoutItem {
		return NSCollectionLayoutItem(layoutSize: layoutSize, supplementaryItems: supplementaryItems)
	}

}
