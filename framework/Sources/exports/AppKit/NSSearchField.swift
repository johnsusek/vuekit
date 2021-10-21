import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSearchFieldExports: JSExport, NSTextFieldExports {
	// Static Methods

	// Own Instance Properties
	@objc @available(OSX 10.11, *) var delegate: NSSearchFieldDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.10, *) var maximumRecents: Int { @objc get @objc (setMaximumRecents:) set }
	@objc var recentSearches: [String] { @objc get @objc (setRecentSearches:) set }
	@objc var recentsAutosaveName: NSSearchField.RecentsAutosaveName? { @objc get @objc (setRecentsAutosaveName:) set }
	@objc @available(OSX 10.10, *) var searchMenuTemplate: NSMenu? { @objc get @objc (setSearchMenuTemplate:) set }
	@objc @available(OSX 10.10, *) var sendsSearchStringImmediately: Bool { @objc get @objc (setSendsSearchStringImmediately:) set }
	@objc @available(OSX 10.10, *) var sendsWholeSearchString: Bool { @objc get @objc (setSendsWholeSearchString:) set }
}

@objc protocol SearchFieldExports: JSExport, NSTextFieldExports {
	// Constructors
	@objc static func create() -> SearchField
}

class SearchField: NSSearchField, SearchFieldExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> SearchField {
		return SearchField()
	}

}

extension NSSearchField: NSSearchFieldExports {}
