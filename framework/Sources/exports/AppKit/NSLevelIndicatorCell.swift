import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSLevelIndicatorCellExports: JSExport, NSActionCellExports {
	// Static Methods

	// Instance Methods
	@objc (rectOfTickMarkAtIndex:) func rectOfTickMark(at: Int) -> NSRect
	@objc (tickMarkValueAtIndex:) func tickMarkValue(at: Int) -> Double

	// Own Instance Properties
	@objc var criticalValue: Double { @objc get @objc (setCriticalValue:) set }
	@objc var levelIndicatorStyle: NSLevelIndicator.Style { @objc get @objc (setLevelIndicatorStyle:) set }
	@objc var maxValue: Double { @objc get @objc (setMaxValue:) set }
	@objc var minValue: Double { @objc get @objc (setMinValue:) set }
	@objc var numberOfMajorTickMarks: Int { @objc get @objc (setNumberOfMajorTickMarks:) set }
	@objc var numberOfTickMarks: Int { @objc get @objc (setNumberOfTickMarks:) set }
	@objc var tickMarkPosition: NSSlider.TickMarkPosition { @objc get @objc (setTickMarkPosition:) set }
	@objc var warningValue: Double { @objc get @objc (setWarningValue:) set }

	// Constructors
	@objc static func create() -> NSLevelIndicatorCell
	@objc static func create(levelIndicatorStyle: NSLevelIndicator.Style) -> NSLevelIndicatorCell
}

extension NSLevelIndicatorCell: NSLevelIndicatorCellExports {
	@objc override class func create() -> NSLevelIndicatorCell {
		return NSLevelIndicatorCell()
	}

	@objc class func create(levelIndicatorStyle: NSLevelIndicator.Style) -> NSLevelIndicatorCell {
		return NSLevelIndicatorCell(levelIndicatorStyle: levelIndicatorStyle)
	}

}
