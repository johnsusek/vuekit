import AppKit
import JavaScriptCore

@objc protocol NSSplitViewControllerExports: JSExport {
	@objc @available(OSX 10.11, *) var minimumThicknessForInlineSidebars: CGFloat { @objc get @objc (setMinimumThicknessForInlineSidebars:) set }
	@objc var splitView: NSSplitView { @objc get @objc (setSplitView:) set }
	@objc var splitViewItems: [NSSplitViewItem] { @objc get @objc (setSplitViewItems:) set }
	@objc func addSplitViewItem(_: NSSplitViewItem)
	@objc (insertSplitViewItem:atIndex:) func insertSplitViewItem(_: NSSplitViewItem, at: Int)
	@objc func removeSplitViewItem(_: NSSplitViewItem)
	@objc (splitViewItemForViewController:) func splitViewItem(`for`: NSViewController) -> NSSplitViewItem?
	@objc @available(OSX 10.11, *) func toggleSidebar(_: Any?)
}

extension NSSplitViewController: NSSplitViewControllerExports {
	@objc override class func create() -> NSSplitViewController {
		return NSSplitViewController()
	}
}
