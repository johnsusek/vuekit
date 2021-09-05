import AppKit
import JavaScriptCore

@objc protocol NSCollectionViewFlowLayoutInvalidationContextExports: JSExport {
	@objc var invalidateFlowLayoutAttributes: Bool { @objc get @objc (setInvalidateFlowLayoutAttributes:) set }
	@objc var invalidateFlowLayoutDelegateMetrics: Bool { @objc get @objc (setInvalidateFlowLayoutDelegateMetrics:) set }
}

extension NSCollectionViewFlowLayoutInvalidationContext: NSCollectionViewFlowLayoutInvalidationContextExports {
	@objc override class func create() -> NSCollectionViewFlowLayoutInvalidationContext {
		return NSCollectionViewFlowLayoutInvalidationContext()
	}
}
