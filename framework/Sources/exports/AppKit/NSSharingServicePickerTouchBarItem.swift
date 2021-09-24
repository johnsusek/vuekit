import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSharingServicePickerTouchBarItemExports: JSExport, NSTouchBarItemExports {
	// Static Methods

	// Own Instance Properties
	@objc var buttonImage: NSImage? { @objc get @objc (setButtonImage:) set }
	@objc var buttonTitle: String { @objc get @objc (setButtonTitle:) set }
	@objc var delegate: NSSharingServicePickerTouchBarItemDelegate? { @objc get @objc (setDelegate:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }

	// Constructors
}

extension NSSharingServicePickerTouchBarItem: NSSharingServicePickerTouchBarItemExports {
}
