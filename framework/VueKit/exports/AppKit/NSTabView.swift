import AppKit
import JavaScriptCore

@objc protocol NSTabViewExports: JSExport {
	@objc var allowsTruncatedLabels: Bool { @objc get @objc (setAllowsTruncatedLabels:) set }
	@objc var contentRect: NSRect { @objc get }
	@objc var controlSize: NSControl.ControlSize { @objc get @objc (setControlSize:) set }
	@objc var delegate: NSTabViewDelegate? { @objc get @objc (setDelegate:) set }
	@objc var drawsBackground: Bool { @objc get @objc (setDrawsBackground:) set }
	@objc var font: NSFont { @objc get @objc (setFont:) set }
	@objc var minimumSize: NSSize { @objc get }
	@objc var numberOfTabViewItems: Int { @objc get }
	@objc var selectedTabViewItem: NSTabViewItem? { @objc get }
	@objc @available(OSX 10.12, *) var tabPosition: NSTabView.TabPosition { @objc get @objc (setTabPosition:) set }
	@objc @available(OSX 10.12, *) var tabViewBorderType: NSTabView.TabViewBorderType { @objc get @objc (setTabViewBorderType:) set }
	@objc var tabViewItems: [NSTabViewItem] { @objc get @objc (setTabViewItems:) set }
	@objc var tabViewType: NSTabView.TabType { @objc get @objc (setTabViewType:) set }
	@objc (addTabViewItem:) func addTabViewItem(_: NSTabViewItem)
	@objc (indexOfTabViewItem:) func indexOfTabViewItem(_: NSTabViewItem) -> Int
	@objc (indexOfTabViewItemWithIdentifier:) func indexOfTabViewItem(withIdentifier: Any) -> Int
	@objc (insertTabViewItem:atIndex:) func insertTabViewItem(_: NSTabViewItem, at: Int)
	@objc func removeTabViewItem(_: NSTabViewItem)
	@objc func selectFirstTabViewItem(_: Any?)
	@objc func selectLastTabViewItem(_: Any?)
	@objc func selectNextTabViewItem(_: Any?)
	@objc func selectPreviousTabViewItem(_: Any?)
	@objc func selectTabViewItem(_: NSTabViewItem?)
	@objc (selectTabViewItemAtIndex:) func selectTabViewItem(at: Int)
	@objc (selectTabViewItemWithIdentifier:) func selectTabViewItem(withIdentifier: Any)
	@objc (tabViewItemAtIndex:) func tabViewItem(at: Int) -> NSTabViewItem
	@objc (tabViewItemAtPoint:) func tabViewItem(at: NSPoint) -> NSTabViewItem?
	@objc func takeSelectedTabViewItemFromSender(_: Any?)
	@objc static func create() -> TabView
}

class TabView: NSTabView, NSTabViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> TabView {
		return TabView()
	}
}
