import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSPasteboardWritingExports: JSExport, NSObjectExports {
  @objc (pasteboardPropertyListForType:) func pasteboardPropertyList(forType: NSPasteboard.PasteboardType) -> Any?
  @objc (writableTypesForPasteboard:) func writableTypes(`for`: NSPasteboard) -> [String]
  @objc (writingOptionsForType:pasteboard:) func writingOptions(forType: NSPasteboard.PasteboardType, pasteboard: NSPasteboard) -> NSPasteboard.WritingOptions
}

