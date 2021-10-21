import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSPathControlDelegateExports: JSExport, NSObjectExports {
  @objc (pathControl:shouldDragItem:withPasteboard:) func pathControl(_: NSPathControl, shouldDrag: NSPathControlItem, with: NSPasteboard) -> Bool
  @objc (pathControl:shouldDragPathComponentCell:withPasteboard:) func pathControl(_: NSPathControl, shouldDrag: NSPathComponentCell, with: NSPasteboard) -> Bool
  @objc (pathControl:willDisplayOpenPanel:) func pathControl(_: NSPathControl, willDisplay: NSOpenPanel)
  @objc (pathControl:willPopUpMenu:) func pathControl(_: NSPathControl, willPopUp: NSMenu)
  @objc func pathControl(_: NSPathControl, acceptDrop: NSDraggingInfo) -> Bool
  @objc func pathControl(_: NSPathControl, validateDrop: NSDraggingInfo) -> NSDragOperation
}

