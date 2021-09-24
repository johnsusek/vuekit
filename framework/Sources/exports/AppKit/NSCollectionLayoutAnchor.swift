import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionLayoutAnchorExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var edges: NSDirectionalRectEdge { @objc get }
	@objc var isAbsoluteOffset: Bool { @objc get }
	@objc var isFractionalOffset: Bool { @objc get }
	@objc var offset: NSPoint { @objc get }

	// Constructors
	@objc static func create(edges: NSDirectionalRectEdge) -> NSCollectionLayoutAnchor
	@objc static func create(edges: NSDirectionalRectEdge, absoluteOffset: NSPoint) -> NSCollectionLayoutAnchor
	@objc static func create(edges: NSDirectionalRectEdge, fractionalOffset: NSPoint) -> NSCollectionLayoutAnchor
}

extension NSCollectionLayoutAnchor: NSCollectionLayoutAnchorExports {
	@objc class func create(edges: NSDirectionalRectEdge) -> NSCollectionLayoutAnchor {
		return NSCollectionLayoutAnchor(edges: edges)
	}

	@objc class func create(edges: NSDirectionalRectEdge, absoluteOffset: NSPoint) -> NSCollectionLayoutAnchor {
		return NSCollectionLayoutAnchor(edges: edges, absoluteOffset: absoluteOffset)
	}

	@objc class func create(edges: NSDirectionalRectEdge, fractionalOffset: NSPoint) -> NSCollectionLayoutAnchor {
		return NSCollectionLayoutAnchor(edges: edges, fractionalOffset: fractionalOffset)
	}

}
