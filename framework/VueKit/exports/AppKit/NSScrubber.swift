import AppKit
import JavaScriptCore

@objc protocol NSScrubberExports: JSExport {
	@objc var backgroundColor: NSColor? { @objc get @objc (setBackgroundColor:) set }
	@objc var backgroundView: NSView? { @objc get @objc (setBackgroundView:) set }
	@objc var isContinuous: Bool { @objc get @objc (setContinuous:) set }
	@objc var dataSource: NSScrubberDataSource? { @objc get @objc (setDataSource:) set }
	@objc var delegate: NSScrubberDelegate? { @objc get @objc (setDelegate:) set }
	@objc var floatsSelectionViews: Bool { @objc get @objc (setFloatsSelectionViews:) set }
	@objc var highlightedIndex: Int { @objc get }
	@objc var itemAlignment: NSScrubber.Alignment { @objc get @objc (setItemAlignment:) set }
	@objc var mode: NSScrubber.Mode { @objc get @objc (setMode:) set }
	@objc var numberOfItems: Int { @objc get }
	@objc var scrubberLayout: NSScrubberLayout { @objc get @objc (setScrubberLayout:) set }
	@objc var selectedIndex: Int { @objc get @objc (setSelectedIndex:) set }
	@objc var selectionBackgroundStyle: NSScrubberSelectionStyle? { @objc get @objc (setSelectionBackgroundStyle:) set }
	@objc var selectionOverlayStyle: NSScrubberSelectionStyle? { @objc get @objc (setSelectionOverlayStyle:) set }
	@objc var showsAdditionalContentIndicators: Bool { @objc get @objc (setShowsAdditionalContentIndicators:) set }
	@objc var showsArrowButtons: Bool { @objc get @objc (setShowsArrowButtons:) set }
	@objc (insertItemsAtIndexes:) func insertItems(at: IndexSet)
	@objc (itemViewForItemAtIndex:) func itemViewForItem(at: Int) -> NSScrubberItemView?
	@objc (makeItemWithIdentifier:owner:) func makeItem(withIdentifier: NSUserInterfaceItemIdentifier, owner: Any?) -> NSScrubberItemView?
	@objc (moveItemAtIndex:toIndex:) func moveItem(at: Int, to: Int)
	// @objc func performSequentialBatchUpdates(_: JSManagedValue /* : Void */)
	@objc (registerClass:forItemIdentifier:) func register(_: AnyClass?, forItemIdentifier: NSUserInterfaceItemIdentifier)
	@objc (registerNib:forItemIdentifier:) func register(_: NSNib?, forItemIdentifier: NSUserInterfaceItemIdentifier)
	@objc func reloadData()
	@objc (reloadItemsAtIndexes:) func reloadItems(at: IndexSet)
	@objc (removeItemsAtIndexes:) func removeItems(at: IndexSet)
	@objc (scrollItemAtIndex:toAlignment:) func scrollItem(at: Int, to: NSScrubber.Alignment)
	@objc static func create() -> Scrubber
}

class Scrubber: NSScrubber, NSScrubberExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> Scrubber {
		return Scrubber()
	}
}
