import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSFontPanelExports: JSExport, NSPanelExports {
	// Static Methods

	// Own Static Properties
	@objc (sharedFontPanel) static var shared: NSFontPanel { @objc (sharedFontPanel) get }
	@objc static var sharedFontPanelExists: Bool { @objc get }

	// Instance Methods
	@objc (panelConvertFont:) func convert(_: NSFont) -> NSFont
	@objc func reloadDefaultFontFamilies()
	@objc func setPanelFont(_: NSFont, isMultiple: Bool)

	// Own Instance Properties
	@objc var accessoryView: NSView? { @objc get @objc (setAccessoryView:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }

	// Constructors
}

extension NSFontPanel: NSFontPanelExports {
}
