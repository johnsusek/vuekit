import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSToolbarDelegateExports: JSExport, NSObjectExports {
  @objc func toolbar(_: NSToolbar, itemForItemIdentifier: NSToolbarItem.Identifier, willBeInsertedIntoToolbar: Bool) -> NSToolbarItem?
  @objc func toolbarAllowedItemIdentifiers(_: NSToolbar) -> [String]
  @objc func toolbarDefaultItemIdentifiers(_: NSToolbar) -> [String]
  @objc func toolbarDidRemoveItem(_: Notification)
  @objc func toolbarSelectableItemIdentifiers(_: NSToolbar) -> [String]
  @objc func toolbarWillAddItem(_: Notification)
}

