import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSWindowTabExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var accessoryView: NSView? { @objc get @objc (setAccessoryView:) set }
	@objc var attributedTitle: NSAttributedString? { @objc get @objc (setAttributedTitle:) set }
	@objc var title: String! { @objc get @objc (setTitle:) set }
	@objc var toolTip: String! { @objc get @objc (setToolTip:) set }

	// Constructors
	@objc static func create() -> NSWindowTab
}

extension NSWindowTab: NSWindowTabExports {
	@objc class func create() -> NSWindowTab {
		return NSWindowTab()
	}

}
