import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSliderExports: JSExport, NSControlExports {
	// , NSAccessibilitySliderExports
	// Static Methods

	// Instance Methods
	@objc (closestTickMarkValueToValue:) func closestTickMarkValue(toValue: Double) -> Double
	@objc (indexOfTickMarkAtPoint:) func indexOfTickMark(at: NSPoint) -> Int
	@objc (rectOfTickMarkAtIndex:) func rectOfTickMark(at: Int) -> NSRect
	@objc (tickMarkValueAtIndex:) func tickMarkValue(at: Int) -> Double

	// Own Instance Properties
	@objc var allowsTickMarkValuesOnly: Bool { @objc get @objc (setAllowsTickMarkValuesOnly:) set }
	@objc var altIncrementValue: Double { @objc get @objc (setAltIncrementValue:) set }
	@objc var knobThickness: CGFloat { get }
	@objc var maxValue: Double { @objc get @objc (setMaxValue:) set }
	@objc var minValue: Double { @objc get @objc (setMinValue:) set }
	@objc var numberOfTickMarks: Int { @objc get @objc (setNumberOfTickMarks:) set }
	@objc @available(OSX 10.10, *) var sliderType: NSSlider.SliderType { @objc get @objc (setSliderType:) set }
	@objc var tickMarkPosition: NSSlider.TickMarkPosition { @objc get @objc (setTickMarkPosition:) set }
	@objc @available(OSX 10.12.2, *) var trackFillColor: NSColor? { @objc get @objc (setTrackFillColor:) set }
	@objc @available(OSX 10.0, *) var isVertical: Bool { @objc get }
}

@objc protocol SliderExports: JSExport, NSControlExports {
	// Constructors
	@objc static func create() -> Slider
}

class Slider: NSSlider, SliderExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> Slider {
		return Slider()
	}

}

extension NSSlider: NSSliderExports {}
