import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol QuartzFilterManagerExports: JSExport {
	// Static Methods
	@objc (filtersInDomains:) static func filters(inDomains: [Any]) -> [Any]

	// Instance Methods
	@objc func delegate() -> Any!
	@objc func filterPanel() -> NSPanel
	@objc func filterView() -> QuartzFilterView
	@objc func importFilter(_: [AnyHashable: Any]) -> QuartzFilter
	@objc (selectFilter:) func select(_: QuartzFilter) -> Bool
	@objc func selectedFilter() -> QuartzFilter
	@objc func setDelegate(_: Any)

	// Constructors
}

extension QuartzFilterManager: QuartzFilterManagerExports {
}
