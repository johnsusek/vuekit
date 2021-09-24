import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSColorPanelExports: JSExport, NSPanelExports {
	// Static Methods
	@objc (dragColor:withEvent:fromView:) static func dragColor(_: NSColor, with: NSEvent, from: NSView) -> Bool
	@objc static func setPickerMask(_: NSColorPanel.Options)
	@objc static func setPickerMode(_: NSColorPanel.Mode)

	// Own Static Properties
	@objc (sharedColorPanel) static var shared: NSColorPanel { @objc (sharedColorPanel) get }
	@objc static var sharedColorPanelExists: Bool { @objc get }

	// Instance Methods
	@objc (attachColorList:) func attachColorList(_: NSColorList)
	@objc (detachColorList:) func detachColorList(_: NSColorList)
	@objc func setAction(_: Selector?)
	@objc func setTarget(_: Any?)

	// Own Instance Properties
	@objc var accessoryView: NSView? { @objc get @objc (setAccessoryView:) set }
	@objc var alpha: CGFloat { get }
	@objc var color: NSColor { @objc get @objc (setColor:) set }
	@objc var isContinuous: Bool { @objc get @objc (setContinuous:) set }
	@objc var mode: NSColorPanel.Mode { @objc get @objc (setMode:) set }
	@objc var showsAlpha: Bool { @objc get @objc (setShowsAlpha:) set }

	// Constructors
}

extension NSColorPanel: NSColorPanelExports {
}
