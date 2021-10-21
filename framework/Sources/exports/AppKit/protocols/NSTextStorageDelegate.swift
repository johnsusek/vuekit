import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextStorageDelegateExports: JSExport, NSObjectExports {
  @objc @available(OSX 10.11, *) func textStorage(_: NSTextStorage, didProcessEditing: NSTextStorageEditActions, range: NSRange, changeInLength: Int)
  @objc @available(OSX 10.11, *) func textStorage(_: NSTextStorage, willProcessEditing: NSTextStorageEditActions, range: NSRange, changeInLength: Int)
}

