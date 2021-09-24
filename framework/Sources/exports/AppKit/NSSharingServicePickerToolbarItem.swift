import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSharingServicePickerToolbarItemExports: JSExport, NSToolbarItemExports {
	// Static Methods

	// Own Instance Properties
	@objc var delegate: NSSharingServicePickerToolbarItemDelegate? { @objc get @objc (setDelegate:) set }

	// Constructors
}

extension NSSharingServicePickerToolbarItem: NSSharingServicePickerToolbarItemExports {
}
