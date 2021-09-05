import AppKit
import JavaScriptCore

@objc protocol NSTextBlockExports: JSExport {
	@objc var backgroundColor: NSColor? { @objc get @objc (setBackgroundColor:) set }
	@objc var contentWidth: CGFloat { @objc get }
	@objc var contentWidthValueType: NSTextBlock.ValueType { @objc get }
	@objc var verticalAlignment: NSTextBlock.VerticalAlignment { @objc get @objc (setVerticalAlignment:) set }
	@objc (borderColorForEdge:) func borderColor(`for`: NSRectEdge) -> NSColor?
	@objc (boundsRectForContentRect:inRect:textContainer:characterRange:) func boundsRect(forContentRect: NSRect, in: NSRect, textContainer: NSTextContainer, characterRange: NSRange) -> NSRect
	@objc (drawBackgroundWithFrame:inView:characterRange:layoutManager:) func drawBackground(withFrame: NSRect, in: NSView, characterRange: NSRange, layoutManager: NSLayoutManager)
	@objc (rectForLayoutAtPoint:inRect:textContainer:characterRange:) func rectForLayout(at: NSPoint, in: NSRect, textContainer: NSTextContainer, characterRange: NSRange) -> NSRect
	@objc func setBorderColor(_: NSColor?)
	@objc (setBorderColor:forEdge:) func setBorderColor(_: NSColor?, `for`: NSRectEdge)
	@objc func setContentWidth(_: CGFloat, type: NSTextBlock.ValueType)
	@objc (setValue:type:forDimension:) func setValue(_: CGFloat, type: NSTextBlock.ValueType, `for`: NSTextBlock.Dimension)
	@objc (setWidth:type:forLayer:) func setWidth(_: CGFloat, type: NSTextBlock.ValueType, `for`: NSTextBlock.Layer)
	@objc (setWidth:type:forLayer:edge:) func setWidth(_: CGFloat, type: NSTextBlock.ValueType, `for`: NSTextBlock.Layer, edge: NSRectEdge)
	@objc (valueForDimension:) func value(`for`: NSTextBlock.Dimension) -> CGFloat
	@objc (valueTypeForDimension:) func valueType(`for`: NSTextBlock.Dimension) -> NSTextBlock.ValueType
	@objc (widthForLayer:edge:) func width(`for`: NSTextBlock.Layer, edge: NSRectEdge) -> CGFloat
	@objc (widthValueTypeForLayer:edge:) func widthValueType(`for`: NSTextBlock.Layer, edge: NSRectEdge) -> NSTextBlock.ValueType
}

extension NSTextBlock: NSTextBlockExports {
	@objc override class func create() -> NSTextBlock {
		return NSTextBlock()
	}
}
