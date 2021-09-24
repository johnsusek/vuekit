import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSViewControllerExports: JSExport, NSResponderExports {
	// , NSEditorExports, NSSeguePerformingExports, NSUserInterfaceItemIdentificationExports, NSExtensionRequestHandlingExports
	// Static Methods

	// Instance Methods
	@objc (addChildViewController:) @available(OSX 10.10, *) func addChild(_: NSViewController)
	@objc (dismissController:) @available(OSX 10.10, *) func dismiss(_: Any?)
	@objc (dismissViewController:) @available(OSX 10.10, *) func dismiss(_: NSViewController)
	@objc (insertChildViewController:atIndex:) @available(OSX 10.10, *) func insertChild(_: NSViewController, at: Int)
	@objc func loadView()
	@objc (preferredContentSizeDidChangeForViewController:) @available(OSX 10.10, *) func preferredContentSizeDidChange(`for`: NSViewController)
	@objc (presentViewController:animator:) @available(OSX 10.10, *) func present(_: NSViewController, animator: NSViewControllerPresentationAnimator)
	@objc (presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:) @available(OSX 10.10, *) func present(_: NSViewController, asPopoverRelativeTo: NSRect, of: NSView, preferredEdge: NSRectEdge, behavior: NSPopover.Behavior)
	@objc (presentViewControllerAsModalWindow:) @available(OSX 10.10, *) func presentAsModalWindow(_: NSViewController)
	@objc (presentViewControllerAsSheet:) @available(OSX 10.10, *) func presentAsSheet(_: NSViewController)
	@objc (removeChildViewControllerAtIndex:) @available(OSX 10.10, *) func removeChild(at: Int)
	@objc (removeFromParentViewController) @available(OSX 10.10, *) func removeFromParent()
	// jsvalue - @objc (transitionFromViewController:toViewController:options:completionHandler:) @available(OSX 10.10, *) func transition(from: NSViewController, to: NSViewController, options: NSViewController.TransitionOptions, completionHandler: JSValue)
	@objc @available(OSX 10.10, *) func updateViewConstraints()
	@objc @available(OSX 10.10, *) func viewDidAppear()
	@objc @available(OSX 10.10, *) func viewDidDisappear()
	@objc @available(OSX 10.10, *) func viewDidLayout()
	@objc @available(OSX 10.10, *) func viewDidLoad()
	@objc @available(OSX 10.10, *) func viewWillAppear()
	@objc @available(OSX 10.10, *) func viewWillDisappear()
	@objc @available(OSX 10.10, *) func viewWillLayout()
	@objc (viewWillTransitionToSize:) @available(OSX 10.10, *) func viewWillTransition(to: NSSize)

	// Own Instance Properties
	@objc (childViewControllers) @available(OSX 10.10, *) var children: [NSViewController] { @objc (childViewControllers) get @objc (setChildViewControllers:) set }
	@objc @available(OSX 10.10, *) var extensionContext: NSExtensionContext? { @objc get }
	@objc var nibBundle: Bundle? { @objc get }
	@objc var nibName: NSNib.Name? { @objc get }
	@objc (parentViewController) @available(OSX 10.10, *) var parent: NSViewController? { @objc (parentViewController) get }
	@objc @available(OSX 10.10, *) var preferredContentSize: NSSize { @objc get @objc (setPreferredContentSize:) set }
	@objc @available(OSX 10.10, *) var preferredMaximumSize: NSSize { @objc get }
	@objc @available(OSX 10.10, *) var preferredMinimumSize: NSSize { @objc get }
	@objc @available(OSX 10.10, *) var preferredScreenOrigin: NSPoint { @objc get @objc (setPreferredScreenOrigin:) set }
	@objc @available(OSX 10.10, *) var presentedViewControllers: [NSViewController]? { @objc get }
	@objc (presentingViewController) @available(OSX 10.10, *) var presentingViewController: NSViewController? { @objc get }
	@objc var representedObject: Any? { @objc get @objc (setRepresentedObject:) set }
	@objc @available(OSX 10.10, *) var sourceItemView: NSView? { @objc get @objc (setSourceItemView:) set }
	@objc @available(OSX 10.10, *) var storyboard: NSStoryboard? { @objc get }
	@objc var title: String? { @objc get @objc (setTitle:) set }
	@objc var view: NSView { @objc get @objc (setView:) set }
	@objc @available(OSX 10.10, *) var isViewLoaded: Bool { @objc get }

	// Constructors
	@objc static func create(nibName: NSNib.Name?, bundle: Bundle?) -> NSViewController
}

extension NSViewController: NSViewControllerExports {
	@objc class func create(nibName: NSNib.Name?, bundle: Bundle?) -> NSViewController {
		return NSViewController(nibName: nibName, bundle: bundle)
	}

}
