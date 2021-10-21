import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityTableExports: JSExport, NSAccessibilityGroupExports {
  @objc func accessibilityColumnHeaderUIElements() -> [Any]?
  @objc func accessibilityColumns() -> [Any]?
  @objc func accessibilityLabel() -> String?
  @objc func accessibilityRowHeaderUIElements() -> [Any]?
  @objc func accessibilityRows() -> [NSAccessibilityRow]?
  @objc func accessibilitySelectedCells() -> [Any]?
  @objc func accessibilitySelectedColumns() -> [Any]?
  @objc func accessibilitySelectedRows() -> [NSAccessibilityRow]?
  @objc func accessibilityVisibleCells() -> [Any]?
  @objc func accessibilityVisibleColumns() -> [Any]?
  @objc func accessibilityVisibleRows() -> [NSAccessibilityRow]?
  @objc func setAccessibilitySelectedRows(_: [NSAccessibilityRow])
}

