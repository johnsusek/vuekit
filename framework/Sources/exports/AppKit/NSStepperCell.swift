import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSStepperCellExports: JSExport, NSActionCellExports {
	// Static Methods

	// Own Instance Properties
	@objc var autorepeat: Bool { @objc get @objc (setAutorepeat:) set }
	@objc var increment: Double { @objc get @objc (setIncrement:) set }
	@objc var maxValue: Double { @objc get @objc (setMaxValue:) set }
	@objc var minValue: Double { @objc get @objc (setMinValue:) set }
	@objc var valueWraps: Bool { @objc get @objc (setValueWraps:) set }

	// Constructors
	@objc static func create() -> NSStepperCell
}

extension NSStepperCell: NSStepperCellExports {
	@objc override class func create() -> NSStepperCell {
		return NSStepperCell()
	}

}
