import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSLevelIndicatorExports: JSExport, NSControlExports {
	// Static Methods

	// Instance Methods
	@objc (rectOfTickMarkAtIndex:) func rectOfTickMark(at: Int) -> NSRect
	@objc (tickMarkValueAtIndex:) func tickMarkValue(at: Int) -> Double

	// Own Instance Properties
	@objc @available(OSX 10.13, *) var criticalFillColor: NSColor! { @objc get @objc (setCriticalFillColor:) set }
	@objc var criticalValue: Double { @objc get @objc (setCriticalValue:) set }
	@objc @available(OSX 10.13, *) var drawsTieredCapacityLevels: Bool { @objc get @objc (setDrawsTieredCapacityLevels:) set }
	@objc @available(OSX 10.13, *) var isEditable: Bool { @objc get @objc (setEditable:) set }
	@objc @available(OSX 10.13, *) var fillColor: NSColor! { @objc get @objc (setFillColor:) set }
	@objc @available(OSX 10.10, *) var levelIndicatorStyle: NSLevelIndicator.Style { @objc get @objc (setLevelIndicatorStyle:) set }
	@objc var maxValue: Double { @objc get @objc (setMaxValue:) set }
	@objc var minValue: Double { @objc get @objc (setMinValue:) set }
	@objc var numberOfMajorTickMarks: Int { @objc get @objc (setNumberOfMajorTickMarks:) set }
	@objc var numberOfTickMarks: Int { @objc get @objc (setNumberOfTickMarks:) set }
	@objc @available(OSX 10.13, *) var placeholderVisibility: NSLevelIndicator.PlaceholderVisibility { @objc get @objc (setPlaceholderVisibility:) set }
	@objc @available(OSX 10.13, *) var ratingImage: NSImage? { @objc get @objc (setRatingImage:) set }
	@objc @available(OSX 10.13, *) var ratingPlaceholderImage: NSImage? { @objc get @objc (setRatingPlaceholderImage:) set }
	@objc var tickMarkPosition: NSSlider.TickMarkPosition { @objc get @objc (setTickMarkPosition:) set }
	@objc @available(OSX 10.13, *) var warningFillColor: NSColor! { @objc get @objc (setWarningFillColor:) set }
	@objc var warningValue: Double { @objc get @objc (setWarningValue:) set }
}

@objc protocol LevelIndicatorExports: JSExport, NSControlExports {
	// Constructors
	@objc static func create() -> LevelIndicator
}

class LevelIndicator: NSLevelIndicator, LevelIndicatorExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> LevelIndicator {
		return LevelIndicator()
	}

}

extension NSLevelIndicator: NSLevelIndicatorExports {}
