import AppKit
import JavaScriptCore

@objc protocol NSScrubberLayoutAttributesExports: JSExport {
	@objc var alpha: CGFloat { @objc get @objc (setAlpha:) set }
	@objc var frame: NSRect { @objc get @objc (setFrame:) set }
	@objc var itemIndex: Int { @objc get @objc (setItemIndex:) set }
	@objc static func create(forItemAt: Int) -> NSScrubberLayoutAttributes
}

extension NSScrubberLayoutAttributes: NSScrubberLayoutAttributesExports {
	@objc class func create(forItemAt: Int) -> NSScrubberLayoutAttributes {
		return NSScrubberLayoutAttributes(forItemAt: forItemAt)
	}

	@objc override class func create() -> NSScrubberLayoutAttributes {
		return NSScrubberLayoutAttributes()
	}
}
