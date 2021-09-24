import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSMenuItemExports: JSExport {
	// , NSAccessibilityExports, NSAccessibilityElementExports, NSCodingExports, NSCopyingExports, NSUserInterfaceItemIdentificationExports, NSValidatedUserInterfaceItemExports
	// Static Methods
	// 	@objc (separatorItem) static func isSeparatorItem() -> NSMenuItem

	// Own Static Properties
	@objc static var usesUserKeyEquivalents: Bool { @objc get @objc (setUsesUserKeyEquivalents:) set }

	// Instance Methods

	// Own Instance Properties
	@objc var action: Selector? { @objc get @objc (setAction:) set }
	@objc @available(OSX 10.13, *) var allowsKeyEquivalentWhenHidden: Bool { @objc get @objc (setAllowsKeyEquivalentWhenHidden:) set }
	@objc var isAlternate: Bool { @objc get @objc (setAlternate:) set }
	@objc var attributedTitle: NSAttributedString? { @objc get @objc (setAttributedTitle:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var hasSubmenu: Bool { @objc get }
	@objc @available(OSX 10.5, *) var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc @available(OSX 10.5, *) var isHiddenOrHasHiddenAncestor: Bool { @objc get }
	@objc @available(OSX 10.5, *) var isHighlighted: Bool { @objc get }
	@objc var image: NSImage? { @objc get @objc (setImage:) set }
	@objc var indentationLevel: Int { @objc get @objc (setIndentationLevel:) set }
	@objc var keyEquivalent: String { @objc get @objc (setKeyEquivalent:) set }
	@objc var keyEquivalentModifierMask: NSEvent.ModifierFlags { @objc get @objc (setKeyEquivalentModifierMask:) set }
	@objc var menu: NSMenu? { @objc get @objc (setMenu:) set }
	@objc var mixedStateImage: NSImage! { @objc get @objc (setMixedStateImage:) set }
	@objc var offStateImage: NSImage? { @objc get @objc (setOffStateImage:) set }
	@objc var onStateImage: NSImage! { @objc get @objc (setOnStateImage:) set }
	@objc (parentItem) @available(OSX 10.6, *) var parent: NSMenuItem? { @objc (parentItem) get }
	@objc var representedObject: Any? { @objc get @objc (setRepresentedObject:) set }
	@objc var isSeparatorItem: Bool { @objc get }
	@objc var state: NSControl.StateValue { @objc get @objc (setState:) set }
	@objc var submenu: NSMenu? { @objc get @objc (setSubmenu:) set }
	@objc var tag: Int { @objc get @objc (setTag:) set }
	@objc var target: AnyObject? { @objc get @objc (setTarget:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }
	@objc var toolTip: String? { @objc get @objc (setToolTip:) set }
	@objc var userKeyEquivalent: String { @objc get }
	@objc @available(OSX 10.5, *) var view: NSView? { @objc get @objc (setView:) set }

	// Constructors
	@objc static func create(title: String, action: Selector?, keyEquivalent: String) -> NSMenuItem
}

extension NSMenuItem: NSMenuItemExports {
	@objc class func create(title: String, action: Selector?, keyEquivalent: String) -> NSMenuItem {
		return NSMenuItem(title: title, action: action, keyEquivalent: keyEquivalent)
	}

}
