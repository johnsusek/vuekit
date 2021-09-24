import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSplitViewControllerExports: JSExport, NSViewControllerExports {
	// , NSSplitViewDelegateExports, NSUserInterfaceValidationsExports
	// Static Methods

	// Instance Methods
	@objc func addSplitViewItem(_: NSSplitViewItem)
	@objc (insertSplitViewItem:atIndex:) func insertSplitViewItem(_: NSSplitViewItem, at: Int)
	@objc func removeSplitViewItem(_: NSSplitViewItem)
	@objc (splitViewItemForViewController:) func splitViewItem(`for`: NSViewController) -> NSSplitViewItem?
	@objc @available(OSX 10.11, *) func toggleSidebar(_: Any?)

	// Own Instance Properties
	@objc @available(OSX 10.11, *) var minimumThicknessForInlineSidebars: CGFloat { get set }
	@objc var splitView: NSSplitView { @objc get @objc (setSplitView:) set }
	@objc var splitViewItems: [NSSplitViewItem] { @objc get @objc (setSplitViewItems:) set }

	// Constructors
}

extension NSSplitViewController: NSSplitViewControllerExports {
}
