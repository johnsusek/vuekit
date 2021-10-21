import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSPasteboardItemDataProviderExports: JSExport, NSObjectExports {
  @objc func pasteboard(_: NSPasteboard?, item: NSPasteboardItem, provideDataForType: NSPasteboard.PasteboardType)
  @objc func pasteboardFinishedWithDataProvider(_: NSPasteboard)
}

