import AppKit
import JavaScriptCore

@objc protocol NSStatusItemExports: JSExport {
	@objc @available(OSX 10.12, *) var autosaveName: NSStatusItem.AutosaveName! { @objc get @objc (setAutosaveName:) set }
	@objc @available(OSX 10.12, *) var behavior: NSStatusItem.Behavior { @objc get @objc (setBehavior:) set }
	@objc @available(OSX 10.10, *) var button: NSStatusBarButton? { @objc get }
	@objc var length: CGFloat { @objc get @objc (setLength:) set }
	@objc var menu: NSMenu? { @objc get @objc (setMenu:) set }
	@objc var statusBar: NSStatusBar? { @objc get }
	@objc @available(OSX 10.12, *) var isVisible: Bool { @objc get @objc (setVisible:) set }
}

extension NSStatusItem: NSStatusItemExports {
	@objc override class func create() -> NSStatusItem {
		return NSStatusItem()
	}
}
