import AppKit
import JavaScriptCore

@objc protocol NSButtonCellExports: JSExport {
	@objc var alternateImage: NSImage? { @objc get @objc (setAlternateImage:) set }
	@objc var alternateTitle: String { @objc get @objc (setAlternateTitle:) set }
	@objc var attributedAlternateTitle: NSAttributedString { @objc get @objc (setAttributedAlternateTitle:) set }
	@objc var attributedTitle: NSAttributedString { @objc get @objc (setAttributedTitle:) set }
	@objc var backgroundColor: NSColor? { @objc get @objc (setBackgroundColor:) set }
	@objc var bezelStyle: NSButton.BezelStyle { @objc get @objc (setBezelStyle:) set }
	@objc var highlightsBy: NSCell.StyleMask { @objc get @objc (setHighlightsBy:) set }
	@objc var imageDimsWhenDisabled: Bool { @objc get @objc (setImageDimsWhenDisabled:) set }
	@objc var imagePosition: NSControl.ImagePosition { @objc get @objc (setImagePosition:) set }
	@objc @available(OSX 10.5, *) var imageScaling: NSImageScaling { @objc get @objc (setImageScaling:) set }
	@objc var keyEquivalent: String { @objc get @objc (setKeyEquivalent:) set }
	@objc var keyEquivalentModifierMask: NSEvent.ModifierFlags { @objc get @objc (setKeyEquivalentModifierMask:) set }
	@objc var showsBorderOnlyWhileMouseInside: Bool { @objc get @objc (setShowsBorderOnlyWhileMouseInside:) set }
	@objc var showsStateBy: NSCell.StyleMask { @objc get @objc (setShowsStateBy:) set }
	@objc var sound: NSSound? { @objc get @objc (setSound:) set }
	@objc var isTransparent: Bool { @objc get @objc (setTransparent:) set }
	@objc (drawBezelWithFrame:inView:) func drawBezel(withFrame: NSRect, in: NSView)
	@objc (drawImage:withFrame:inView:) func drawImage(_: NSImage, withFrame: NSRect, in: NSView)
	@objc (drawTitle:withFrame:inView:) func drawTitle(_: NSAttributedString, withFrame: NSRect, in: NSView) -> NSRect
	@objc (mouseEntered:) func mouseEntered(with: NSEvent)
	@objc (mouseExited:) func mouseExited(with: NSEvent)
	@objc func setButtonType(_: NSButton.ButtonType)
	@objc func setPeriodicDelay(_: Float, interval: Float)
}

extension NSButtonCell: NSButtonCellExports {
	@objc override class func create() -> NSButtonCell {
		return NSButtonCell()
	}
}
