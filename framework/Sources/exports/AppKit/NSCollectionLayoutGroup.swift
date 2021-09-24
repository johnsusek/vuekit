import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutGroupExports: JSExport, NSCollectionLayoutItemExports {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc func visualDescription() -> String

	// Own Instance Properties
	@objc var interItemSpacing: NSCollectionLayoutSpacing? { @objc get @objc (setInterItemSpacing:) set }
	@objc var subitems: [NSCollectionLayoutItem] { @objc get }
	@objc var supplementaryItems: [NSCollectionLayoutSupplementaryItem] { @objc get @objc (setSupplementaryItems:) set }
}

extension NSCollectionLayoutGroup: NSCollectionLayoutGroupExports {}
