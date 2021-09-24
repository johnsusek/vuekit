import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCellExports: JSExport {
	// , NSAccessibilityExports, NSAccessibilityElementExports, NSCodingExports, NSCopyingExports, NSUserInterfaceItemIdentificationExports
	// Static Methods

	// Own Static Properties
	@objc static var defaultFocusRingType: NSFocusRingType { @objc get }
	@objc static var defaultMenu: NSMenu? { @objc get }
	@objc static var prefersTrackingUntilMouseUp: Bool { @objc get }

	// Instance Methods
	@objc func calcDrawInfo(_: NSRect)
	@objc func cellAttribute(_: NSCell.Attribute) -> Int
	@objc (cellSizeForBounds:) func cellSize(forBounds: NSRect) -> NSSize
	@objc func compare(_: Any) -> ComparisonResult
	@objc (continueTracking:at:inView:) func continueTracking(last: NSPoint, current: NSPoint, in: NSView) -> Bool
	@objc (draggingImageComponentsWithFrame:inView:) @available(OSX 10.7, *) func draggingImageComponents(withFrame: NSRect, in: NSView) -> [NSDraggingImageComponent]
	@objc (drawFocusRingMaskWithFrame:inView:) @available(OSX 10.7, *) func drawFocusRingMask(withFrame: NSRect, in: NSView)
	@objc (drawInteriorWithFrame:inView:) func drawInterior(withFrame: NSRect, in: NSView)
	@objc (drawWithExpansionFrame:inView:) @available(OSX 10.5, *) func draw(withExpansionFrame: NSRect, in: NSView)
	@objc (drawWithFrame:inView:) func draw(withFrame: NSRect, in: NSView)
	@objc (drawingRectForBounds:) func drawingRect(forBounds: NSRect) -> NSRect
	@objc (editWithFrame:inView:editor:delegate:event:) func edit(withFrame: NSRect, in: NSView, editor: NSText, delegate: Any?, event: NSEvent?)
	@objc func endEditing(_: NSText)
	@objc (expansionFrameWithFrame:inView:) @available(OSX 10.5, *) func expansionFrame(withFrame: NSRect, in: NSView) -> NSRect
	@objc (fieldEditorForView:) @available(OSX 10.6, *) func fieldEditor(`for`: NSView) -> NSTextView?
	@objc (focusRingMaskBoundsForFrame:inView:) @available(OSX 10.7, *) func focusRingMaskBounds(forFrame: NSRect, in: NSView) -> NSRect
	@objc func getPeriodicDelay(_ delay: UnsafeMutablePointer<Float>, interval: UnsafeMutablePointer<Float>)
	@objc (highlight:withFrame:inView:) func highlight(_: Bool, withFrame: NSRect, in: NSView)
	@objc (highlightColorWithFrame:inView:) func highlightColor(withFrame: NSRect, in: NSView) -> NSColor?
	@objc (hitTestForEvent:inRect:ofView:) @available(OSX 10.5, *) func hitTest(`for`: NSEvent, in: NSRect, of: NSView) -> NSCell.HitResult
	@objc (imageRectForBounds:) func imageRect(forBounds: NSRect) -> NSRect
	@objc (menuForEvent:inRect:ofView:) func menu(`for`: NSEvent, in: NSRect, of: NSView) -> NSMenu?
	@objc func performClick(_: Any?)
	@objc (resetCursorRect:inView:) func resetCursorRect(_: NSRect, in: NSView)
	@objc (selectWithFrame:inView:editor:delegate:start:length:) func select(withFrame: NSRect, in: NSView, editor: NSText, delegate: Any?, start: Int, length: Int)
	@objc (sendActionOn:) func sendAction(on: NSEvent.EventTypeMask) -> Int
	@objc func setCellAttribute(_: NSCell.Attribute, to: Int)
	@objc func setNextState()
	@objc func setUpFieldEditorAttributes(_: NSText) -> NSText
	@objc (startTrackingAt:inView:) func startTracking(at: NSPoint, in: NSView) -> Bool
	@objc (stopTracking:at:inView:mouseIsUp:) func stopTracking(last: NSPoint, current: NSPoint, in: NSView, mouseIsUp: Bool)
	@objc func takeDoubleValueFrom(_: Any?)
	@objc func takeFloatValueFrom(_: Any?)
	@objc func takeIntValueFrom(_: Any?)
	@objc @available(OSX 10.5, *) func takeIntegerValueFrom(_: Any?)
	@objc func takeObjectValueFrom(_: Any?)
	@objc func takeStringValueFrom(_: Any?)
	@objc (titleRectForBounds:) func titleRect(forBounds: NSRect) -> NSRect
	@objc (trackMouse:inRect:ofView:untilMouseUp:) func trackMouse(with: NSEvent, in: NSRect, of: NSView, untilMouseUp: Bool) -> Bool

	// Own Instance Properties
	@objc var acceptsFirstResponder: Bool { @objc get }
	@objc var action: Selector? { @objc get @objc (setAction:) set }
	@objc var alignment: NSTextAlignment { @objc get @objc (setAlignment:) set }
	@objc var allowsEditingTextAttributes: Bool { @objc get @objc (setAllowsEditingTextAttributes:) set }
	@objc var allowsMixedState: Bool { @objc get @objc (setAllowsMixedState:) set }
	@objc var allowsUndo: Bool { @objc get @objc (setAllowsUndo:) set }
	@objc var attributedStringValue: NSAttributedString { @objc get @objc (setAttributedStringValue:) set }
	@objc @available(OSX 10.5, *) var backgroundStyle: NSView.BackgroundStyle { @objc get @objc (setBackgroundStyle:) set }
	@objc var baseWritingDirection: NSWritingDirection { @objc get @objc (setBaseWritingDirection:) set }
	@objc var isBezeled: Bool { @objc get @objc (setBezeled:) set }
	@objc var isBordered: Bool { @objc get @objc (setBordered:) set }
	@objc var cellSize: NSSize { @objc get }
	@objc var isContinuous: Bool { @objc get @objc (setContinuous:) set }
	@objc var controlSize: NSControl.ControlSize { @objc get @objc (setControlSize:) set }
	@objc var controlView: NSView? { @objc get @objc (setControlView:) set }
	@objc var doubleValue: Double { @objc get @objc (setDoubleValue:) set }
	@objc var isEditable: Bool { @objc get @objc (setEditable:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var floatValue: Float { @objc get @objc (setFloatValue:) set }
	@objc var focusRingType: NSFocusRingType { @objc get @objc (setFocusRingType:) set }
	@objc var font: NSFont? { @objc get @objc (setFont:) set }
	@objc var formatter: Formatter? { @objc get @objc (setFormatter:) set }
	@objc var hasValidObjectValue: Bool { @objc get }
	@objc var isHighlighted: Bool { @objc get @objc (setHighlighted:) set }
	@objc var image: NSImage? { @objc get @objc (setImage:) set }
	@objc var importsGraphics: Bool { @objc get @objc (setImportsGraphics:) set }
	@objc var intValue: Int32 { get set }
	@objc @available(OSX 10.5, *) var integerValue: Int { @objc get @objc (setIntegerValue:) set }
	@objc @available(OSX 10.5, *) var interiorBackgroundStyle: NSView.BackgroundStyle { @objc get }
	@objc var keyEquivalent: String { @objc get }
	@objc var lineBreakMode: NSLineBreakMode { @objc get @objc (setLineBreakMode:) set }
	@objc var menu: NSMenu? { @objc get @objc (setMenu:) set }
	@objc var mouseDownFlags: Int { @objc get }
	@objc var nextState: Int { @objc get }
	@objc var objectValue: Any? { @objc get @objc (setObjectValue:) set }
	@objc var isOpaque: Bool { @objc get }
	@objc var refusesFirstResponder: Bool { @objc get @objc (setRefusesFirstResponder:) set }
	@objc var representedObject: Any? { @objc get @objc (setRepresentedObject:) set }
	@objc var isScrollable: Bool { @objc get @objc (setScrollable:) set }
	@objc var isSelectable: Bool { @objc get @objc (setSelectable:) set }
	@objc var sendsActionOnEndEditing: Bool { @objc get @objc (setSendsActionOnEndEditing:) set }
	@objc var showsFirstResponder: Bool { @objc get @objc (setShowsFirstResponder:) set }
	@objc var state: NSControl.StateValue { @objc get @objc (setState:) set }
	@objc var stringValue: String { @objc get @objc (setStringValue:) set }
	@objc var tag: Int { @objc get @objc (setTag:) set }
	@objc var target: AnyObject? { @objc get @objc (setTarget:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }
	@objc @available(OSX 10.5, *) var truncatesLastVisibleLine: Bool { @objc get @objc (setTruncatesLastVisibleLine:) set }
	@objc var type: NSCell.CellType { @objc get @objc (setType:) set }
	@objc @available(OSX 10.6, *) var userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection { @objc get @objc (setUserInterfaceLayoutDirection:) set }
	@objc @available(OSX 10.6, *) var usesSingleLineMode: Bool { @objc get @objc (setUsesSingleLineMode:) set }
	@objc var wantsNotificationForMarkedText: Bool { @objc get }
	@objc var wraps: Bool { @objc get @objc (setWraps:) set }

	// Constructors
	@objc static func create(imageCell: NSImage?) -> NSCell
	@objc static func create(textCell: String) -> NSCell
}

extension NSCell: NSCellExports {
	@objc class func create(imageCell: NSImage?) -> NSCell {
		return NSCell(imageCell: imageCell)
	}

	@objc class func create(textCell: String) -> NSCell {
		return NSCell(textCell: textCell)
	}

}
