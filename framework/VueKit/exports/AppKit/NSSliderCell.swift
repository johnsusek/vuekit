import AppKit
import JavaScriptCore

@objc protocol NSSliderCellExports: JSExport {
	@objc var allowsTickMarkValuesOnly: Bool { @objc get @objc (setAllowsTickMarkValuesOnly:) set }
	@objc var altIncrementValue: Double { @objc get @objc (setAltIncrementValue:) set }
	@objc var knobThickness: CGFloat { @objc get }
	@objc var maxValue: Double { @objc get @objc (setMaxValue:) set }
	@objc var minValue: Double { @objc get @objc (setMinValue:) set }
	@objc var numberOfTickMarks: Int { @objc get @objc (setNumberOfTickMarks:) set }
	@objc var sliderType: NSSlider.SliderType { @objc get @objc (setSliderType:) set }
	@objc var tickMarkPosition: NSSlider.TickMarkPosition { @objc get @objc (setTickMarkPosition:) set }
	@objc var trackRect: NSRect { @objc get }
	@objc @available(OSX 10.0, *) var isVertical: Bool { @objc get }
	@objc (barRectFlipped:) @available(OSX 10.9, *) func barRect(flipped: Bool) -> NSRect
	@objc (closestTickMarkValueToValue:) func closestTickMarkValue(toValue: Double) -> Double
	@objc (drawBarInside:flipped:) func drawBar(inside: NSRect, flipped: Bool)
	@objc func drawKnob()
	@objc func drawKnob(_: NSRect)
	@objc @available(OSX 10.9, *) func drawTickMarks()
	@objc (indexOfTickMarkAtPoint:) func indexOfTickMark(at: NSPoint) -> Int
	@objc (knobRectFlipped:) func knobRect(flipped: Bool) -> NSRect
	@objc (rectOfTickMarkAtIndex:) func rectOfTickMark(at: Int) -> NSRect
	@objc (tickMarkValueAtIndex:) func tickMarkValue(at: Int) -> Double
}

extension NSSliderCell: NSSliderCellExports {
	@objc override class func create() -> NSSliderCell {
		return NSSliderCell()
	}
}
