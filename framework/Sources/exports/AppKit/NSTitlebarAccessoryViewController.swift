import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTitlebarAccessoryViewControllerExports: JSExport, NSViewControllerExports {
	// , NSAnimatablePropertyContainerExports, NSAnimationDelegateExports
	// Static Methods

	// Own Instance Properties
	@objc var fullScreenMinHeight: CGFloat { get set }
	@objc @available(OSX 10.12, *) var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var layoutAttribute: NSLayoutConstraint.Attribute { @objc get @objc (setLayoutAttribute:) set }

	// Constructors
}

extension NSTitlebarAccessoryViewController: NSTitlebarAccessoryViewControllerExports {
}
