import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextFinderExports: JSExport {
	// , NSCodingExports
	// Static Methods
	@objc (drawIncrementalMatchHighlightInRect:) static func drawIncrementalMatchHighlight(in: NSRect)

	// Instance Methods
	@objc func cancelFindIndicator()
	@objc func noteClientStringWillChange()
	@objc (performAction:) func performAction(_: NSTextFinder.Action)
	@objc (validateAction:) func validateAction(_: NSTextFinder.Action) -> Bool

	// Own Instance Properties
	@objc var client: NSTextFinderClient? { @objc get @objc (setClient:) set }
	@objc var findBarContainer: NSTextFinderBarContainer? { @objc get @objc (setFindBarContainer:) set }
	@objc var findIndicatorNeedsUpdate: Bool { @objc get @objc (setFindIndicatorNeedsUpdate:) set }
	@objc var incrementalMatchRanges: [NSValue] { @objc get }
	@objc var isIncrementalSearchingEnabled: Bool { @objc get @objc (setIncrementalSearchingEnabled:) set }
	@objc var incrementalSearchingShouldDimContentView: Bool { @objc get @objc (setIncrementalSearchingShouldDimContentView:) set }

	// Constructors
	@objc static func create() -> NSTextFinder
}

extension NSTextFinder: NSTextFinderExports {
	@objc class func create() -> NSTextFinder {
		return NSTextFinder()
	}

}
