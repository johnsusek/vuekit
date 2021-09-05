import AppKit
import JavaScriptCore

@objc protocol NSCollectionViewCompositionalLayoutConfigurationExports: JSExport {
	@objc var boundarySupplementaryItems: [NSCollectionLayoutBoundarySupplementaryItem] { @objc get @objc (setBoundarySupplementaryItems:) set }
	@objc var interSectionSpacing: CGFloat { @objc get @objc (setInterSectionSpacing:) set }
	@objc var scrollDirection: NSCollectionView.ScrollDirection { @objc get @objc (setScrollDirection:) set }
}

extension NSCollectionViewCompositionalLayoutConfiguration: NSCollectionViewCompositionalLayoutConfigurationExports {
	@objc override class func create() -> NSCollectionViewCompositionalLayoutConfiguration {
		return NSCollectionViewCompositionalLayoutConfiguration()
	}
}
