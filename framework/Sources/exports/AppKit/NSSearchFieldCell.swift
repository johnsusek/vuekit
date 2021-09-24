import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSearchFieldCellExports: JSExport, NSTextFieldCellExports {
	// Static Methods

	// Instance Methods
	@objc (cancelButtonRectForBounds:) func cancelButtonRect(forBounds: NSRect) -> NSRect
	@objc func resetCancelButtonCell()
	@objc func resetSearchButtonCell()
	@objc (searchButtonRectForBounds:) func searchButtonRect(forBounds: NSRect) -> NSRect
	@objc (searchTextRectForBounds:) func searchTextRect(forBounds: NSRect) -> NSRect

	// Own Instance Properties
	@objc var cancelButtonCell: NSButtonCell? { @objc get @objc (setCancelButtonCell:) set }
	@objc var maximumRecents: Int { @objc get @objc (setMaximumRecents:) set }
	@objc var recentSearches: [String]! { @objc get @objc (setRecentSearches:) set }
	@objc var recentsAutosaveName: NSSearchField.RecentsAutosaveName? { @objc get @objc (setRecentsAutosaveName:) set }
	@objc var searchButtonCell: NSButtonCell? { @objc get @objc (setSearchButtonCell:) set }
	@objc var searchMenuTemplate: NSMenu? { @objc get @objc (setSearchMenuTemplate:) set }
	@objc var sendsSearchStringImmediately: Bool { @objc get @objc (setSendsSearchStringImmediately:) set }
	@objc var sendsWholeSearchString: Bool { @objc get @objc (setSendsWholeSearchString:) set }

	// Constructors
}

extension NSSearchFieldCell: NSSearchFieldCellExports {
}
