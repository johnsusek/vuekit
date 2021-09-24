import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionViewCompositionalLayoutConfigurationExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var boundarySupplementaryItems: [NSCollectionLayoutBoundarySupplementaryItem] { @objc get @objc (setBoundarySupplementaryItems:) set }
	@objc var interSectionSpacing: CGFloat { get set }
	@objc var scrollDirection: NSCollectionView.ScrollDirection { @objc get @objc (setScrollDirection:) set }

	// Constructors
}

extension NSCollectionViewCompositionalLayoutConfiguration: NSCollectionViewCompositionalLayoutConfigurationExports {
}
