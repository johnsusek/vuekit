import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTokenFieldCellDelegateExports: JSExport, NSObjectExports {
  @objc (tokenFieldCell:shouldAddObjects:atIndex:) func tokenFieldCell(_: NSTokenFieldCell, shouldAdd: [Any], at: Int) -> [Any]
  @objc (tokenFieldCell:representedObjectForEditingString:) func tokenFieldCell(_: NSTokenFieldCell, representedObjectForEditing: String) -> Any?
  @objc (tokenFieldCell:writeRepresentedObjects:toPasteboard:) func tokenFieldCell(_: NSTokenFieldCell, writeRepresentedObjects: [Any], to: NSPasteboard) -> Bool
  @objc (tokenFieldCell:readFromPasteboard:) func tokenFieldCell(_: NSTokenFieldCell, readFrom: NSPasteboard) -> [Any]?
  @objc func tokenFieldCell(_: NSTokenFieldCell, completionsForSubstring: String, indexOfToken: Int, indexOfSelectedItem: Int) -> [Any]
  @objc func tokenFieldCell(_: NSTokenFieldCell, displayStringForRepresentedObject: Any) -> String?
  @objc func tokenFieldCell(_: NSTokenFieldCell, editingStringForRepresentedObject: Any) -> String?
  @objc func tokenFieldCell(_: NSTokenFieldCell, hasMenuForRepresentedObject: Any) -> Bool
  @objc func tokenFieldCell(_: NSTokenFieldCell, menuForRepresentedObject: Any) -> NSMenu?
  @objc func tokenFieldCell(_: NSTokenFieldCell, styleForRepresentedObject: Any) -> NSTokenField.TokenStyle
}

