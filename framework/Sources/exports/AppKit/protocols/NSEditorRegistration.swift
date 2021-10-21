import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSEditorRegistrationExports: JSExport, NSObjectExports {
  @objc func objectDidBeginEditing(_: NSEditor)
  @objc func objectDidEndEditing(_: NSEditor)
}

