import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutDecorationItemExports: JSExport, NSCollectionLayoutItemExports {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var elementKind: String { @objc get }
	@objc var zIndex: Int { @objc get @objc (setZIndex:) set }
}

extension NSCollectionLayoutDecorationItem: NSCollectionLayoutDecorationItemExports {}
