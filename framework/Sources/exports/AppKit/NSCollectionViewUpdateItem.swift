import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionViewUpdateItemExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var indexPathAfterUpdate: IndexPath? { @objc get }
	@objc var indexPathBeforeUpdate: IndexPath? { @objc get }
	@objc var updateAction: NSCollectionView.UpdateAction { @objc get }

	// Constructors
}

extension NSCollectionViewUpdateItem: NSCollectionViewUpdateItemExports {
}
