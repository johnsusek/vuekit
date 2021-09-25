import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSplitViewItemExports: JSExport {
	// , NSAnimatablePropertyContainerExports, NSCodingExports
	// Static Methods

	// Own Instance Properties
	@objc @available(OSX 10.11, *) var automaticMaximumThickness: CGFloat { get set }
	@objc @available(OSX 10.11, *) var behavior: NSSplitViewItem.Behavior { @objc get }
	@objc var canCollapse: Bool { @objc get @objc (setCanCollapse:) set }
	@objc @available(OSX 10.11, *) var collapseBehavior: NSSplitViewItem.CollapseBehavior { @objc get @objc (setCollapseBehavior:) set }
	@objc var isCollapsed: Bool { @objc get @objc (setCollapsed:) set }
	@objc var holdingPriority: NSLayoutConstraint.Priority { @objc get @objc (setHoldingPriority:) set }
	@objc @available(OSX 10.11, *) var maximumThickness: CGFloat { get set }
	@objc @available(OSX 10.11, *) var minimumThickness: CGFloat { get set }
	@objc @available(OSX 10.11, *) var preferredThicknessFraction: CGFloat { get set }
	@objc @available(OSX 10.11, *) var isSpringLoaded: Bool { @objc get @objc (setSpringLoaded:) set }
	@objc var viewController: NSViewController { @objc get @objc (setViewController:) set }

	// Constructors
	@objc static func create() -> NSSplitViewItem
	@objc @available(OSX 10.11, *) static func create(contentListWithViewController: NSViewController) -> NSSplitViewItem
	@objc @available(OSX 10.11, *) static func create(sidebarWithViewController: NSViewController) -> NSSplitViewItem
}

extension NSSplitViewItem: NSSplitViewItemExports {
	@objc class func create() -> NSSplitViewItem {
		return NSSplitViewItem()
	}

	@objc @available(OSX 10.11, *) class func create(sidebarWithViewController: NSViewController) -> NSSplitViewItem {
		return NSSplitViewItem(sidebarWithViewController: sidebarWithViewController)
	}

	@objc @available(OSX 10.11, *) class func create(contentListWithViewController: NSViewController) -> NSSplitViewItem {
		return NSSplitViewItem(contentListWithViewController: contentListWithViewController)
	}

}
