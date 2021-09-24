import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutBoundarySupplementaryItemExports: JSExport, NSCollectionLayoutSupplementaryItemExports {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var alignment: NSRectAlignment { @objc get }
	@objc var extendsBoundary: Bool { @objc get @objc (setExtendsBoundary:) set }
	@objc var offset: NSPoint { @objc get }
	@objc var pinToVisibleBounds: Bool { @objc get @objc (setPinToVisibleBounds:) set }

	// Constructors
	@objc static func create(layoutSize: NSCollectionLayoutSize, elementKind: String, alignment: NSRectAlignment) -> NSCollectionLayoutBoundarySupplementaryItem
	@objc static func create(layoutSize: NSCollectionLayoutSize, elementKind: String, alignment: NSRectAlignment, absoluteOffset: NSPoint) -> NSCollectionLayoutBoundarySupplementaryItem
}

extension NSCollectionLayoutBoundarySupplementaryItem: NSCollectionLayoutBoundarySupplementaryItemExports {
	@objc class func create(layoutSize: NSCollectionLayoutSize, elementKind: String, alignment: NSRectAlignment) -> NSCollectionLayoutBoundarySupplementaryItem {
		return NSCollectionLayoutBoundarySupplementaryItem(layoutSize: layoutSize, elementKind: elementKind, alignment: alignment)
	}

	@objc class func create(layoutSize: NSCollectionLayoutSize, elementKind: String, alignment: NSRectAlignment, absoluteOffset: NSPoint) -> NSCollectionLayoutBoundarySupplementaryItem {
		return NSCollectionLayoutBoundarySupplementaryItem(layoutSize: layoutSize, elementKind: elementKind, alignment: alignment, absoluteOffset: absoluteOffset)
	}

}
