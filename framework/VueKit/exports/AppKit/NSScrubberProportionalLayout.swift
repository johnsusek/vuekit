import AppKit
import JavaScriptCore

@objc protocol NSScrubberProportionalLayoutExports: JSExport {
	@objc var numberOfVisibleItems: Int { @objc get @objc (setNumberOfVisibleItems:) set }
	@objc static func create(numberOfVisibleItems: Int) -> NSScrubberProportionalLayout
}

extension NSScrubberProportionalLayout: NSScrubberProportionalLayoutExports {
	@objc class func create(numberOfVisibleItems: Int) -> NSScrubberProportionalLayout {
		return NSScrubberProportionalLayout(numberOfVisibleItems: numberOfVisibleItems)
	}

	@objc override class func create() -> NSScrubberProportionalLayout {
		return NSScrubberProportionalLayout()
	}
}
