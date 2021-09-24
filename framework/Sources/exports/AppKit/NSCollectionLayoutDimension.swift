import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutDimensionExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var dimension: CGFloat { get }
	@objc var isAbsolute: Bool { @objc get }
	@objc var isEstimated: Bool { @objc get }
	@objc var isFractionalHeight: Bool { @objc get }
	@objc var isFractionalWidth: Bool { @objc get }
}

extension NSCollectionLayoutDimension: NSCollectionLayoutDimensionExports {}
