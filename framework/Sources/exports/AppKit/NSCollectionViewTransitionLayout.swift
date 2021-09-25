import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionViewTransitionLayoutExports: JSExport, NSCollectionViewLayoutExports {
	// Static Methods

	// Instance Methods
	@objc func updateValue(_ value: CGFloat, forAnimatedKey key: NSCollectionViewTransitionLayout.AnimatedKey)
	@objc (valueForAnimatedKey:) func value(forAnimatedKey: NSCollectionViewTransitionLayout.AnimatedKey) -> CGFloat

	// Own Instance Properties
	@objc var currentLayout: NSCollectionViewLayout { @objc get }
	@objc var nextLayout: NSCollectionViewLayout { @objc get }
	@objc var transitionProgress: CGFloat { get set }

	// Constructors
	@objc static func create() -> NSCollectionViewTransitionLayout
	@objc static func create(currentLayout: NSCollectionViewLayout, nextLayout: NSCollectionViewLayout) -> NSCollectionViewTransitionLayout
}

extension NSCollectionViewTransitionLayout: NSCollectionViewTransitionLayoutExports {
	@objc override class func create() -> NSCollectionViewTransitionLayout {
		return NSCollectionViewTransitionLayout()
	}

	@objc class func create(currentLayout: NSCollectionViewLayout, nextLayout: NSCollectionViewLayout) -> NSCollectionViewTransitionLayout {
		return NSCollectionViewTransitionLayout(currentLayout: currentLayout, nextLayout: nextLayout)
	}

}
