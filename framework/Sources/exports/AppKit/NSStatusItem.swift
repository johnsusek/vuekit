import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSStatusItemExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc @available(OSX 10.12, *) var autosaveName: NSStatusItem.AutosaveName! { @objc get @objc (setAutosaveName:) set }
	@objc @available(OSX 10.12, *) var behavior: NSStatusItem.Behavior { @objc get @objc (setBehavior:) set }
	@objc @available(OSX 10.10, *) var button: NSStatusBarButton? { @objc get }
	@objc var length: CGFloat { get set }
	@objc var menu: NSMenu? { @objc get @objc (setMenu:) set }
	@objc var statusBar: NSStatusBar? { @objc get }
	@objc @available(OSX 10.12, *) var isVisible: Bool { @objc get @objc (setVisible:) set }

	// Constructors
	@objc static func create() -> NSStatusItem
}

extension NSStatusItem: NSStatusItemExports {
	@objc class func create() -> NSStatusItem {
		return NSStatusItem()
	}

}
