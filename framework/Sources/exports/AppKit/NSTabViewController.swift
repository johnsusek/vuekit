import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTabViewControllerExports: JSExport, NSViewControllerExports {
	// , NSTabViewDelegateExports, NSToolbarDelegateExports
	// Static Methods

	// Instance Methods
	@objc func addTabViewItem(_: NSTabViewItem)
	@objc (insertTabViewItem:atIndex:) func insertTabViewItem(_: NSTabViewItem, at: Int)
	@objc func removeTabViewItem(_: NSTabViewItem)
	@objc (tabViewItemForViewController:) func tabViewItem(`for`: NSViewController) -> NSTabViewItem?

	// Own Instance Properties
	@objc var canPropagateSelectedChildViewControllerTitle: Bool { @objc get @objc (setCanPropagateSelectedChildViewControllerTitle:) set }
	@objc var selectedTabViewItemIndex: Int { @objc get @objc (setSelectedTabViewItemIndex:) set }
	@objc var tabStyle: NSTabViewController.TabStyle { @objc get @objc (setTabStyle:) set }
	@objc var tabView: NSTabView { @objc get @objc (setTabView:) set }
	@objc var tabViewItems: [NSTabViewItem] { @objc get @objc (setTabViewItems:) set }
	@objc var transitionOptions: NSViewController.TransitionOptions { @objc get @objc (setTransitionOptions:) set }

	// Constructors
}

extension NSTabViewController: NSTabViewControllerExports {
}
