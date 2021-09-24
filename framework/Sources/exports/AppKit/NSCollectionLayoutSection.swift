import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutSectionExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var boundarySupplementaryItems: [NSCollectionLayoutBoundarySupplementaryItem] { @objc get @objc (setBoundarySupplementaryItems:) set }
	@objc var contentInsets: NSDirectionalEdgeInsets { @objc get @objc (setContentInsets:) set }
	@objc var decorationItems: [NSCollectionLayoutDecorationItem] { @objc get @objc (setDecorationItems:) set }
	@objc var interGroupSpacing: CGFloat { get set }
	@objc var orthogonalScrollingBehavior: NSCollectionLayoutSectionOrthogonalScrollingBehavior { @objc get @objc (setOrthogonalScrollingBehavior:) set }
	@objc var supplementariesFollowContentInsets: Bool { @objc get @objc (setSupplementariesFollowContentInsets:) set }
	@objc var visibleItemsInvalidationHandler: NSCollectionLayoutSectionVisibleItemsInvalidationHandler? { get set }

	// Constructors
	@objc static func create(group: NSCollectionLayoutGroup) -> NSCollectionLayoutSection
}

extension NSCollectionLayoutSection: NSCollectionLayoutSectionExports {
	@objc class func create(group: NSCollectionLayoutGroup) -> NSCollectionLayoutSection {
		return NSCollectionLayoutSection(group: group)
	}

}
