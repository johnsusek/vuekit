import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSDatePickerCellDelegateExports: JSExport, NSObjectExports {
  @objc func datePickerCell(_: NSDatePickerCell, validateProposedDateValue: Date, timeInterval: TimeInterval)
}

