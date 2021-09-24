import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPanelExports: JSExport, NSWindowExports {
	// Static Methods

	// Own Instance Properties
	@objc var becomesKeyOnlyIfNeeded: Bool { @objc get @objc (setBecomesKeyOnlyIfNeeded:) set }
	@objc var isFloatingPanel: Bool { @objc get @objc (setFloatingPanel:) set }
	@objc var worksWhenModal: Bool { @objc get @objc (setWorksWhenModal:) set }

	// Constructors
}

extension NSPanel: NSPanelExports {
}
