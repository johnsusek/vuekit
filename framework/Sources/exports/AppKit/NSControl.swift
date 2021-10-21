import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSControlExports: JSExport, NSViewExports {
	// Static Methods

	// Own Static Properties
	@objc static var cellClass: AnyClass? { @objc get @objc (setCellClass:) set }

	// Instance Methods
	@objc func abortEditing() -> Bool
	@objc func currentEditor() -> NSText?
	@objc func drawCell(_: NSCell)
	@objc (drawCellInside:) func drawCellInside(_: NSCell)
	@objc (drawWithExpansionFrame:inView:) @available(OSX 10.10, *) func draw(withExpansionFrame: NSRect, in: NSView)
	@objc (editWithFrame:editor:delegate:event:) @available(OSX 10.10, *) func edit(withFrame: NSRect, editor: NSText, delegate: Any?, event: NSEvent)
	@objc @available(OSX 10.10, *) func endEditing(_: NSText)
	@objc (expansionFrameWithFrame:) @available(OSX 10.10, *) func expansionFrame(withFrame: NSRect) -> NSRect
	@objc (invalidateIntrinsicContentSizeForCell:) @available(OSX 10.7, *) func invalidateIntrinsicContentSize(`for`: NSCell)
	@objc func performClick(_: Any?)
	@objc func selectCell(_: NSCell)
	@objc (selectWithFrame:editor:delegate:start:length:) @available(OSX 10.10, *) func select(withFrame: NSRect, editor: NSText, delegate: Any?, start: Int, length: Int)
	@objc func selectedCell() -> NSCell?
	@objc func selectedTag() -> Int
	@objc func sendAction(_: Selector?, to: Any?) -> Bool
	@objc (sendActionOn:) func sendAction(on: NSEvent.EventTypeMask) -> Int
	@objc @available(OSX 10.10, *) func sizeThatFits(_: NSSize) -> NSSize
	@objc func sizeToFit()
	@objc func takeDoubleValueFrom(_: Any?)
	@objc func takeFloatValueFrom(_: Any?)
	@objc func takeIntValueFrom(_: Any?)
	@objc @available(OSX 10.5, *) func takeIntegerValueFrom(_: Any?)
	@objc func takeObjectValueFrom(_: Any?)
	@objc func takeStringValueFrom(_: Any?)
	@objc func updateCell(_: NSCell)
	@objc (updateCellInside:) func updateCellInside(_: NSCell)
	@objc func validateEditing()

	// Own Instance Properties
	@objc var action: Selector? { @objc get @objc (setAction:) set }
	@objc var alignment: NSTextAlignment { @objc get @objc (setAlignment:) set }
	@objc @available(OSX 10.8, *) var allowsExpansionToolTips: Bool { @objc get @objc (setAllowsExpansionToolTips:) set }
	@objc var attributedStringValue: NSAttributedString { @objc get @objc (setAttributedStringValue:) set }
	@objc var baseWritingDirection: NSWritingDirection { @objc get @objc (setBaseWritingDirection:) set }
	@objc var cell: NSCell? { @objc get @objc (setCell:) set }
	@objc var isContinuous: Bool { @objc get @objc (setContinuous:) set }
	@objc @available(OSX 10.10, *) var controlSize: NSControl.ControlSize { @objc get @objc (setControlSize:) set }
	@objc var doubleValue: Double { @objc get @objc (setDoubleValue:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var floatValue: Float { @objc get @objc (setFloatValue:) set }
	@objc var font: NSFont? { @objc get @objc (setFont:) set }
	@objc var formatter: Formatter? { @objc get @objc (setFormatter:) set }
	@objc @available(OSX 10.10, *) var isHighlighted: Bool { @objc get @objc (setHighlighted:) set }
	@objc var ignoresMultiClick: Bool { @objc get @objc (setIgnoresMultiClick:) set }
	@objc var intValue: Int32 { get set }
	@objc var integerValue: Int { @objc get @objc (setIntegerValue:) set }
	@objc @available(OSX 10.10, *) var lineBreakMode: NSLineBreakMode { @objc get @objc (setLineBreakMode:) set }
	@objc var objectValue: Any? { @objc get @objc (setObjectValue:) set }
	@objc var refusesFirstResponder: Bool { @objc get @objc (setRefusesFirstResponder:) set }
	@objc var stringValue: String { @objc get @objc (setStringValue:) set }
	@objc var tag: Int { @objc get @objc (setTag:) set }
	@objc var target: AnyObject? { @objc get @objc (setTarget:) set }
	@objc @available(OSX 10.10, *) var usesSingleLineMode: Bool { @objc get @objc (setUsesSingleLineMode:) set }
}

@objc protocol ControlExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> Control
}

class Control: NSControl, ControlExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> Control {
		return Control()
	}

}

extension NSControl: NSControlExports {}
