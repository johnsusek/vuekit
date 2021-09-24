import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutGroupCustomItemExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var frame: NSRect { @objc get }
	@objc var zIndex: Int { @objc get }

	// Constructors
	@objc static func create(frame: NSRect) -> NSCollectionLayoutGroupCustomItem
	@objc static func create(frame: NSRect, zIndex: Int) -> NSCollectionLayoutGroupCustomItem
}

extension NSCollectionLayoutGroupCustomItem: NSCollectionLayoutGroupCustomItemExports {
	@objc class func create(frame: NSRect) -> NSCollectionLayoutGroupCustomItem {
		return NSCollectionLayoutGroupCustomItem(frame: frame)
	}

	@objc class func create(frame: NSRect, zIndex: Int) -> NSCollectionLayoutGroupCustomItem {
		return NSCollectionLayoutGroupCustomItem(frame: frame, zIndex: zIndex)
	}

}
