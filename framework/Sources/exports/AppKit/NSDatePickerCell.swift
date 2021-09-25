import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSDatePickerCellExports: JSExport, NSActionCellExports {
	// Static Methods

	// Own Instance Properties
	@objc var backgroundColor: NSColor { @objc get @objc (setBackgroundColor:) set }
	@objc var calendar: Calendar? { get set }
	@objc var datePickerElements: NSDatePicker.ElementFlags { @objc get @objc (setDatePickerElements:) set }
	@objc var datePickerMode: NSDatePicker.Mode { @objc get @objc (setDatePickerMode:) set }
	@objc var datePickerStyle: NSDatePicker.Style { @objc get @objc (setDatePickerStyle:) set }
	@objc var dateValue: Date { @objc get @objc (setDateValue:) set }
	@objc var delegate: NSDatePickerCellDelegate? { @objc get @objc (setDelegate:) set }
	@objc var drawsBackground: Bool { @objc get @objc (setDrawsBackground:) set }
	@objc var locale: Locale? { @objc get @objc (setLocale:) set }
	@objc var maxDate: Date? { @objc get @objc (setMaxDate:) set }
	@objc var minDate: Date? { @objc get @objc (setMinDate:) set }
	@objc var textColor: NSColor { @objc get @objc (setTextColor:) set }
	@objc var timeInterval: TimeInterval { @objc get @objc (setTimeInterval:) set }
	@objc var timeZone: TimeZone? { get set }

	// Constructors
	@objc static func create() -> NSDatePickerCell
}

extension NSDatePickerCell: NSDatePickerCellExports {
	@objc override class func create() -> NSDatePickerCell {
		return NSDatePickerCell()
	}

}
