import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSWindowDelegateExports: JSExport, NSObjectExports {
  @objc (customWindowsToEnterFullScreenForWindow:) @available(OSX 10.7, *) func customWindowsToEnterFullScreen(`for`: NSWindow) -> [NSWindow]?
  @objc (customWindowsToEnterFullScreenForWindow:onScreen:) @available(OSX 10.9, *) func customWindowsToEnterFullScreen(`for`: NSWindow, on: NSScreen) -> [NSWindow]?
  @objc (customWindowsToExitFullScreenForWindow:) @available(OSX 10.7, *) func customWindowsToExitFullScreen(`for`: NSWindow) -> [NSWindow]?
  @objc (window:willPositionSheet:usingRect:) func window(_: NSWindow, willPositionSheet: NSWindow, using: NSRect) -> NSRect
  @objc (window:shouldDragDocumentWithEvent:from:withPasteboard:) @available(OSX 10.5, *) func window(_: NSWindow, shouldDragDocumentWith: NSEvent, from: NSPoint, with: NSPasteboard) -> Bool
  @objc (window:startCustomAnimationToEnterFullScreenOnScreen:withDuration:) @available(OSX 10.9, *) func window(_: NSWindow, startCustomAnimationToEnterFullScreenOn: NSScreen, withDuration: TimeInterval)
  @objc @available(OSX 10.7, *) func window(_: NSWindow, didDecodeRestorableState: NSCoder)
  @objc @available(OSX 10.5, *) func window(_: NSWindow, shouldPopUpDocumentPathMenu: NSMenu) -> Bool
  @objc @available(OSX 10.7, *) func window(_: NSWindow, startCustomAnimationToEnterFullScreenWithDuration: TimeInterval)
  @objc @available(OSX 10.7, *) func window(_: NSWindow, startCustomAnimationToExitFullScreenWithDuration: TimeInterval)
  @objc @available(OSX 10.7, *) func window(_: NSWindow, willEncodeRestorableState: NSCoder)
  @objc @available(OSX 10.7, *) func window(_: NSWindow, willResizeForVersionBrowserWithMaxPreferredSize: NSSize, maxAllowedSize: NSSize) -> NSSize
  @objc @available(OSX 10.7, *) func window(_: NSWindow, willUseFullScreenContentSize: NSSize) -> NSSize
  @objc @available(OSX 10.7, *) func window(_: NSWindow, willUseFullScreenPresentationOptions: NSApplication.PresentationOptions) -> NSApplication.PresentationOptions
  @objc func windowDidBecomeKey(_: Notification)
  @objc func windowDidBecomeMain(_: Notification)
  @objc @available(OSX 10.7, *) func windowDidChangeBackingProperties(_: Notification)
  @objc @available(OSX 10.9, *) func windowDidChangeOcclusionState(_: Notification)
  @objc func windowDidChangeScreen(_: Notification)
  @objc func windowDidChangeScreenProfile(_: Notification)
  @objc func windowDidDeminiaturize(_: Notification)
  @objc @available(OSX 10.6, *) func windowDidEndLiveResize(_: Notification)
  @objc func windowDidEndSheet(_: Notification)
  @objc @available(OSX 10.7, *) func windowDidEnterFullScreen(_: Notification)
  @objc @available(OSX 10.7, *) func windowDidEnterVersionBrowser(_: Notification)
  @objc @available(OSX 10.7, *) func windowDidExitFullScreen(_: Notification)
  @objc @available(OSX 10.7, *) func windowDidExitVersionBrowser(_: Notification)
  @objc func windowDidExpose(_: Notification)
  @objc @available(OSX 10.7, *) func windowDidFailToEnterFullScreen(_: NSWindow)
  @objc @available(OSX 10.7, *) func windowDidFailToExitFullScreen(_: NSWindow)
  @objc func windowDidMiniaturize(_: Notification)
  @objc func windowDidMove(_: Notification)
  @objc func windowDidResignKey(_: Notification)
  @objc func windowDidResignMain(_: Notification)
  @objc func windowDidResize(_: Notification)
  @objc func windowDidUpdate(_: Notification)
  @objc func windowShouldClose(_: NSWindow) -> Bool
  @objc func windowShouldZoom(_: NSWindow, toFrame: NSRect) -> Bool
  @objc func windowWillBeginSheet(_: Notification)
  @objc func windowWillClose(_: Notification)
  @objc @available(OSX 10.7, *) func windowWillEnterFullScreen(_: Notification)
  @objc @available(OSX 10.7, *) func windowWillEnterVersionBrowser(_: Notification)
  @objc @available(OSX 10.7, *) func windowWillExitFullScreen(_: Notification)
  @objc @available(OSX 10.7, *) func windowWillExitVersionBrowser(_: Notification)
  @objc func windowWillMiniaturize(_: Notification)
  @objc func windowWillMove(_: Notification)
  @objc (windowWillResize:toSize:) func windowWillResize(_: NSWindow, to: NSSize) -> NSSize
  @objc (windowWillReturnFieldEditor:toObject:) func windowWillReturnFieldEditor(_: NSWindow, to: Any?) -> Any?
  @objc func windowWillReturnUndoManager(_: NSWindow) -> UndoManager?
  @objc @available(OSX 10.6, *) func windowWillStartLiveResize(_: Notification)
  @objc func windowWillUseStandardFrame(_: NSWindow, defaultFrame: NSRect) -> NSRect
}

