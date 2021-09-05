import AppKit
import JavaScriptCore

@objc protocol NSStepperCellExports: JSExport {
	@objc var autorepeat: Bool { @objc get @objc (setAutorepeat:) set }
	@objc var increment: Double { @objc get @objc (setIncrement:) set }
	@objc var maxValue: Double { @objc get @objc (setMaxValue:) set }
	@objc var minValue: Double { @objc get @objc (setMinValue:) set }
	@objc var valueWraps: Bool { @objc get @objc (setValueWraps:) set }
}

extension NSStepperCell: NSStepperCellExports {
	@objc override class func create() -> NSStepperCell {
		return NSStepperCell()
	}
}
