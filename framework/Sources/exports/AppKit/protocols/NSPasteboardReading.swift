import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSPasteboardReadingExports: JSExport, NSObjectExports {
  @objc func create(pasteboardPropertyList: Any, ofType: NSPasteboard.PasteboardType)
}

