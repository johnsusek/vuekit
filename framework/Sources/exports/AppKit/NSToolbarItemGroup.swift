import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSToolbarItemGroupExports: JSExport, NSToolbarItemExports {
	// Static Methods

	// Instance Methods
	@objc (isSelectedAtIndex:) @available(OSX 10.15, *) func isSelected(at: Int) -> Bool
	@objc (setSelected:atIndex:) @available(OSX 10.15, *) func setSelected(_: Bool, at: Int)

	// Own Instance Properties
	@objc @available(OSX 10.15, *) var controlRepresentation: NSToolbarItemGroup.ControlRepresentation { @objc get @objc (setControlRepresentation:) set }
	@objc @available(OSX 10.15, *) var selectedIndex: Int { @objc get @objc (setSelectedIndex:) set }
	@objc @available(OSX 10.15, *) var selectionMode: NSToolbarItemGroup.SelectionMode { @objc get @objc (setSelectionMode:) set }
	@objc var subitems: [NSToolbarItem] { @objc get @objc (setSubitems:) set }

	// Constructors
}

extension NSToolbarItemGroup: NSToolbarItemGroupExports {
}
