import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSComboBoxCellDataSourceExports: JSExport, NSObjectExports {
  @objc (comboBoxCell:objectValueForItemAtIndex:) func comboBoxCell(_: NSComboBoxCell, objectValueForItemAt: Int) -> Any
  @objc func comboBoxCell(_: NSComboBoxCell, completedString: String) -> String?
  @objc func comboBoxCell(_: NSComboBoxCell, indexOfItemWithStringValue: String) -> Int
  @objc (numberOfItemsInComboBoxCell:) func numberOfItems(in: NSComboBoxCell) -> Int
}

