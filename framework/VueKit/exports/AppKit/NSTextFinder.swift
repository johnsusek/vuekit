import AppKit
import JavaScriptCore

@objc protocol NSTextFinderExports: JSExport {
	@objc (drawIncrementalMatchHighlightInRect:) static func drawIncrementalMatchHighlight(in: NSRect)
	@objc var client: NSTextFinderClient? { @objc get @objc (setClient:) set }
	@objc var findBarContainer: NSTextFinderBarContainer? { @objc get @objc (setFindBarContainer:) set }
	@objc var findIndicatorNeedsUpdate: Bool { @objc get @objc (setFindIndicatorNeedsUpdate:) set }
	@objc var incrementalMatchRanges: [NSValue] { @objc get }
	@objc var isIncrementalSearchingEnabled: Bool { @objc get @objc (setIncrementalSearchingEnabled:) set }
	@objc var incrementalSearchingShouldDimContentView: Bool { @objc get @objc (setIncrementalSearchingShouldDimContentView:) set }
	@objc func cancelFindIndicator()
	@objc func noteClientStringWillChange()
	@objc (performAction:) func performAction(_: NSTextFinder.Action)
	@objc (validateAction:) func validateAction(_: NSTextFinder.Action) -> Bool
}

extension NSTextFinder: NSTextFinderExports {
	@objc override class func create() -> NSTextFinder {
		return NSTextFinder()
	}
}
