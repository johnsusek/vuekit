import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionViewGridLayoutExports: JSExport, NSCollectionViewLayoutExports {
	// Static Methods

	// Own Instance Properties
	@objc var backgroundColors: [NSColor]! { @objc get @objc (setBackgroundColors:) set }
	@objc var margins: NSEdgeInsets { @objc get @objc (setMargins:) set }
	@objc var maximumItemSize: NSSize { @objc get @objc (setMaximumItemSize:) set }
	@objc var maximumNumberOfColumns: Int { @objc get @objc (setMaximumNumberOfColumns:) set }
	@objc var maximumNumberOfRows: Int { @objc get @objc (setMaximumNumberOfRows:) set }
	@objc var minimumInteritemSpacing: CGFloat { get set }
	@objc var minimumItemSize: NSSize { @objc get @objc (setMinimumItemSize:) set }
	@objc var minimumLineSpacing: CGFloat { get set }

	// Constructors
	@objc static func create() -> NSCollectionViewGridLayout
}

extension NSCollectionViewGridLayout: NSCollectionViewGridLayoutExports {
	@objc override class func create() -> NSCollectionViewGridLayout {
		return NSCollectionViewGridLayout()
	}

}
