import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAlertDelegateExports: JSExport, NSObjectExports {
  @objc func alertShowHelp(_: NSAlert) -> Bool
}

