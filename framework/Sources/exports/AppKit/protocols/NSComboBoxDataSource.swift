import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSComboBoxDataSourceExports: JSExport, NSObjectExports {
  @objc (comboBox:objectValueForItemAtIndex:) func comboBox(_: NSComboBox, objectValueForItemAt: Int) -> Any?
  @objc func comboBox(_: NSComboBox, completedString: String) -> String?
  @objc func comboBox(_: NSComboBox, indexOfItemWithStringValue: String) -> Int
  @objc (numberOfItemsInComboBox:) func numberOfItems(in: NSComboBox) -> Int
}

