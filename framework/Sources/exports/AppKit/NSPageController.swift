import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPageControllerExports: JSExport, NSViewControllerExports {
	// , NSAnimatablePropertyContainerExports, NSCodingExports
	// Static Methods

	// Instance Methods
	@objc func completeTransition()
	@objc func navigateBack(_: Any?)
	@objc func navigateForward(_: Any?)
	@objc (navigateForwardToObject:) func navigateForward(to: Any)
	@objc func takeSelectedIndexFrom(_: Any?)

	// Own Instance Properties
	@objc var arrangedObjects: [Any] { @objc get @objc (setArrangedObjects:) set }
	@objc var delegate: NSPageControllerDelegate? { @objc get @objc (setDelegate:) set }
	@objc var selectedIndex: Int { @objc get @objc (setSelectedIndex:) set }
	@objc var selectedViewController: NSViewController? { @objc get }
	@objc var transitionStyle: NSPageController.TransitionStyle { @objc get @objc (setTransitionStyle:) set }

	// Constructors
}

extension NSPageController: NSPageControllerExports {
}
