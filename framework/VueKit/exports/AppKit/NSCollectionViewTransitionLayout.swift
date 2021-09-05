import AppKit
import JavaScriptCore

@objc protocol NSCollectionViewTransitionLayoutExports: JSExport {
	@objc var currentLayout: NSCollectionViewLayout { @objc get }
	@objc var nextLayout: NSCollectionViewLayout { @objc get }
	@objc var transitionProgress: CGFloat { @objc get @objc (setTransitionProgress:) set }
	@objc func updateValue(_: CGFloat, forAnimatedKey: NSCollectionViewTransitionLayout.AnimatedKey)
	@objc (valueForAnimatedKey:) func value(forAnimatedKey: NSCollectionViewTransitionLayout.AnimatedKey) -> CGFloat
	@objc static func create(currentLayout: NSCollectionViewLayout, nextLayout: NSCollectionViewLayout) -> NSCollectionViewTransitionLayout
}

extension NSCollectionViewTransitionLayout: NSCollectionViewTransitionLayoutExports {
	@objc class func create(currentLayout: NSCollectionViewLayout, nextLayout: NSCollectionViewLayout) -> NSCollectionViewTransitionLayout {
		return NSCollectionViewTransitionLayout(currentLayout: currentLayout, nextLayout: nextLayout)
	}

	@objc override class func create() -> NSCollectionViewTransitionLayout {
		return NSCollectionViewTransitionLayout()
	}
}
