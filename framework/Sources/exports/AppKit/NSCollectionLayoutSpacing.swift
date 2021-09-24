import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutSpacingExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var isFixed: Bool { @objc (isFixedSpacing) get }
	@objc var isFlexible: Bool { @objc (isFlexibleSpacing) get }
	@objc var spacing: CGFloat { get }
}

extension NSCollectionLayoutSpacing: NSCollectionLayoutSpacingExports {}
