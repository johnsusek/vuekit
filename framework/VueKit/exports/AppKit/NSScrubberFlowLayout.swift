import AppKit
import JavaScriptCore

@objc protocol NSScrubberFlowLayoutExports: JSExport {
	@objc var itemSize: NSSize { @objc get @objc (setItemSize:) set }
	@objc var itemSpacing: CGFloat { @objc get @objc (setItemSpacing:) set }
	@objc (invalidateLayoutForItemsAtIndexes:) func invalidateLayoutForItems(at: IndexSet)
}

extension NSScrubberFlowLayout: NSScrubberFlowLayoutExports {
	@objc override class func create() -> NSScrubberFlowLayout {
		return NSScrubberFlowLayout()
	}
}
