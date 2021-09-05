import AppKit
import JavaScriptCore

@objc protocol NSCollectionViewUpdateItemExports: JSExport {
	@objc var indexPathAfterUpdate: IndexPath? { @objc get }
	@objc var indexPathBeforeUpdate: IndexPath? { @objc get }
	@objc var updateAction: NSCollectionView.UpdateAction { @objc get }
}

extension NSCollectionViewUpdateItem: NSCollectionViewUpdateItemExports {
	@objc override class func create() -> NSCollectionViewUpdateItem {
		return NSCollectionViewUpdateItem()
	}
}
