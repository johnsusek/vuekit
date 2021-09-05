import AppKit
import JavaScriptCore

@objc protocol NSTitlebarAccessoryViewControllerExports: JSExport {
	@objc var fullScreenMinHeight: CGFloat { @objc get @objc (setFullScreenMinHeight:) set }
	@objc @available(OSX 10.12, *) var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var layoutAttribute: NSLayoutConstraint.Attribute { @objc get @objc (setLayoutAttribute:) set }
}

extension NSTitlebarAccessoryViewController: NSTitlebarAccessoryViewControllerExports {
	@objc override class func create() -> NSTitlebarAccessoryViewController {
		return NSTitlebarAccessoryViewController()
	}
}
