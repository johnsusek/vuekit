import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSPasteboardTypeOwnerExports: JSExport, NSObjectExports {
  @objc func pasteboard(_: NSPasteboard, provideDataForType: NSPasteboard.PasteboardType)
  @objc func pasteboardChangedOwner(_: NSPasteboard)
}

