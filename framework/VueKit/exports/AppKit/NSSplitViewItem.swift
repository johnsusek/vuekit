import AppKit
import JavaScriptCore

@objc protocol NSSplitViewItemExports: JSExport {
	@objc @available(OSX 10.11, *) var automaticMaximumThickness: CGFloat { @objc get @objc (setAutomaticMaximumThickness:) set }
	@objc @available(OSX 10.11, *) var behavior: NSSplitViewItem.Behavior { @objc get }
	@objc var canCollapse: Bool { @objc get @objc (setCanCollapse:) set }
	@objc @available(OSX 10.11, *) var collapseBehavior: NSSplitViewItem.CollapseBehavior { @objc get @objc (setCollapseBehavior:) set }
	@objc var isCollapsed: Bool { @objc get @objc (setCollapsed:) set }
	@objc var holdingPriority: NSLayoutConstraint.Priority { @objc get @objc (setHoldingPriority:) set }
	@objc @available(OSX 10.11, *) var maximumThickness: CGFloat { @objc get @objc (setMaximumThickness:) set }
	@objc @available(OSX 10.11, *) var minimumThickness: CGFloat { @objc get @objc (setMinimumThickness:) set }
	@objc @available(OSX 10.11, *) var preferredThicknessFraction: CGFloat { @objc get @objc (setPreferredThicknessFraction:) set }
	@objc @available(OSX 10.11, *) var isSpringLoaded: Bool { @objc get @objc (setSpringLoaded:) set }
	@objc var viewController: NSViewController { @objc get @objc (setViewController:) set }
	@objc @available(OSX 10.11, *) static func create(contentListWithViewController: NSViewController) -> NSSplitViewItem
	@objc @available(OSX 10.11, *) static func create(sidebarWithViewController: NSViewController) -> NSSplitViewItem
	@objc static func create(viewController: NSViewController) -> NSSplitViewItem
}

extension NSSplitViewItem: NSSplitViewItemExports {
	@objc @available(OSX 10.11, *) class func create(contentListWithViewController: NSViewController) -> NSSplitViewItem {
		return NSSplitViewItem(contentListWithViewController: contentListWithViewController)
	}

	@objc @available(OSX 10.11, *) class func create(sidebarWithViewController: NSViewController) -> NSSplitViewItem {
		return NSSplitViewItem(sidebarWithViewController: sidebarWithViewController)
	}

	@objc class func create(viewController: NSViewController) -> NSSplitViewItem {
		return NSSplitViewItem(viewController: viewController)
	}

	@objc override class func create() -> NSSplitViewItem {
		return NSSplitViewItem()
	}
}
