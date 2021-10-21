import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSMenuDelegateExports: JSExport, NSObjectExports {
  @objc (confinementRectForMenu:onScreen:) @available(OSX 10.6, *) func confinementRect(`for`: NSMenu, on: NSScreen?) -> NSRect
  @objc (menu:updateItem:atIndex:shouldCancel:) func menu(_: NSMenu, update: NSMenuItem, at: Int, shouldCancel: Bool) -> Bool
  @objc (menu:willHighlightItem:) @available(OSX 10.5, *) func menu(_: NSMenu, willHighlight: NSMenuItem?)
  @objc @available(OSX 10.5, *) func menuDidClose(_: NSMenu)
  @objc (menuHasKeyEquivalent:forEvent:target:action:) func menuHasKeyEquivalent(_: NSMenu, `for`: NSEvent, target: Any, action: String) -> Bool
  @objc func menuNeedsUpdate(_: NSMenu)
  @objc @available(OSX 10.5, *) func menuWillOpen(_: NSMenu)
  @objc (numberOfItemsInMenu:) func numberOfItems(in: NSMenu) -> Int
}

