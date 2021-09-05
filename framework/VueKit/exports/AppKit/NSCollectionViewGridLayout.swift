import AppKit
import JavaScriptCore

@objc protocol NSCollectionViewGridLayoutExports: JSExport {
	@objc var backgroundColors: [NSColor]! { @objc get @objc (setBackgroundColors:) set }
	@objc var margins: NSEdgeInsets { @objc get @objc (setMargins:) set }
	@objc var maximumItemSize: NSSize { @objc get @objc (setMaximumItemSize:) set }
	@objc var maximumNumberOfColumns: Int { @objc get @objc (setMaximumNumberOfColumns:) set }
	@objc var maximumNumberOfRows: Int { @objc get @objc (setMaximumNumberOfRows:) set }
	@objc var minimumInteritemSpacing: CGFloat { @objc get @objc (setMinimumInteritemSpacing:) set }
	@objc var minimumItemSize: NSSize { @objc get @objc (setMinimumItemSize:) set }
	@objc var minimumLineSpacing: CGFloat { @objc get @objc (setMinimumLineSpacing:) set }
}

extension NSCollectionViewGridLayout: NSCollectionViewGridLayoutExports {
	@objc override class func create() -> NSCollectionViewGridLayout {
		return NSCollectionViewGridLayout()
	}
}
