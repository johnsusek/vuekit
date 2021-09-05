import AppKit
import JavaScriptCore

@objc protocol NSTextFieldExports: JSExport {
	@objc @available(OSX 10.12.2, *) var allowsCharacterPickerTouchBarItem: Bool { @objc get @objc (setAllowsCharacterPickerTouchBarItem:) set }
	@objc @available(OSX 10.11, *) var allowsDefaultTighteningForTruncation: Bool { @objc get @objc (setAllowsDefaultTighteningForTruncation:) set }
	@objc var allowsEditingTextAttributes: Bool { @objc get @objc (setAllowsEditingTextAttributes:) set }
	@objc @available(OSX 10.12.2, *) var isAutomaticTextCompletionEnabled: Bool { @objc get @objc (setAutomaticTextCompletionEnabled:) set }
	@objc var backgroundColor: NSColor? { @objc get @objc (setBackgroundColor:) set }
	@objc var bezelStyle: NSTextField.BezelStyle { @objc get @objc (setBezelStyle:) set }
	@objc var isBezeled: Bool { @objc get @objc (setBezeled:) set }
	@objc var isBordered: Bool { @objc get @objc (setBordered:) set }
	@objc var delegate: NSTextFieldDelegate? { @objc get @objc (setDelegate:) set }
	@objc var drawsBackground: Bool { @objc get @objc (setDrawsBackground:) set }
	@objc var isEditable: Bool { @objc get @objc (setEditable:) set }
	@objc var importsGraphics: Bool { @objc get @objc (setImportsGraphics:) set }
	@objc @available(OSX 10.11, *) var maximumNumberOfLines: Int { @objc get @objc (setMaximumNumberOfLines:) set }
	@objc @available(OSX 10.10, *) var placeholderAttributedString: NSAttributedString? { @objc get @objc (setPlaceholderAttributedString:) set }
	@objc @available(OSX 10.10, *) var placeholderString: String? { @objc get @objc (setPlaceholderString:) set }
	@objc @available(OSX 10.8, *) var preferredMaxLayoutWidth: CGFloat { @objc get @objc (setPreferredMaxLayoutWidth:) set }
	@objc var isSelectable: Bool { @objc get @objc (setSelectable:) set }
	@objc var textColor: NSColor? { @objc get @objc (setTextColor:) set }
	@objc func selectText(_: Any?)
	@objc func textDidBeginEditing(_: Notification)
	@objc func textDidChange(_: Notification)
	@objc func textDidEndEditing(_: Notification)
	@objc func textShouldBeginEditing(_: NSText) -> Bool
	@objc func textShouldEndEditing(_: NSText) -> Bool
	@objc @available(OSX 10.12, *) static func create(labelWithAttributedString: NSAttributedString) -> TextField
	@objc @available(OSX 10.12, *) static func create(labelWithString: String) -> TextField
	@objc @available(OSX 10.12, *) static func create(string: String) -> TextField
	@objc @available(OSX 10.12, *) static func create(wrappingLabelWithString: String) -> TextField
	@objc static func create() -> TextField
}

class TextField: NSTextField, NSTextFieldExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc @available(OSX 10.12, *) class func create(labelWithAttributedString: NSAttributedString) -> TextField {
		return TextField(labelWithAttributedString: labelWithAttributedString)
	}

	@objc @available(OSX 10.12, *) class func create(labelWithString: String) -> TextField {
		return TextField(labelWithString: labelWithString)
	}

	@objc @available(OSX 10.12, *) class func create(string: String) -> TextField {
		return TextField(string: string)
	}

	@objc @available(OSX 10.12, *) class func create(wrappingLabelWithString: String) -> TextField {
		return TextField(wrappingLabelWithString: wrappingLabelWithString)
	}

	@objc override class func create() -> TextField {
		return TextField()
	}
}
