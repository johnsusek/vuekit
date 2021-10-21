import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSPopoverDelegateExports: JSExport, NSObjectExports {
  @objc (detachableWindowForPopover:) func detachableWindow(`for`: NSPopover) -> NSWindow?
  @objc func popoverDidClose(_: Notification)
  @objc @available(OSX 10.10, *) func popoverDidDetach(_: NSPopover)
  @objc func popoverDidShow(_: Notification)
  @objc func popoverShouldClose(_: NSPopover) -> Bool
  @objc @available(OSX 10.10, *) func popoverShouldDetach(_: NSPopover) -> Bool
  @objc func popoverWillClose(_: Notification)
  @objc func popoverWillShow(_: Notification)
}

