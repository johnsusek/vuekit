import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutEdgeSpacingExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var bottom: NSCollectionLayoutSpacing? { @objc get }
	@objc var leading: NSCollectionLayoutSpacing? { @objc get }
	@objc var top: NSCollectionLayoutSpacing? { @objc get }
	@objc var trailing: NSCollectionLayoutSpacing? { @objc get }

	// Constructors
	@objc static func create(leading: NSCollectionLayoutSpacing?, top: NSCollectionLayoutSpacing?, trailing: NSCollectionLayoutSpacing?, bottom: NSCollectionLayoutSpacing?) -> NSCollectionLayoutEdgeSpacing
}

extension NSCollectionLayoutEdgeSpacing: NSCollectionLayoutEdgeSpacingExports {
	@objc class func create(leading: NSCollectionLayoutSpacing?, top: NSCollectionLayoutSpacing?, trailing: NSCollectionLayoutSpacing?, bottom: NSCollectionLayoutSpacing?) -> NSCollectionLayoutEdgeSpacing {
		return NSCollectionLayoutEdgeSpacing(leading: leading, top: top, trailing: trailing, bottom: bottom)
	}

}
