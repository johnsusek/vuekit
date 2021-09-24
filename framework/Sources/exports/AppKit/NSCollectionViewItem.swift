import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionViewItemExports: JSExport, NSViewControllerExports {
	// , NSCollectionViewElementExports, NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var collectionView: NSCollectionView? { @objc get }
	@objc @available(OSX 10.7, *) var draggingImageComponents: [NSDraggingImageComponent] { @objc get }
	@objc @available(OSX 10.11, *) var highlightState: NSCollectionViewItem.HighlightState { @objc get @objc (setHighlightState:) set }
	@objc @available(OSX 10.7, *) var imageView: NSImageView? { @objc get @objc (setImageView:) set }
	@objc var isSelected: Bool { @objc get @objc (setSelected:) set }
	@objc @available(OSX 10.7, *) var textField: NSTextField? { @objc get @objc (setTextField:) set }

	// Constructors
}

extension NSCollectionViewItem: NSCollectionViewItemExports {
}
