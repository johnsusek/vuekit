import AppKit
import JavaScriptCore

@objc protocol NSCollectionViewItemExports: JSExport {
	@objc var collectionView: NSCollectionView? { @objc get }
	@objc @available(OSX 10.7, *) var draggingImageComponents: [NSDraggingImageComponent] { @objc get }
	@objc @available(OSX 10.11, *) var highlightState: NSCollectionViewItem.HighlightState { @objc get @objc (setHighlightState:) set }
	@objc @available(OSX 10.7, *) var imageView: NSImageView? { @objc get @objc (setImageView:) set }
	@objc var isSelected: Bool { @objc get @objc (setSelected:) set }
	@objc @available(OSX 10.7, *) var textField: NSTextField? { @objc get @objc (setTextField:) set }
}

extension NSCollectionViewItem: NSCollectionViewItemExports {
	@objc override class func create() -> NSCollectionViewItem {
		return NSCollectionViewItem()
	}
}
