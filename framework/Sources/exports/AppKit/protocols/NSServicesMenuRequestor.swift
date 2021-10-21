import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSServicesMenuRequestorExports: JSExport, NSObjectExports {
  @objc (readSelectionFromPasteboard:) func readSelection(from: NSPasteboard) -> Bool
  @objc (writeSelectionToPasteboard:types:) func writeSelection(to: NSPasteboard, types: [String]) -> Bool
}

