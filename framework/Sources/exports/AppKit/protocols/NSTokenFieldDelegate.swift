import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTokenFieldDelegateExports: JSExport, NSTextFieldDelegateExports {
  @objc (tokenField:shouldAddObjects:atIndex:) func tokenField(_: NSTokenField, shouldAdd: [Any], at: Int) -> [Any]
  @objc (tokenField:representedObjectForEditingString:) func tokenField(_: NSTokenField, representedObjectForEditing: String) -> Any?
  @objc (tokenField:writeRepresentedObjects:toPasteboard:) func tokenField(_: NSTokenField, writeRepresentedObjects: [Any], to: NSPasteboard) -> Bool
  @objc (tokenField:readFromPasteboard:) func tokenField(_: NSTokenField, readFrom: NSPasteboard) -> [Any]?
  @objc func tokenField(_: NSTokenField, completionsForSubstring: String, indexOfToken: Int, indexOfSelectedItem: Int) -> [Any]?
  @objc func tokenField(_: NSTokenField, displayStringForRepresentedObject: Any) -> String?
  @objc func tokenField(_: NSTokenField, editingStringForRepresentedObject: Any) -> String?
  @objc func tokenField(_: NSTokenField, hasMenuForRepresentedObject: Any) -> Bool
  @objc func tokenField(_: NSTokenField, menuForRepresentedObject: Any) -> NSMenu?
  @objc func tokenField(_: NSTokenField, styleForRepresentedObject: Any) -> NSTokenField.TokenStyle
}

