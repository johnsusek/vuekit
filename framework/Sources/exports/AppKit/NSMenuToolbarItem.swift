import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSMenuToolbarItemExports: JSExport, NSToolbarItemExports {
	// Static Methods

	// Own Instance Properties
	@objc var menu: NSMenu { @objc get @objc (setMenu:) set }
	@objc var showsIndicator: Bool { @objc get @objc (setShowsIndicator:) set }

	// Constructors
}

extension NSMenuToolbarItem: NSMenuToolbarItemExports {
}
