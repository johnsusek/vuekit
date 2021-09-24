import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutSizeExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var heightDimension: NSCollectionLayoutDimension { @objc get }
	@objc var widthDimension: NSCollectionLayoutDimension { @objc get }

	// Constructors
	@objc static func create(widthDimension: NSCollectionLayoutDimension, heightDimension: NSCollectionLayoutDimension) -> NSCollectionLayoutSize
}

extension NSCollectionLayoutSize: NSCollectionLayoutSizeExports {
	@objc class func create(widthDimension: NSCollectionLayoutDimension, heightDimension: NSCollectionLayoutDimension) -> NSCollectionLayoutSize {
		return NSCollectionLayoutSize(widthDimension: widthDimension, heightDimension: heightDimension)
	}

}
