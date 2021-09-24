import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextBlockExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (borderColorForEdge:) func borderColor(`for`: NSRectEdge) -> NSColor?
	@objc (boundsRectForContentRect:inRect:textContainer:characterRange:) func boundsRect(forContentRect: NSRect, in: NSRect, textContainer: NSTextContainer, characterRange: NSRange) -> NSRect
	@objc (drawBackgroundWithFrame:inView:characterRange:layoutManager:) func drawBackground(withFrame: NSRect, in: NSView, characterRange: NSRange, layoutManager: NSLayoutManager)
	@objc (rectForLayoutAtPoint:inRect:textContainer:characterRange:) func rectForLayout(at: NSPoint, in: NSRect, textContainer: NSTextContainer, characterRange: NSRange) -> NSRect
	@objc func setBorderColor(_: NSColor?)
	@objc (setBorderColor:forEdge:) func setBorderColor(_: NSColor?, `for`: NSRectEdge)
	@objc func setContentWidth(_ val: CGFloat, type: NSTextBlock.ValueType)
	@objc (setValue:type:forDimension:) func setValue(_ val: CGFloat, type: NSTextBlock.ValueType, for dimension: NSTextBlock.Dimension)
	@objc (setWidth:type:forLayer:) func setWidth(_ val: CGFloat, type: NSTextBlock.ValueType, for layer: NSTextBlock.Layer)
	@objc (setWidth:type:forLayer:edge:) func setWidth(_ val: CGFloat, type: NSTextBlock.ValueType, for layer: NSTextBlock.Layer, edge: NSRectEdge)
	@objc (valueForDimension:) func value(`for`: NSTextBlock.Dimension) -> CGFloat
	@objc (valueTypeForDimension:) func valueType(`for`: NSTextBlock.Dimension) -> NSTextBlock.ValueType
	@objc (widthForLayer:edge:) func width(`for`: NSTextBlock.Layer, edge: NSRectEdge) -> CGFloat
	@objc (widthValueTypeForLayer:edge:) func widthValueType(`for`: NSTextBlock.Layer, edge: NSRectEdge) -> NSTextBlock.ValueType

	// Own Instance Properties
	@objc var backgroundColor: NSColor? { @objc get @objc (setBackgroundColor:) set }
	@objc var contentWidth: CGFloat { get }
	@objc var contentWidthValueType: NSTextBlock.ValueType { @objc get }
	@objc var verticalAlignment: NSTextBlock.VerticalAlignment { @objc get @objc (setVerticalAlignment:) set }

	// Constructors
}

extension NSTextBlock: NSTextBlockExports {
}
